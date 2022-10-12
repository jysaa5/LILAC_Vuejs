import Chart from 'chart.js';
export default {
    install(Vue) {
        console.log('Chart plugin loaded')

        // 모든 컴포넌트에서 this.$_Chart로 접근하도록 설정
        Vue.prototype.$_Chart = Chart;
    }
}