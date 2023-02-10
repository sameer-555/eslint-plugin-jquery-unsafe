'use strict';

const rule = require('../rules/no-wrapInner')
const RuleTester = require('eslint').RuleTester

const error = '$.wrapInner is potentially dangerous'

const ruleTester = new RuleTester()
ruleTester.run('no-wrapInner', rule, {
  valid: [
    'wrapInner()',
    '[].wrapInner()',
    'div.wrapInner()',
    'div.wrapInner',
    '$div.wrapInner()',
    '$div.first.wrapInner()'
  ],
  invalid: [
    {
      code: '$("div").wrapInner("<script>")',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$div.wrapInner("<script>")',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$("div").first().wrapInner("<script>")',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$("div").append($("input").wrapInner("<script>"))',
      errors: [{message: error, type: 'CallExpression'}]
    }
  ]
})
