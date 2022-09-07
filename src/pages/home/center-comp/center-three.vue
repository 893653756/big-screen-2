<template>
  <div class="center-three">
    <ItemTitle label="近30日分析趋势标题" tyep="long" />
    <div class="chart-box">
      <CommonChart :option="option" />
    </div>
  </div>
</template>

<script>
import ItemTitle from "@/components/ItemTitle/index.vue";
import CommonChart from "@/components/CommonChart";
import { echartMapPx } from "@/utils";
import { mapGetters } from "vuex";
export default {
  components: {
    ItemTitle,
    CommonChart,
  },
  data() {
    return {
      option: {},
    };
  },
  computed: {
    ...mapGetters({
      dayNumList: "dayNumList",
    }),
  },
  watch: {
    dayNumList() {
      this.initData();
    },
  },
  mounted() {
    this.initData();
  },
  methods: {
    async initData() {
      let times = [];
      let data1 = [];
      let data2 = [];
      this.dayNumList.forEach((item, index) => {
        times.unshift(item.date.slice(5));
        data1.unshift(item.day_in_num || 0);
        data2.unshift(item.day_sync_num || 0);
      });
      this.option = this.getOption(times, data1, data2);
    },
    // getDateRange(value) {
    //   let dateRange = [];
    //   let startDate = new Date();
    //   let endDate = new Date();
    //   startDate.setDate(endDate.getDate() - value);
    //   while (endDate.getTime() - startDate.getTime() >= 0) {
    //     let year = startDate.getFullYear();
    //     let month = startDate.getMonth() + 1;
    //     month = month < 10 ? `0${month}` : month;

    //     let day = startDate.getDate();
    //     day = day < 10 ? `0${day}` : day;
    //     // dateRange.push(year-month + "-" + day);
    //     dateRange.push(`${year}-${month}-${day}`);
    //     startDate.setDate(startDate.getDate() + 1);
    //   }
    //   return dateRange;
    // },
    getOption(times, data1, data2) {
      return {
        tooltip: {},
        color: ["#D3F9FF", "#9ff2fe"],
        xAxis: {
          type: "category",
          data: times,
          axisTick: {
            show: false,
          },
          axisLine: {
            lineStyle: {
              color: "rgba(102, 180, 219, 0.34)",
            },
          },
          axisLabel: {
            color: "#BEECFF",
            fontSize: echartMapPx.mapWidth(14),
            margin: echartMapPx.mapHeight(12.5),
          },
        },
        legend: {
          textStyle: {
            color: "#ffffff",
          },
        },
        grid: {
          containLabel: true,
          left: 0,
          top: echartMapPx.mapHeight(40),
          right: echartMapPx.mapHeight(17),
          bottom: echartMapPx.mapHeight(20),
        },
        yAxis: {
          type: "value",
          name: "(万项)",
          nameLocation: "end",
          nameTextStyle: {
            color: "#73B8FF",
            fontSize: echartMapPx.mapWidth(15),
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
            show: false,
          },
          axisLabel: {
            color: "#73B8FF",
            fontSize: echartMapPx.mapWidth(15),
          },
        },
        series: [
          {
            type: "bar",
            name: "日接入量",
            barWidth: echartMapPx.mapWidth(16),
            stack: "total",
            // label: {
            //   show: true,
            //   fontSize: echartMapPx.mapWidth(10),
            // },
            color: "#D3F9FF",
            emphasis: {
              focus: "series",
            },
            data: data1,
          },
          {
            type: "bar",
            name: "日同步量",
            barWidth: echartMapPx.mapWidth(16),
            stack: "total",
            // label: {
            //   show: true,
            //   fontSize: echartMapPx.mapWidth(10),
            // },
            color: ["#9ff2fe"],
            emphasis: {
              focus: "series",
            },
            data: data2,
          },
        ],
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.center-three {
  padding-left: vw(49);
  padding-right: vw(23);
  .chart-box {
    margin-top: vh(14);
    height: vh(270);
  }
}
</style>
