'use strict';

const rule = require('../rules/no-wrapAll')
const RuleTester = require('eslint').RuleTester

const error = '$.wrapAll is potentially dangerous'

const ruleTester = new RuleTester()
ruleTester.run('no-wrapAll', rule, {
  valid: [
    'wrapAll()',
    '[].wrapAll()',
    'div.wrapAll()',
    'div.wrapAll',
    '$div.wrapAll()',
    '$div.first.wrapAll()'
  ],
  invalid: [
    {
      code: '$("div").wrapAll("<script>")',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$div.wrapAll("<script>")',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$("div").first().wrapAll("<script>")',
      errors: [{message: error, type: 'CallExpression'}]
    },
    {
      code: '$("div").append($("input").wrapAll("<script>"))',
      errors: [{message: error, type: 'CallExpression'}]
    }
  ]
})
