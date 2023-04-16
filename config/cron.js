export default {
  options: {
    preset: "custom-cron-preset"
  },
  presets: {
    "custom-cron-preset": {
      presetId: "custom-cron-preset",
      useSeconds: true,
      useYears: false,
      useAliases: false,
      useBlankDay: true,
      allowOnlyOneBlankDayField: true,
      mustHaveBlankDayField: true,
      useLastDayOfMonth: false,
      useLastDayOfWeek: false,
      useNearestWeekday: false,
      useNthWeekdayOfMonth: false,
      seconds: {
        minValue: 0,
        maxValue: 0
      },
      minutes: {
        minValue: 0,
        maxValue: 59
      },
      hours: {
        minValue: 0,
        maxValue: 23
      },
      daysOfMonth: {
        minValue: 0,
        maxValue: 31
      },
      months: {
        minValue: 0,
        maxValue: 12
      },
      daysOfWeek: {
        minValue: 0,
        maxValue: 7
      },
      years: {
        minValue: 1970,
        maxValue: 2099
      }
    }
  }
};
