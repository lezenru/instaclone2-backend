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

var _default = {
  Mutation: {
    //계정 생성
    createAccount: function () {
      var _createAccount = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, _ref) {
        var firstName, lastName, username, email, password, existingUser, uglyPassword;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                firstName = _ref.firstName, lastName = _ref.lastName, username = _ref.username, email = _ref.email, password = _ref.password;
                _context.prev = 1;
                _context.next = 4;
                return _client["default"].user.findFirst({
                  where: {
                    OR: [{
                      username: username
                    }, {
                      email: email
                    }]
                  }
                });

              case 4:
                existingUser = _context.sent;

                if (!existingUser) {
                  _context.next = 7;
                  break;
                }

                throw new Error("이 닉네임 또는 비밀번호는 이미 사용중입니다.");

              case 7:
                _context.next = 9;
                return _bcrypt["default"].hash(password, 10);

              case 9:
                uglyPassword = _context.sent;
                return _context.abrupt("return", _client["default"].user.create({
                  data: {
                    username: username,
                    email: email,
                    lastName: lastName,
                    firstName: firstName,
                    password: uglyPassword
                  }
                }));

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](1);
                return _context.abrupt("return", _context.t0);

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 13]]);
      }));

      function createAccount(_x, _x2) {
        return _createAccount.apply(this, arguments);
      }

      return createAccount;
    }() //end of createAccount

  } // end of mutation

}; // end of export

exports["default"] = _default;