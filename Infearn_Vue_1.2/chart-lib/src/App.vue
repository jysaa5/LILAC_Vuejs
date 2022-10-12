<template>
  <div>
    <h1>Chart.js</h1>
    <bar-chart></bar-chart>
    <!-- 라인 차트 컴포넌트 -->
    <line-chart></line-chart>
  </div>
</template>
<script>
import BarChart from "./components/BarChart.vue";
import LineChart from "./components/LineChart.vue";
export default {
  // 컴포넌트 속성 또는 인스턴스 옵션
  components: {
    BarChart,
    LineChart,
  },
  data() {
    return {
      chartDataSet: [],
    };
  },
  created() {},
};
</script>
<style></style>
