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
    'div.appendTo'
  ],
  invalid: [
    {
      code: '$("div").appendTo()',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$div.appendTo()',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$("div").first().appendTo()',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$("div").append($("input").appendTo())',
      errors: [{message: error, type: 'CallExpression'}]
    }
  ]
})
