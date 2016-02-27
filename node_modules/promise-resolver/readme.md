# promise-resolver [![Build Status](https://travis-ci.org/jamestalmage/promise-resolver.svg?branch=master)](https://travis-ci.org/jamestalmage/promise-resolver)

> Provide flexible methods that accept callbacks and return promises without requiring a Promise implementation exist


## Install

```
$ npm install --save promise-resolver
```


## Usage

```js
var promiseResolver = require('promise-resolver');

function sayMyName(name, cb) {
  var deferred = promiseResolver.defer(cb);
  
  // this resolves the promise and calls the callback (asynchronously).
  deferred.cb(null, 'My name is ' + name + '!');
  
  return deferred.promise;
```

`sayMyName` can now be used in one of two ways:


##### Provide a callback

```js
sayMyName('James', function (error, message) {
  console.log(message);
  // => 'My name is James!'
});
```


##### Use the returned promise

```js
sayMyName('Susan').then(function (message) {
  console.log(message);
  // => 'My name is Susan!'
});
```

If you do not provide a callback, then you should `catch` errors on the promise. Most promise implementations emit
 [`unhandledRejection`](https://nodejs.org/api/process.html#process_event_unhandledrejection) events.
 If a callback is provided, 
 [`unhandledRejection`](https://nodejs.org/api/process.html#process_event_unhandledrejection) 
 events are be suppressed (it is assumed the callback handles any errors).
 
 
#### Safe Callbacks

`promise-resolver` protects against callback misuse in the following ways:

```js
function doStuff (cb) {
  var deferred = promiseResolver(cb);
  // prevent these typical problems:
  deferred.cb() // synchronous invocation
  deferred.cb() // multiple invocations
  deferred.cb() // undefined is not a function (deferred.cb is always defined, even if cb is not)
}
```


#### Missing Promise Implementation

`promise-resolver` allows you to create API's that provide the convenience of Promises,
 without demanding a bulky Promise polyfill on systems that do not already have an implementation.
 It looks first for `bluebird` and then a native `Promise` implementation.

If the user does *not* supply a callback *and* no promise implementation is found, an
 error will be thrown explaining how to resolve the problem:

```
  No Promise Implementation: You must use a callback function, upgrade to Node >= 0.11.13, or install bluebird
```

If it does *not* find a promise implementation, but a callback *is* found then it will still return a `deferred`, but 
 `deferred.promise` will be `undefined`.
 
Finally, `promiseResolver.defer(cb, Promise)` does allow you to specify an alternate Promise implementation as the second argument. 


## API
 
### promiseResolver.defer(passThrough, Promise)

* `passThrough` - a "pass through" node style callback as described above
* `Promise` - an alternate Promise constructor (will use `bluebird` or native `Promise` implementation by default).

The return value is a standard `defer` object with an additional `cb` property
that is a node style resolver callback.
 
```js
var deferred = promiseResolver(passThroughCallback);

// rejects promise and calls passThroughCallback with same args
deferred.cb(new Error('...')); 

// resolves promise and calls passThroughCallback with same args
deferred. cb(null, 'result'); 

return deferred.promise;
```

* `deferred.cb` will resolve/reject the promise and call `passThroughCallback`
* Ensures that `passThroughCallback` is only called once.
* If `passThroughCallback` is provided, it is assumed to handle any errors, and so `unhandledRejection` errors on 
  the promise will be suppressed. This avoids potentially confusing console warnings if users are handling errors
  via a callback and ignoring the returned promise. 
* `deferred.resolve` and `deferred.reject` are also available, and behave as expected.
* `deferred.promise` will be `undefined` if no Promise implementation is found (in that case `passThroughCallback` is required).


### promiseResolver(resolve, reject, passThrough) 

All arguments should be functions, null, or undefined.

* `resolve` - promise resolve function
* `reject` - promise reject function
* `passThrough` - a "pass through" node style (error first) callback.

Returns a node style callback: `cb(err, result...)`

Calling the callback will resolve or reject the promise (depending on the `err` argument).
If it exists, the `passThrough` callback will be called with the same arguments.

```js
var promiseResolver = require('promise-resolver');

return new Promise(function (resolve, reject) {
  var cb = promiseResolver(resolve, reject, passThroughCallback);
  
  cb(new Error('...'));
  
  cb(null, 'result');
});
```

This behaves similar to the `defer` method, with the only exception being that `unhandledRejection` errors are *not* 
automatically suppressed when `passThroughCallback` is supplied. It also requires you find and invoke the Promise implementation.


## License

MIT © [James Talmage](http://github.com/jamestalmage)
