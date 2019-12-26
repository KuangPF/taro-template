"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../utils/request/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ApiRequest = (_temp2 = _class = function (_BaseComponent) {
  _inherits(ApiRequest, _BaseComponent);

  function ApiRequest() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ApiRequest);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ApiRequest.__proto__ || Object.getPrototypeOf(ApiRequest)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["loopArray0", "apiLoading", "trendingList"], _this.handleGetGithubTrending = function () {
      _this.setState({
        apiLoading: true
      });
      (0, _index4.default)({
        url: 'https://github-trending-api.now.sh/repositories?since=daily'
      }).then(function (res) {
        _this.setState({
          apiLoading: false,
          trendingList: res
        });
      });
    }, _this.customComponents = ["TrendingItem"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ApiRequest, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(ApiRequest.prototype.__proto__ || Object.getPrototypeOf(ApiRequest.prototype), "_constructor", this).call(this, props);

      this.state = {
        apiLoading: false,
        trendingList: []
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
          apiLoading = _state.apiLoading,
          trendingList = _state.trendingList;

      var loopArray0 = trendingList.length > 0 ? trendingList.map(function (item, index) {
        item = {
          $original: (0, _index.internal_get_original)(item)
        };
        var $loopState__temp2 = trendingList.length > 0 ? index + 1 : null;
        var $loopState__temp4 = trendingList.length > 0 ? index + 1 : null;

        var _genCompid = (0, _index.genCompid)(__prefix + "azzzzzzzzz" + index, true),
            _genCompid2 = _slicedToArray(_genCompid, 2),
            $prevCompid__0 = _genCompid2[0],
            $compid__0 = _genCompid2[1];

        _index.propsManager.set({
          "data": item.$original,
          "index": $loopState__temp4
        }, $compid__0, $prevCompid__0);
        return {
          $loopState__temp2: $loopState__temp2,
          $loopState__temp4: $loopState__temp4,
          $compid__0: $compid__0,
          $original: item.$original
        };
      }) : [];
      Object.assign(this.__state, {
        loopArray0: loopArray0
      });
      return this.__state;
    }
  }]);

  return ApiRequest;
}(_index.Component), _class.$$events = ["handleGetGithubTrending"], _class.$$componentPath = "pages/api-request/index", _temp2);
exports.default = ApiRequest;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(ApiRequest, true));