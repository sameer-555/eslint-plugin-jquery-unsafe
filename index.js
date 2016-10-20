'use strict';

module.exports = {
  rules: {
    'no-after': require('./rules/no-after'),
    'no-append': require('./rules/no-append'),
    'no-appendTo': require('./rules/no-appendTo'),
    'no-before': require('./rules/no-before'),
    'no-html': require('./rules/no-html'),
    'no-prepend': require('./rules/no-prepend'),
    'no-prependTo': require('./rules/no-prependTo'),
  },
  configs: {
    default: {
      rules: {
        "jquery/no-after": 2,
        "jquery/no-append": 2,
        "jquery/no-appendTo": 2,
        "jquery/no-before": 2,
        "jquery/no-html": 2,
        "jquery/no-prepend": 2,
        "jquery/no-prependTo": 2,
      }
    }
  }
}
