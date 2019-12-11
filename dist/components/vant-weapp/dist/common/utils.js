'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.isDef = isDef;
exports.isObj = isObj;
exports.isNumber = isNumber;
exports.range = range;
exports.nextTick = nextTick;
exports.getSystemInfoSync = getSystemInfoSync;
exports.addUnit = addUnit;
function isDef(value) {
  return value !== undefined && value !== null;
}
function isObj(x) {
  var type = typeof x === 'undefined' ? 'undefined' : _typeof(x);
  return x !== null && (type === 'object' || type === 'function');
}
function isNumber(value) {
  return (/^\d+(\.\d+)?$/.test(value)
  );
}
function range(num, min, max) {
  return Math.min(Math.max(num, min), max);
}
function nextTick(fn) {
  setTimeout(function () {
    fn();
  }, 33.333333333333336);
}
var systemInfo = null;
function getSystemInfoSync() {
  if (systemInfo == null) {
    systemInfo = wx.getSystemInfoSync();
  }
  return systemInfo;
}
function addUnit(value) {
  if (!isDef(value)) {
    return undefined;
  }
  value = String(value);
  return isNumber(value) ? value + 'px' : value;
}