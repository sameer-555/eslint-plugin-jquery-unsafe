'use strict';

const utils = require('./utils.js')

module.exports = function(context) {
  return {
    CallExpression: function(node) {
      if (node.callee.type !== 'MemberExpression') return
      if (node.callee.property.name !== 'wrap') return
      if (node.arguments.length === 0 ) return

      if (utils.isjQuery(node)) {
        context.report({
          node: node,
          message: '$.wrap is potentially dangerous'
        })
      }
    }
  }
}

module.exports.schema = []
