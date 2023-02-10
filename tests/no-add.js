'use strict';

const rule = require('../rules/no-add')
const RuleTester = require('eslint').RuleTester

const error = '$.add is potentially dangerous'

const ruleTester = new RuleTester()
ruleTester.run('no-add', rule, {
  valid: [
    'add()',
    '[].add()',
    'div.add()',
    'div.add',
    '$div.add()',
    '$div.first.add()'
  ],
  invalid: [
    {
      code: '$("div").add("<script>")',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$div.add("<script>")',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$("div").first().add("<script>")',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$("div").append($("input").add("<script>"))',
      errors: [{message: error, type: 'CallExpression'}]
    }
  ]
})
