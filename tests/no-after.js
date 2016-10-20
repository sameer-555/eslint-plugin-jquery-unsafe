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
    'div.after'
  ],
  invalid: [
    {
      code: '$("div").after()',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$div.after()',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$("div").first().after()',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$("div").append($("input").after())',
      errors: [{message: error, type: 'CallExpression'}]
    }
  ]
})
