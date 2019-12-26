"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2; /*
                     * @Author: KuangPF
                     * @Date: 2019-12-11 00:11:48
                     * @Description: 数据管理 dva
                     */


var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../models/data-dva/index.js");

var _index4 = require("../../npm/@tarojs/redux/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DataDva = (_temp2 = _class = function (_PureComponent) {
  _inherits(DataDva, _PureComponent);

  function DataDva() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DataDva);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DataDva.__proto__ || Object.getPrototypeOf(DataDva)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["count", "dispatch"], _this.config = {
      usingComponents: {
        'van-button': '/components/vant-weapp/dist/button/index'
      }
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DataDva, [{
    key: "_constructor",
    value: function _constructor() {
      _get(DataDva.prototype.__proto__ || Object.getPrototypeOf(DataDva.prototype), "_constructor", this).apply(this, arguments);
      this.$$refs = new _index2.default.RefsArray();
    }
  }, {
    key: "handleCountOperate",
    value: function handleCountOperate(operateType) {
      this.props.dispatch({
        type: _index3.namespace + "/opeateDecrease",
        payload: {
          operateType: operateType
        }
      });
    }
  }, {
    key: "handleSetZero",
    value: function handleSetZero() {
      this.props.dispatch({
        type: _index3.namespace + "/setState",
        payload: {
          count: 0
        }
      });
    }
  }, {
    key: "_createData",
    value: function _createData() {
      var _this2 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var count = this.__props.count;


      this.anonymousFunc0 = function () {
        _this2.handleCountOperate(_index3.actionType.Decrease);
      };

      this.anonymousFunc1 = function () {
        _this2.handleCountOperate(_index3.actionType.Increase);
      };

      Object.assign(this.__state, {
        count: count
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(e) {
      ;
    }
  }, {
    key: "anonymousFunc1",
    value: function anonymousFunc1(e) {
      ;
    }
  }]);

  return DataDva;
}(_index.PureComponent), _class.$$events = ["anonymousFunc0", "anonymousFunc1", "handleSetZero"], _class.$$componentPath = "pages/data-dva/index", _temp2);

var mapStateToProps = function mapStateToProps(models) {
  return _extends({}, models[_index3.namespace]);
};
var DataDva__Connected = (0, _index4.connect)(mapStateToProps)(DataDva);
exports.default = DataDva__Connected;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(DataDva__Connected, true));