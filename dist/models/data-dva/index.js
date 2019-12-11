"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var namespace = exports.namespace = 'data-dva';
var actionType = exports.actionType = undefined;
(function (actionType) {
  actionType["Increase"] = "Increase";
  actionType["Decrease"] = "Decrease";
})(actionType || (exports.actionType = actionType = {}));
var state = {
  count: 1
};
exports.default = {
  namespace: namespace,
  state: state,
  effects: {
    opeateDecrease: /*#__PURE__*/regeneratorRuntime.mark(function opeateDecrease(_ref, _ref2) {
      var payload = _ref.payload;
      var select = _ref2.select,
          put = _ref2.put;

      var operateType, _ref3, count;

      return regeneratorRuntime.wrap(function opeateDecrease$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              operateType = payload.operateType;
              _context.next = 4;
              return select(function (state) {
                return state[namespace];
              });

            case 4:
              _ref3 = _context.sent;
              count = _ref3.count;

              if (operateType === actionType.Decrease) {
                count -= 1;
              } else if (operateType === actionType.Increase) {
                count += 1;
              }
              _context.next = 9;
              return put({
                type: 'setState',
                payload: {
                  count: count
                }
              });

            case 9:
              _context.next = 13;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](0);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, opeateDecrease, this, [[0, 11]]);
    })
  },
  reducers: {
    setState: function setState(state, _ref4) {
      var payload = _ref4.payload;

      return _extends({}, state, payload);
    }
  }
};