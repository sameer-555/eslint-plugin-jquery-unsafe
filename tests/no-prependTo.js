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
    'div.prependTo',
    '$div.prependTo()',
    '$div.first.prependTo()'
  ],
  invalid: [
    {
      code: '$("div").prependTo("<script>")',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$div.prependTo("<script>")',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$("div").first().prependTo("<script>")',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$("div").append($("input").prependTo("<script>"))',
      errors: [{message: error, type: 'CallExpression'}]
    }
  ]
})
