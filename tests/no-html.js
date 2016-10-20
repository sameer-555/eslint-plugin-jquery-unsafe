'use strict';

const rule = require('../rules/no-html')
const RuleTester = require('eslint').RuleTester

const error = '$.html is potentially dangerous'

const ruleTester = new RuleTester()
ruleTester.run('no-html', rule, {
  valid: [
    'html()',
    '[].html()',
    'div.html()',
    'div.html',
    '$div.html()',
    '$div.first.html()'
  ],
  invalid: [
    {
      code: '$("div").html("<script>")',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$div.html("<script>")',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$("div").first().html("<script>")',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$("div").append($("input").html("<script>"))',
      errors: [{message: error, type: 'CallExpression'}]
    }
  ]
})
