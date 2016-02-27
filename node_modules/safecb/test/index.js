var test = require('tape')
var goodify = require('../')

test('basic', function (t) {
  t.plan(3)
  t.timeoutAfter(100)

  t.equal(typeof goodify(undefined), 'function')

  var a = 0
  var goodInc = goodify(inc)
  goodInc()
  goodInc()
  t.equal(a, 0) // async

  function inc () {
    a++
    t.equal(a, 1) // ensure it's called only once
  }
})
