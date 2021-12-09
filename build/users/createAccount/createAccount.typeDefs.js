"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _apolloServer = require("apollo-server");

var _templateObject;

var _default = (0, _apolloServer.gql)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    \n    type CreateAccountResult {\n        ok: Boolean!\n        error: String\n    }\n    \n    type Mutation {\n        createAccount(\n            firstName: String!\n            lastName: String!\n            username: String\n            email: String!\n            password: String!\n        ): CreateAccountResult\n    }\n"])));
/*스키마를 변경할 때는 항상 마이그레이트 해주어야함*/


exports["default"] = _default;