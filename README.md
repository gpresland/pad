# Pad

A simple padding library.

# Install

```
npm install https://github.com/gpresland/pad
```

# Usage

```javascript
const pad = require('pad');

const string = '1'; // <-- String to apply padding to
const length = 3;   // <-- Minimum length of string after padding
const char = '0';   // <-- Char to use as the padder

pad.left(string, length, char);
// Returns 001

pad.right(string, length, char);
// Returns 100
```