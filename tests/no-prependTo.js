'use strict';

const rule = require('../rules/no-prependTo')
const RuleTester = require('eslint').RuleTester

const error = '$.prependTo is potentially dangerous'

const ruleTester = new RuleTester()
ruleTester.run('no-prependTo', rule, {
  valid: [
    'prependTo()',
    '[].prependTo()',
    'div.prependTo()',
    'div.prependTo'
  ],
  invalid: [
    {
      code: '$("div").prependTo()',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$div.prependTo()',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$("div").first().prependTo()',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$("div").append($("input").prependTo())',
      errors: [{message: error, type: 'CallExpression'}]
    }
  ]
})
