<template>
  <div class="bar-chart">
    <CommonChart :option="option" />
  </div>
</template>

<script>
import CommonChart from "@/components/CommonChart";
import { echartMapPx } from "@/utils";
export default {
  props: {
    dataList: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    CommonChart,
  },
  data() {
    this.colors = [
      ["#093A71", "#58E9FF"],
      ["#04346B", "#0244FF"],
      ["#022F66", "#CE57FF"],
      ["#022D63", "#FF6262"],
      ["#02275C", "#FFE775"],
    ];
    return {
      option: {},
    };
  },
  watch: {
    dataList() {
      this.initData();
    },
  },
  mounted() {
    this.initData();
  },
  methods: {
    initData() {
      let list = (this.dataList || []).map((item) => ({
        name: item.countName.slice(0, -1),
        value: item.count_map_num,
      }));
      // this.dataList = [
      //   { name: "累计汇聚量", value: 270 },
      //   { name: "累计审批量", value: 390 },
      //   { name: "累计办结量", value: 300 },
      //   { name: "累计附件量", value: 420 },
      //   { name: "国垂回流量", value: 170 },
      // ];
      this.option = this.getOption(list);
    },
    getOption(dataList) {
      return {
        xAxis: {
          type: "category",
          data: dataList.map((item) => item.name),
          axisTick: {
            show: false,
          },
          axisLine: {
            lineStyle: {
              color: "rgba(102, 180, 219, 0.34)",
            },
          },
          axisLabel: {
            color: "rgba(159, 242, 254, 1)",
            fontSize: echartMapPx.mapWidth(10),
            margin: echartMapPx.mapHeight(10),
          },
        },
        grid: {
          containLabel: true,
          left: 0,
          top: echartMapPx.mapHeight(30),
          right: 0,
          bottom: echartMapPx.mapHeight(20),
        },
        yAxis: {
          type: "value",
          name: "条",
          nameTextStyle: {
            color: "rgba(132, 193, 202, 1)",
            fontSize: echartMapPx.mapWidth(11),
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "rgba(102, 180, 219, 0.34)",
            },
          },
          splitLine: {
            lineStyle: {
              color: "rgba(102, 180, 219, 0.1)",
            },
          },
          axisLabel: {
            color: "rgba(159, 242, 254, 1)",
            fontSize: echartMapPx.mapWidth(11),
          },
        },
        series: [
          {
            type: "bar",
            showBackground: true,
            barWidth: echartMapPx.mapWidth(12),
            backgroundStyle: {
              color: "rgba(102, 180, 219, 0.3)",
            },

            data: dataList.map((item, index) => {
              let [c1, c2] = this.colors[index];
              return {
                value: item.value,
                itemStyle: {
                  barBorderRadius: echartMapPx.mapWidth(5),
                  color: new this.$echarts.graphic.LinearGradient(1, 1, 0, 0, [
                    {
                      offset: 0,
                      color: c1,
                    },
                    {
                      offset: 1,
                      color: c2,
                    },
                  ]),
                },
              };
            }),
          },
        ],
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.bar-chart {
  height: vh(220);
  padding: 0px vw(30);
  // background-color: rgba(255, 192, 203, 0.2);
}
</style>
