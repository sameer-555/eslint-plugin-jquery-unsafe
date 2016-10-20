'use strict';

module.exports = {
  rules: {
    'no-after': require('./rules/no-after'),
    'no-append': require('./rules/no-append'),
    'no-appendTo': require('./rules/no-appendTo'),
    'no-before': require('./rules/no-before'),
    'no-html': require('./rules/no-html'),
    'no-prepend': require('./rules/no-prepend'),
    'no-prependTo': require('./rules/no-prependTo')
  },
  configs: {
    default: {
      rules: {
        "no-after": 2,
        "no-append": 2,
        "no-appendTo": 2,
        "no-before": 2,
        "no-html": 2,
        "no-prepend": 2,
        "no-prependTo": 2
      }
    }
  }
}
