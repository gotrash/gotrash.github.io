import { format } from "date-fns";
import { DateTimeFormats } from "~/constants";
import { defu } from "defu";

export function useFetchTransform(options = {}) {
  const defaults = {
    dateFormat: DateTimeFormats.DISPLAY_DATE
  };
  // for nice deep defaults, please use unjs/defu
  const params = defu(options, defaults);

  const transformers = {
    currency: (_amount: number | string) =>
      (!_amount ? 0 : typeof _amount === "number" ? _amount : Number(_amount)).toFixed(2),
    date: (_date: any) => (!_date ? null : format(new Date(_date), params.dateFormat))
  };

  const mapContent = (map: TransformerMap, item: any) => {
    for (const transformerType of Object.keys(map)) {
      const transformer = transformers[transformerType as keyof TransformerMap],
        values = map[transformerType as keyof TransformerMap];

      if (typeof values === "string") item[values] = transformer(item[values]);
      else for (const v of values) item[v] = transformer(item[v]);
    }

    return item;
  };

  const createTransform = (map: TransformerMap) => (data: any) => {
    (data.content || []).map((item: any) => mapContent(map, item));

    return data;
  };
  return { createTransform };
}

interface TransformerMap {
  currency: string | Array<string>;
  date: string | Array<string>;
}
