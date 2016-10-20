'use strict';

const utils = require('./utils.js')

module.exports = function(context) {
  return {
    CallExpression: function(node) {
      if (node.callee.type !== 'MemberExpression') return
      if (node.callee.property.name !== 'append') return

      if (utils.isjQuery(node)) {
        context.report({
          node: node,
          message: '$.append is potentially dangerous'
        })
      }
    }
  }
}

module.exports.schema = []
