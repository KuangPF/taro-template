"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require("../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../npm/dva-core/dist/index.js");

var _index4 = require("../models/index.js");

var _index5 = _interopRequireDefault(_index4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var opt = {
  models: _index5.default,
  initialState: {}
};
var app = (0, _index3.create)(opt);
// 适配支付宝小程序
if (_index2.default.getEnv() === _index2.default.ENV_TYPE.ALIPAY) {
  global = {};
}
if (!global.registered) opt.models.forEach(function (model) {
  return app.model(model);
});
global.registered = true;
app.start();
var store = app._store;
exports.default = store;