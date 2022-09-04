<template>
  <div ref="chart" class="chart"></div>
</template>

<script>
export default {
  name: "CommonChart",
  props: {
    option: {
      type: Object,
      default: () => {},
      require: true,
    },
  },
  data() {
    return {
      chart: null,
    };
  },
  watch: {
    option: {
      handler() {
        this.renderChart();
      },
      deep: true,
      immediate: true,
    },
  },
  beforeDestroy() {
    this.chart && this.chart.dispose();
    this.chart = null;
  },
  mounted() {
    this.initChart();
    window.addEventListener("resize", () => {
      this.resize();
    });
  },
  methods: {
    initChart() {
      this.chart = this.$echarts.init(this.$refs["chart"]);
      this.renderChart();
    },
    renderChart() {
      if (this.chart && Object.keys(this.option).length) {
        this.chart.setOption(this.option);
      }
    },
    resize() {
      this.chart && this.chart.resize();
    },
  },
};
</script>

<style scoped>
.chart {
  width: 100%;
  height: 100%;
}
</style>
