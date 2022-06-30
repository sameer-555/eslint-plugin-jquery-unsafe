'use strict';

const rule = require('../rules/no-replaceWith')
const RuleTester = require('eslint').RuleTester

const error = '$.replaceWith is potentially dangerous'

const ruleTester = new RuleTester()
ruleTester.run('no-replaceWith', rule, {
  valid: [
    'replaceWith()',
    '[].replaceWith()',
    'div.replaceWith()',
    'div.replaceWith',
    '$div.replaceWith()',
    '$div.first.replaceWith()'
  ],
  invalid: [
    {
      code: '$("div").replaceWith("<script>")',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$div.replaceWith("<script>")',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$("div").first().replaceWith("<script>")',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$("div").append($("input").replaceWith("<script>"))',
      errors: [{message: error, type: 'CallExpression'}]
    }
  ]
})
