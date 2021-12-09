"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _client = _interopRequireDefault(require("../../client"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _default = {
  Mutation: {
    //로그인
    login: function () {
      var _login = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, _ref) {
        var username, password, user, passwordOk, token;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                username = _ref.username, password = _ref.password;
                _context.next = 3;
                return _client["default"].user.findUnique({
                  where: {
                    username: username
                  }
                });

              case 3:
                user = _context.sent;

                if (user) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return", {
                  ok: false,
                  error: "해당 아이디를 찾지 못했습니다"
                });

              case 6:
                _context.next = 8;
                return _bcrypt["default"].compare(password, user.password);

              case 8:
                passwordOk = _context.sent;

                if (passwordOk) {
                  _context.next = 11;
                  break;
                }

                return _context.abrupt("return", {
                  ok: false,
                  error: "비밀번호가 틀렸습니다"
                });

              case 11:
                _context.next = 13;
                return _jsonwebtoken["default"].sign({
                  id: user.id
                }, process.env.SECRET_KEY);

              case 13:
                token = _context.sent;
                console.log("TOKEN : " + token);
                return _context.abrupt("return", {
                  ok: true,
                  token: token
                });

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function login(_x, _x2) {
        return _login.apply(this, arguments);
      }

      return login;
    }()
  } // end of mutation

}; // end of export

exports["default"] = _default;