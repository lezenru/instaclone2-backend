"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.processHashtags = void 0;

var processHashtags = function processHashtags(caption) {
  var hashtags = caption.match(/#[\d|A-Z|a-z|ㄱ-ㅎ|ㅏ-ㅣ|가-힣]+/g) || [];
  return hashtags.map(function (hashtag) {
    return {
      where: {
        hashtag: hashtag
      },
      create: {
        hashtag: hashtag
      }
    };
  });
};

exports.processHashtags = processHashtags;