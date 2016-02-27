
var dezalgo = require('dezalgo')
var once = require('once')
var noop = function () {}

module.exports = function safe (cb) {
  return once(dezalgo(cb || noop))
}
