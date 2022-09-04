<template>
  <div>
    <ItemTitle label="各系统汇聚量占比" />
    <CommonPanel class="panel">
      <CommonChart :option="option" />
    </CommonPanel>
  </div>
</template>

<script>
import ItemTitle from "@/components/ItemTitle/index.vue";
import CommonPanel from "@/components/CommonPanel/index.vue";
import CommonChart from "@/components/CommonChart/index.vue";
import { echartMapPx } from "@/utils";
export default {
  components: {
    CommonPanel,
    ItemTitle,
    CommonChart,
  },
  data() {
    return {
      option: {},
    };
  },
  mounted() {
    this.initData();
  },
  methods: {
    initData() {
      this.dataList = [
        { value: 456, name: "辐射安全" },
        { value: 215, name: "企业排污" },
        { value: 233, name: "环境评价" },
        { value: 353, name: "应急预案" },
        { value: 394, name: "等级表备案" },
      ];
      this.getOption(this.dataList);
    },
    getOption(dataList) {
      this.option = {
        color: ["#54DBE8", "#14509E", "#3EB4A1", "#B9B17D", "#C5746F"],
        legend: {
          orient: "vertical", // 竖向
          top: "center",
          icon: "circle",
          itemWidth: echartMapPx.mapWidth(9), // 设置宽度
          itemHeight: echartMapPx.mapWidth(9),
          left: echartMapPx.mapWidth(242),
          itemGap: echartMapPx.mapHeight(16),
          formatter(name) {
            let item = dataList.find((item) => item.name === name);
            return `{a|${name}}{b|${item.value}}`;
          },
          textStyle: {
            rich: {
              a: {
                color: "#9FF2FE",
                fontSize: echartMapPx.mapWidth(12.7),
                padding: [0, 0, 0, echartMapPx.mapWidth(8)],
              },
              b: {
                color: "#59FFFD",
                fontSize: echartMapPx.mapWidth(12.7),
                padding: [0, 0, 0, echartMapPx.mapWidth(12)],
              },
            },
          },
        },
        series: [
          {
            name: "",
            type: "pie",
            radius: "50%",
            center: ["30%", "50%"],
            data: dataList,
            roseType: "radius",
            label: {
              color: "rgba(255, 255, 255, 0.3)",
              fontSize: echartMapPx.mapWidth(10),
              color: "#8BC5F3",
              formatter(item) {
                return item.percent + "%";
              },
            },
            labelLine: {
              lineStyle: {
                color: "rgba(171, 222, 255, 0.36)",
              },
              smooth: 0.2,
              length: 10,
              length2: 0,
            },
            animationType: "scale",
            animationEasing: "elasticOut",
            animationDelay: function (idx) {
              return Math.random() * 200;
            },
          },
        ],
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.panel {
  height: vh(233);
  margin-top: vh(14);
}
</style>
