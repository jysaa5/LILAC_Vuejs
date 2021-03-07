"use strict";

var _AppHeader = _interopRequireDefault(require("./components/AppHeader"));

var _vue = _interopRequireDefault(require("vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 1 case: ; 있게.
var a = 10; // 2 case: ; 없이.

var b = 10;

if (a === 10) {
  console.log('10이다');
} // 트레일링 콤마 - trailing comma
// components:{
// '컴포넌트 이름': 컴포넌트 내용
// }