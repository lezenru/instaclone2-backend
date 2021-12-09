"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _client = _interopRequireDefault(require("../client"));

var _default = {
  Photo: {
    user: function user(_ref) {
      var userId = _ref.userId;
      return _client["default"].user.findUnique({
        where: {
          id: userId
        }
      });
    },
    hashtags: function hashtags(_ref2) {
      var id = _ref2.id;
      return _client["default"].hashtag.findMany({
        where: {
          photos: {
            some: {
              id: id
            }
          }
        }
      });
    }
  },
  Hashtag: {
    photos: function photos(_ref3, _ref4) {
      var id = _ref3.id;
      var page = _ref4.page;
      return _client["default"].hashtag.findUnique({
        where: {
          id: id
        }
      }).photos();
    },
    totalPhotos: function totalPhotos(_ref5) {
      var id = _ref5.id;
      return _client["default"].photo.count({
        where: {
          hashtags: {
            some: {
              id: id
            }
          }
        }
      });
    }
  }
};
exports["default"] = _default;