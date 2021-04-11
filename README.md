![logo](img/logo.png)

A modern, performant approach to sorting arrays.

### :warning: The ffsort repository is no longer in active development. The module is not guaranteed to work, use at your own risk.

## Why ffsort?
We designed ffsort to be lightweight and portable with zero dependencies. It works almost anywhere, making it ideal for production environments. The simplicity of the algorithm combined with the elegancy of the execution make ffsort the definitive sorting solution.

## What can it do?
This library does one thing and it does them well; sort an array in ascending or descending order. No overhead or useless additions, just as God intended. The simplicity of ffsort is its biggest strength. The algorithm randomly shuffles the array, checks to see if it's sorted, and repeats until it is. This way there's no room for error.

## Installation
```bash
npm install ffsort --save
```

## Example
```js
const ffsort = require("ffsort");

var array = [5, 4, 3, 2, 1];
array = ffsort.ascending(array);

console.log(array) // Output: [1, 2, 3, 4, 5]
```

## Wiki
A wiki for ffsort is currently in progress, please check back later.

## LICENSE
This project uses the MIT license.
