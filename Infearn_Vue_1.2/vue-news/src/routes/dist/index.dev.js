"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _NewsView = _interopRequireDefault(require("../views/NewsView.vue"));

var _AskView = _interopRequireDefault(require("../views/AskView.vue"));

var _JobsView = _interopRequireDefault(require("../views/JobsView.vue"));

var _UserView = _interopRequireDefault(require("../views/UserView.vue"));

var _ItemView = _interopRequireDefault(require("../views/ItemView.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueRouter["default"]);

var router = new _vueRouter["default"]({
  mode: 'history',
  routes: [{
    path: '/',
    redirect: '/news'
  }, {
    // path: url 주소
    path: '/news',
    // component: url 주소가 갔을 때 표시될 컴포넌트
    component: _NewsView["default"]
  }, {
    path: '/ask',
    component: _AskView["default"]
  }, {
    path: '/jobs',
    component: _JobsView["default"]
  }, {
    path: '/user',
    component: _UserView["default"]
  }, {
    path: '/item',
    component: _ItemView["default"]
  }]
});
exports.router = router;