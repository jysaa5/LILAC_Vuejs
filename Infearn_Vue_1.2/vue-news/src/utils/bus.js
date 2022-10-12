import Vue from 'vue';

/* 1번 방법 */
// bus.js
// export const bus = new Vue();

// App.vue
// import {bus} from './utils/bus.js;


/* 2번 방법 */
// bus.js
export default new Vue();

// App.vue
// import bus from './utils/bus.js'; 