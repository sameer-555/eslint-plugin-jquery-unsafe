'use strict';

const utils = require('./utils.js')

module.exports = function(context) {
  return {
    CallExpression: function(node) {
      if (node.callee.type !== 'MemberExpression') return
      if (node.callee.property.name !== 'replaceAll') return
      if (node.arguments.length === 0 ) return

      if (utils.isjQuery(node)) {
        context.report({
          node: node,
          message: '$.replaceAll is potentially dangerous'
        })
      }
    }
  }
}

module.exports.schema = []
