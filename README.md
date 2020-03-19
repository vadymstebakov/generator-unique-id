# generator-unique-id
[![npm](https://img.shields.io/npm/v/generator-unique-id.svg)](https://www.npmjs.com/package/generator-unique-id)
![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/generator-unique-id.svg)

Generate unique IDs for use as pseudo-private/protected names.

## Install
```sh
$ npm install generator-unique-id
```

## Usage
Pick your favorite:
```js
const ID = require('generator-unique-id');
```
or
```js
import ID from 'generator-unique-id';
```
and call this function.

For example:
```js
list.map(item => <li key={ID()} data={item} />)
```