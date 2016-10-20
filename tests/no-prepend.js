'use strict';

const rule = require('../rules/no-prepend')
const RuleTester = require('eslint').RuleTester

const error = '$.prepend is potentially dangerous'

const ruleTester = new RuleTester()
ruleTester.run('no-prepend', rule, {
  valid: [
    'prepend()',
    '[].prepend()',
    'div.prepend()',
    'div.prepend',
    '$div.prepend()',
    '$div.first.prepend()'
  ],
  invalid: [
    {
      code: '$("div").prepend("<script>")',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$div.prepend("<script>")',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$("div").first().prepend("<script>")',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$("div").append($("input").prepend("<script>"))',
      errors: [{message: error, type: 'CallExpression'}]
    }
  ]
})
