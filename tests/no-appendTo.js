'use strict';

const rule = require('../rules/no-appendTo')
const RuleTester = require('eslint').RuleTester

const error = '$.appendTo is potentially dangerous'

const ruleTester = new RuleTester()
ruleTester.run('no-appendTo', rule, {
  valid: [
    'appendTo()',
    '[].appendTo()',
    'div.appendTo()',
    'div.appendTo',
    '$div.appendTo()',
    '$div.first.appendTo()'
  ],
  invalid: [
    {
      code: '$("div").appendTo("<script>")',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$div.appendTo("<script>")',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$("div").first().appendTo("<script>")',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$("div").append($("input").appendTo("<script>"))',
      errors: [{message: error, type: 'CallExpression'}]
    }
  ]
})
