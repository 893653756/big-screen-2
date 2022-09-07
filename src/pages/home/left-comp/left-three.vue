<template>
  <div>
    <ItemTitle label="失败原因占比分析" />
    <CommonPanel class="panel">
      <div class="body-box" v-if="errorLog.length > 0">
        <CommonChart :option="option" class="common-chart" />
        <div class="tree-box">
          <LegendTree :tree-data="dataTree" />
        </div>
      </div>
      <div v-else class="no-data" ysbth>暂无数据</div>
    </CommonPanel>
  </div>
</template>

<script>
import ItemTitle from "@/components/ItemTitle/index.vue";
import CommonPanel from "@/components/CommonPanel/index.vue";
import CommonChart from "@/components/CommonChart/index.vue";
import LegendTree from "@/components/LegendTree";
import { echartMapPx } from "@/utils";
import { mapGetters } from "vuex";
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
  computed: {
    ...mapGetters({
      errorLog: "letThreeData",
    }),
  },
  watch: {
    errorLog() {
      this.initData();
    },
  },
  methods: {
    initData() {
      this.dataTree = this.dealWithErrorLog(this.errorLog);
      // this.dataTree = [
      //   {
      //     name: "业务流程类",
      //     value: 1,
      //     children: [
      //       {
      //         name: "数据填报异常",
      //         value: 1,
      //         children: [
      //           {
      //             name: "办证办结异常",
      //             value: 1,
      //           },
      //         ],
      //       },
      //     ],
      //   },
      //   {
      //     name: "网络传输类",
      //     value: 1,
      //     children: [
      //       {
      //         name: "网络超时异常",
      //         value: 1,
      //         children: [
      //           {
      //             name: "系统接口异常",
      //             value: 1,
      //           },
      //         ],
      //       },
      //     ],
      //   },
      //   {
      //     name: "其它问题类",
      //     value: 1,
      //     children: [
      //       {
      //         name: "证照日期异常",
      //         value: 1,
      //       },
      //     ],
      //   },
      // ];
      this.getOption(this.dataTree);
    },
    dealWithErrorLog(list) {
      if (Array.isArray(list)) {
        return list.map((item) => ({
          value: item.day_error_sum,
          name: item.main_type,
          children: this.dealWithErrorLog(item.day_err_type_list),
        }));
      }
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
  .no-data {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: vw(25);
    color: #92dcff;
  }
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
