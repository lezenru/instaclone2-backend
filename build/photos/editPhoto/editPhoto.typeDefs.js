"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _apolloServer = require("apollo-server");

var _templateObject;

var _default = (0, _apolloServer.gql)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n\n    type EditPhotoResult {\n        ok: Boolean!\n        error: String\n    }\n    \n    type Mutation {\n        editPhoto(id:Int! , caption: String!): EditPhotoResult!\n    }\n    \n   \n"]))); //null 을 리턴받아도 되지만 직접 결과타입을 만드는것이 좋아보임


exports["default"] = _default;