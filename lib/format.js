const locales = require('./locales');

module.exports = timeFormat;

function formatInt(format, value) {
  return format.replace('%d', value);
}

function formatStr(format, value) {
  return format.replace('%s', value);
}

function identity(str) {
  return str;
}

function timeFormat(locale) {
  const localeData = locales(locale);
  const rt = localeData.relativeTime;

  function toString(value, unit, withSuffix) {
    const term = rt[unit];
    return typeof term === 'function'
      ? term(value, withSuffix, unit)
      : formatInt(term, value);
  }

  function toFutureOrPast(value, when) {
    const term = rt[when];
    return typeof term === 'function'
      ? term(value)
      : formatStr(term, value);
  }

  return {
    toString,
    toFutureOrPast,
    postformat: localeData.postformat || identity
  };
}
