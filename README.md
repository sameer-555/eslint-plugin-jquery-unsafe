# eslint-plugin-jquery-unsafe

[![Node.js CI](https://github.com/mvondracek/eslint-plugin-jquery-unsafe/actions/workflows/node.js.yml/badge.svg)](https://github.com/mvondracek/eslint-plugin-jquery-unsafe/actions/workflows/node.js.yml)

Disallow jQuery functions with XSS potential.

> Copied directly from [eslint-plugin-jquery](https://github.com/dgraham/eslint-plugin-jquery).
> Forking didn't seem appropriate as the intent of the plugin is different.
>
> @kellyjosephprice, https://www.npmjs.com/package/eslint-plugin-jquery-unsafe/v/0.1.0

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm install eslint --save-dev
```

Next, install `eslint-plugin-jquery-unsafe`:

```
$ npm install eslint-plugin-jquery-unsafe --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-jquery-unsafe` globally.

## Usage

Add `jquery-unsafe` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": [
    "jquery-unsafe"
  ],
  "rules": {
    "jquery-unsafe/no-add": 2,
    "jquery-unsafe/no-after": 2,
    "jquery-unsafe/no-append": 2,
    "jquery-unsafe/no-appendTo": 2,
    "jquery-unsafe/no-before": 2,
    "jquery-unsafe/no-html": 2,
    "jquery-unsafe/no-insertAfter": 2,
    "jquery-unsafe/no-insertBefore": 2,
    "jquery-unsafe/no-prepend": 2,
    "jquery-unsafe/no-prependTo": 2,
    "jquery-unsafe/no-replaceWith": 2,
    "jquery-unsafe/no-wrap": 2,
    "jquery-unsafe/no-wrapAll": 2,
    "jquery-unsafe/no-wrapInner": 2
  }
}
```

## Development

```
npm install
npm test
```

## License

Distributed under the MIT license. See LICENSE for details.
