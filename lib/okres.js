const timeFormat = require('./format');

module.exports = okres;

const DURATION_FORMATS = {
  'year': ['y', 'yy'],
  'month': ['M', 'MM'],
  'day': ['d', 'dd'],
  'hour': ['h', 'hh'],
  'minute': ['m', 'mm']
};

function format(timeFormat, duration, options = {}) {
  const withSuffix = options.future || options.past;

  let str =  Object.keys(DURATION_FORMATS)
    .filter(period => options.showZero ? period in duration : duration[period])
    .map(function(period) {
      const value = duration[period];
      const unit = DURATION_FORMATS[period][value === 1 ? 0 : 1];
      return timeFormat.toString(value, unit, !withSuffix);
    })
    .join(' ');

  if (withSuffix) {
    const when = options.future ? 'future' : 'past';
    str = timeFormat.toFutureOrPast(str, when);
  }

  return timeFormat.postformat(str);
}

const DEFAULT_FORMAT = format.bind(null, timeFormat());

function okres(locale) {
  const typeLocale = typeof locale;
  return typeLocale === 'string' || typeLocale === 'undefined'
    ? format.bind(null, timeFormat(locale))
    : DEFAULT_FORMAT(...arguments);
}
