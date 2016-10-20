'use strict';

const rule = require('../rules/no-append')
const RuleTester = require('eslint').RuleTester

const error = '$.append is potentially dangerous'

const ruleTester = new RuleTester()
ruleTester.run('no-append', rule, {
  valid: [
    'append()',
    '[].append()',
    'div.append()',
    'div.append',
    '$div.append()',
    '$div.first.append()'
  ],
  invalid: [
    {
      code: '$("div").append("<script>")',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$div.append("<script>")',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$("div").first().append("<script>")',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$("div").prepend($("input").append("<script>"))',
      errors: [{message: error, type: 'CallExpression'}]
    }
  ]
})
