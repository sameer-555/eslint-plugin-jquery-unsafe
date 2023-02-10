'use strict';

module.exports = {
  rules: {
    'no-add': require('./rules/no-add'),
    'no-after': require('./rules/no-after'),
    'no-append': require('./rules/no-append'),
    'no-appendTo': require('./rules/no-appendTo'),
    'no-before': require('./rules/no-before'),
    'no-html': require('./rules/no-html'),
    'no-insertAfter': require('./rules/no-insertAfter'),
    'no-insertBefore': require('./rules/no-insertBefore'),
    'no-prepend': require('./rules/no-prepend'),
    'no-prependTo': require('./rules/no-prependTo'),
    'no-replaceWith': require('./rules/no-replaceWith'),
    'no-wrap': require('./rules/no-wrap'),
    'no-wrapAll': require('./rules/no-wrapAll'),
    'no-wrapInner': require('./rules/no-wrapInner')
  },
  configs: {
    default: {
      rules: {
        "no-add": 2,
        "no-after": 2,
        "no-append": 2,
        "no-appendTo": 2,
        "no-before": 2,
        "no-html": 2,
        "no-insertAfter": 2,
        "no-insertBefore": 2,
        "no-prepend": 2,
        "no-prependTo": 2,
        "no-replaceWith": 2,
        "no-wrap": 2,
        "no-wrapAll": 2,
        "no-wrapInner": 2
      }
    }
  }
}
