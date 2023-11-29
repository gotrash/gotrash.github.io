export default defineI18nConfig(() => ({
  warnHtmlInMessage: false,
  warnHtmlMessage: false,
  legacy: false,
  globalInjection: true,
  strictMessage: false,
  compilation: {
    strictMessage: false
  }
}));
