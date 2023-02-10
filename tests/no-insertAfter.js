'use strict';

const rule = require('../rules/no-insertAfter')
const RuleTester = require('eslint').RuleTester

const error = '$.insertAfter is potentially dangerous'

const ruleTester = new RuleTester()
ruleTester.run('no-insertAfter', rule, {
  valid: [
    'insertAfter()',
    '[].insertAfter()',
    'div.insertAfter()',
    'div.insertAfter',
    '$div.insertAfter()',
    '$div.first.insertAfter()'
  ],
  invalid: [
    {
      code: '$("div").insertAfter("<script>")',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$div.insertAfter("<script>")',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$("div").first().insertAfter("<script>")',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$("div").append($("input").insertAfter("<script>"))',
      errors: [{message: error, type: 'CallExpression'}]
    }
  ]
})
