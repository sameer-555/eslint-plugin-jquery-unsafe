'use strict';

const rule = require('../rules/no-insertBefore')
const RuleTester = require('eslint').RuleTester

const error = '$.insertBefore is potentially dangerous'

const ruleTester = new RuleTester()
ruleTester.run('no-insertBefore', rule, {
  valid: [
    'insertBefore()',
    '[].insertBefore()',
    'div.insertBefore()',
    'div.insertBefore',
    '$div.insertBefore()',
    '$div.first.insertBefore()'
  ],
  invalid: [
    {
      code: '$("div").insertBefore("<script>")',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$div.insertBefore("<script>")',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$("div").first().insertBefore("<script>")',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$("div").append($("input").insertBefore("<script>"))',
      errors: [{message: error, type: 'CallExpression'}]
    }
  ]
})
