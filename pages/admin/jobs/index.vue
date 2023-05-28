<script>
  import { format } from "date-fns";
  import { PagedJpaTablePage } from "~/mixins";
  import { DateTimeFormats } from "~/constants";

  export default {
    name: "JobsIndex",
    mixins: [PagedJpaTablePage],
    apiUrl: "/jobs",
    rootRoute: "jobs-jobs",
    pageTitleTranslation: "NAV__JOBS",
    showFilters: false,
    layout: "admin",
    data() {
      const $t = this.$t.bind(this);

      return {
        fields: [
          { key: "id", label: $t("JOBS.LABEL.ID") },
          {
            key: "jobType",
            label: $t("JOBS.LABEL.JOB_TYPE"),
            formatter: value => this.$t(`JOB_TYPES.TYPE.${value.machineName}`)
          },
          {
            key: "createdAt",
            label: $t("JOBS.LABEL.CREATED_AT"),
            formatter: value => (value ? format(new Date(value), DateTimeFormats.DISPLAY_DATE_TIME) : null)
          },
          {
            key: "updatedAt",
            label: $t("JOBS.LABEL.UPDATED_AT"),
            formatter: value => (value ? format(new Date(value), DateTimeFormats.DISPLAY_DATE_TIME) : null)
          }
        ]
      };
    }
  };
</script>
