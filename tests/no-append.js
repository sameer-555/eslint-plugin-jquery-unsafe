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
    'div.append'
  ],
  invalid: [
    {
      code: '$("div").append()',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$div.append()',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$("div").first().append()',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$("div").html($("input").append())',
      errors: [{message: error, type: 'CallExpression'}]
    }
  ]
})
