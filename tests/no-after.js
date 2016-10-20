'use strict';

const rule = require('../rules/no-after')
const RuleTester = require('eslint').RuleTester

const error = '$.after is potentially dangerous'

const ruleTester = new RuleTester()
ruleTester.run('no-after', rule, {
  valid: [
    'after()',
    '[].after()',
    'div.after()',
    'div.after',
    '$div.after()',
    '$div.first.after()'
  ],
  invalid: [
    {
      code: '$("div").after("<script>")',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$div.after("<script>")',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$("div").first().after("<script>")',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$("div").append($("input").after("<script>"))',
      errors: [{message: error, type: 'CallExpression'}]
    }
  ]
})
