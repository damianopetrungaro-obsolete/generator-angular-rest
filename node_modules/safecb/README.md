# safecb

```js
var safe = require('safecb')

function doStuff (cb) {
  cb = safe(cb)
  // prevent these typical problems:
  cb() // synchronous invocation
  cb() // multiple invocations
  cb() // undefined is not a function (if cb is undefined)
}
```
