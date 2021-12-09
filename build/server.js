"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _users = require("./users/users.utils");

var _apolloServer = require("apollo-server");

var _schema = _interopRequireDefault(require("./schema"));

require("dotenv").config();
/*dotenv는 가장 앞에 있어야함*/


var server = new _apolloServer.ApolloServer({
  schema: _schema["default"],
  context: function () {
    var _context = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
      var req;
      return _regenerator["default"].wrap(function _callee$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              req = _ref.req;
              _context2.next = 3;
              return (0, _users.getUser)(req.headers.token);

            case 3:
              _context2.t0 = _context2.sent;
              _context2.t1 = _users.protectResolver;
              return _context2.abrupt("return", {
                loggedInUser: _context2.t0,
                protectResolver: _context2.t1
              });

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee);
    }));

    function context(_x) {
      return _context.apply(this, arguments);
    }

    return context;
  }()
});
var PORT = process.env.PORT;
server.listen(PORT).then(function () {
  return console.log("http://localhost:".concat(PORT));
});