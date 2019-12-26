"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VantWeapp = (_temp2 = _class = function (_PureComponent) {
  _inherits(VantWeapp, _PureComponent);

  function VantWeapp() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, VantWeapp);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = VantWeapp.__proto__ || Object.getPrototypeOf(VantWeapp)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["menuDropList", "menuDropValue"], _this.config = {
      usingComponents: {
        'van-button': '/components/vant-weapp/dist/button/index',
        'van-search': '/components/vant-weapp/dist/search/index',
        'van-icon': '/components/vant-weapp/dist/icon/index'
      }
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(VantWeapp, [{
    key: "_constructor",
    value: function _constructor() {
      _get(VantWeapp.prototype.__proto__ || Object.getPrototypeOf(VantWeapp.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        menuDropList: [{ text: '全部商品', value: 0 }, { text: '新款商品', value: 1 }, { text: '活动商品', value: 2 }],
        menuDropValue: 0
      };
      this.$$refs = new _index2.default.RefsArray();
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      Object.assign(this.__state, {});
      return this.__state;
    }
  }]);

  return VantWeapp;
}(_index.PureComponent), _class.$$events = [], _class.$$componentPath = "pages/vant-weapp/index", _temp2);
exports.default = VantWeapp;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(VantWeapp, true));