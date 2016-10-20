# eslint-plugin-jquery-unsafe

Disallow jQuery functions with XSS potential.

Copied directly from [eslint-plugin-jquery](https://github.com/dgraham/eslint-plugin-jquery).
Forking didn't seem appropriate as the intent of the plugin is different.

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
    "jquery/no-after": 2,
    "jquery/no-append": 2,
    "jquery/no-appendTo": 2,
    "jquery/no-before": 2,
    "jquery/no-html": 2,
    "jquery/no-prepend": 2,
    "jquery/no-prependTo": 2
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
