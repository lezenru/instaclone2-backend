"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _client = _interopRequireDefault(require("../../client"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _users = require("../users.utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var resolverFn = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, _ref, _ref2) {
    var firstName, lastName, username, email, newPassword, loggedInUser, protectResolver, uglyPassword, updatedUser;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            firstName = _ref.firstName, lastName = _ref.lastName, username = _ref.username, email = _ref.email, newPassword = _ref.password;
            loggedInUser = _ref2.loggedInUser, protectResolver = _ref2.protectResolver;
            //세번째는 서버의 context 내용물임.
            uglyPassword = null;

            if (!newPassword) {
              _context.next = 7;
              break;
            }

            _context.next = 6;
            return _bcrypt["default"].hash(newPassword, 10);

          case 6:
            uglyPassword = _context.sent;

          case 7:
            ; //await 꼭 넣어주삼

            _context.next = 10;
            return _client["default"].user.update({
              where: {
                id: loggedInUser.id
              },
              data: _objectSpread({
                firstName: firstName,
                lastName: lastName,
                username: username,
                email: email
              }, uglyPassword && {
                password: uglyPassword
              })
            });

          case 10:
            updatedUser = _context.sent;

            if (!updatedUser.id) {
              _context.next = 15;
              break;
            }

            return _context.abrupt("return", {
              ok: true
            });

          case 15:
            return _context.abrupt("return", {
              ok: false,
              error: "프로필 업데이트에 실패하였습니다"
            });

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function resolverFn(_x, _x2, _x3) {
    return _ref3.apply(this, arguments);
  };
}();

var _default = {
  Mutation: {
    editProfile: (0, _users.protectResolver)(resolverFn) //end of editProfile

  }
};
exports["default"] = _default;