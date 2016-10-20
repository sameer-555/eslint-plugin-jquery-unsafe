'use strict';

const rule = require('../rules/no-before')
const RuleTester = require('eslint').RuleTester

const error = '$.before is potentially dangerous'

const ruleTester = new RuleTester()
ruleTester.run('no-before', rule, {
  valid: [
    'before()',
    '[].before()',
    'div.before()',
    'div.before'
  ],
  invalid: [
    {
      code: '$("div").before()',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$div.before()',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$("div").first().before()',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$("div").append($("input").before())',
      errors: [{message: error, type: 'CallExpression'}]
    }
  ]
})
