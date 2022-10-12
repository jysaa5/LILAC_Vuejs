"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchNewsList = fetchNewsList;
exports.fetchJobsList = fetchJobsList;
exports.fetchAskList = fetchAskList;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 1. HTTP Request & Response와 관련된 기본 설정
var config = {
  baseUrl: 'https://api.hnpwa.com/v0/'
}; // 2. API 함수들을 정리

function fetchNewsList() {
  // return axios.get('https://api.hnpwa.com/v0/news/1.json');
  // return axios.get(config.baseUrl + 'news/1.json');
  return _axios["default"].get("".concat(config.baseUrl, "news/1.json"));
}

function fetchJobsList() {
  return _axios["default"].get("".concat(config.baseUrl, "jobs/1.json"));
}

function fetchAskList() {
  return _axios["default"].get("".concat(config.baseUrl, "ask/1.json"));
}