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

var BaseComponent = (_temp2 = _class = function (_PureComponent) {
  _inherits(BaseComponent, _PureComponent);

  function BaseComponent() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, BaseComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BaseComponent.__proto__ || Object.getPrototypeOf(BaseComponent)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "timeValue", "userInfo"], _this.handleGetUserInfo = function (e) {
      var userInfo = e.detail.userInfo;

      _this.setState({
        userInfo: userInfo
      });
      console.log(e);
    }, _this.handleDateChange = function (e) {
      var value = e.detail.value;

      _index2.default.showToast({
        title: "\u5DF2\u9009\u4E2D: " + value,
        icon: 'none'
      });
      console.log(e);
    }, _this.handleShowActionSheet = function () {
      var itemList = ['A', 'B', 'C'];
      _index2.default.showActionSheet({
        itemList: itemList,
        success: function success(res) {
          var itemCheck = itemList[res.tapIndex];
          _index2.default.showToast({
            title: "\u5DF2\u9009\u4E2D: " + itemCheck,
            icon: 'none'
          });
        },
        fail: function fail(res) {
          console.log(res.errMsg);
        }
      });
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(BaseComponent, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(BaseComponent.prototype.__proto__ || Object.getPrototypeOf(BaseComponent.prototype), "_constructor", this).call(this, props);

      this.state = {
        timeValue: '2019-12-08',
        userInfo: {
          avatarUrl: '',
          nickName: ''
        }
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

      var _state = this.__state,
          timeValue = _state.timeValue,
          userInfo = _state.userInfo;

      var anonymousState__temp = userInfo.avatarUrl ? (0, _index.internal_inline_style)({ width: '100px', height: '100px' }) : null;
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp
      });
      return this.__state;
    }
  }]);

  return BaseComponent;
}(_index.PureComponent), _class.$$events = ["handleGetUserInfo", "handleDateChange", "handleShowActionSheet"], _class.$$componentPath = "pages/base-component/index", _temp2);
exports.default = BaseComponent;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(BaseComponent, true));