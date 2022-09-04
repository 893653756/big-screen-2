<template>
  <div>
    <ItemTitle label="各系统汇聚量占比" />
    <CommonPanel class="panel">
      <div class="body-box">
        <CommonChart :option="option" class="common-chart" />
        <div class="tree-box">
          <LegendTree :tree-data="dataTree" />
        </div>
      </div>
    </CommonPanel>
  </div>
</template>

<script>
import ItemTitle from "@/components/ItemTitle/index.vue";
import CommonPanel from "@/components/CommonPanel/index.vue";
import CommonChart from "@/components/CommonChart/index.vue";
import LegendTree from "@/components/LegendTree";
import { echartMapPx } from "@/utils";
export default {
  components: {
    CommonPanel,
    ItemTitle,
    CommonChart,
    LegendTree,
  },
  data() {
    return {
      option: {},
      dataTree: [],
    };
  },
  mounted() {
    this.initData();
  },
  methods: {
    initData() {
      this.dataTree = [
        {
          name: "业务流程类",
          value: 1,
          children: [
            {
              name: "数据填报异常",
              value: 1,
              children: [
                {
                  name: "办证办结异常",
                  value: 1,
                },
              ],
            },
          ],
        },
        {
          name: "网络传输类",
          value: 1,
          children: [
            {
              name: "网络超时异常",
              value: 1,
              children: [
                {
                  name: "系统接口异常",
                  value: 1,
                },
              ],
            },
          ],
        },
        {
          name: "其它问题类",
          value: 1,
          children: [
            {
              name: "证照日期异常",
              value: 1,
            },
          ],
        },
      ];
      this.getOption(this.dataTree);
    },
    getOption(dataTree) {
      this.option = {
        color: ["#1531FF", "#13BAFF", "#0782FF"],
        series: {
          type: "sunburst",
          highlightPolicy: "ancestor",
          data: dataTree,
          center: ["50%", "50%"],
          levels: [
            {},
            {
              r0: "0%",
              r: "39%",
              label: {
                rotate: "tangential",
                fontFamily: "Microsoft YaHei",
                fontWeight: "bold",
                fontSize: echartMapPx.mapWidth(8),
                color: "#262626",
              },
              itemStyle: {
                borderWidth: 0,
              },
            },
            {
              r0: "47%",
              r: "62%",
              label: {
                rotate: "tangential",
                fontFamily: "Microsoft YaHei",
                fontSize: echartMapPx.mapWidth(6),
                color: "#262626",
              },
              itemStyle: {
                borderWidth: 0,
              },
            },
            {
              r0: "67%",
              r: "81%",
              label: {
                rotate: "tangential",
                fontFamily: "Microsoft YaHei",
                fontSize: echartMapPx.mapWidth(6),
                color: "#262626",
              },
              itemStyle: {
                borderWidth: 0,
              },
            },
          ],
        },
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.panel {
  height: vh(251);
  margin-top: vh(14);
  .body-box {
    height: 100%;
    width: 100%;
    display: flex;
    .common-chart {
      flex: 8;
    }
    .tree-box {
      flex: 6;
      padding: vh(30) 0;
      padding-left: vw(10);
      overflow-y: auto;
    }
  }
}
</style>
