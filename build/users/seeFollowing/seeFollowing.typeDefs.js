"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _apolloServer = require("apollo-server");

var _templateObject;

var _default = (0, _apolloServer.gql)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n\n    type SeeFollowingResult {\n        ok: Boolean!\n        error: String\n        following: [User]\n    }\n    \n    type Query {\n        seeFollowing(username: String!, lastId: Int) : SeeFollowingResult!\n    }\n    \n"])));

exports["default"] = _default;