'use strict';

const rule = require('../rules/no-replaceAll')
const RuleTester = require('eslint').RuleTester

const error = '$.replaceAll is potentially dangerous'

const ruleTester = new RuleTester()
ruleTester.run('no-replaceAll', rule, {
  valid: [
    'replaceAll()',
    '[].replaceAll()',
    'div.replaceAll()',
    'div.replaceAll',
    '$div.replaceAll()',
    '$div.first.replaceAll()'
  ],
  invalid: [
    {
      code: '$("div").replaceAll("<script>")',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$div.replaceAll("<script>")',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$("div").first().replaceAll("<script>")',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$("div").append($("input").replaceAll("<script>"))',
      errors: [{message: error, type: 'CallExpression'}]
    }
  ]
})
