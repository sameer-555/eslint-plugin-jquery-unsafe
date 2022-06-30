'use strict';

const rule = require('../rules/no-wrap')
const RuleTester = require('eslint').RuleTester

const error = '$.wrap is potentially dangerous'

const ruleTester = new RuleTester()
ruleTester.run('no-wrap', rule, {
  valid: [
    'wrap()',
    '[].wrap()',
    'div.wrap()',
    'div.wrap',
    '$div.wrap()',
    '$div.first.wrap()'
  ],
  invalid: [
    {
      code: '$("div").wrap("<script>")',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$div.wrap("<script>")',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$("div").first().wrap("<script>")',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$("div").append($("input").wrap("<script>"))',
      errors: [{message: error, type: 'CallExpression'}]
    }
  ]
})
