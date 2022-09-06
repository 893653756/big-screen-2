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
import instance from "@/utils/request";
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
  mounted() {
    this.initData();
  },
  methods: {
    async initData() {
      // let dateRange = this.getDateRange(15);
      // try {
      //   const res = await instance.get("/collecting/find", {
      //     params: {
      //       startDate: dateRange[0],
      //       endDate: dateRange[dateRange.length - 1],
      //     },
      //   });
      //   console.log("res", res);
      // } catch (error) {
      //   console.error(error);
      // }
      this.dataList = this.getDateRange(15).map((d) => {
        return {
          name: d,
          value: Math.floor(Math.random() * 400 + 400),
        };
      });
      this.option = this.getOption(this.dataList);
    },
    getDateRange(value) {
      let dateRange = [];
      let startDate = new Date();
      let endDate = new Date();
      startDate.setDate(endDate.getDate() - value);
      while (endDate.getTime() - startDate.getTime() >= 0) {
        let year = startDate.getFullYear();
        let month = startDate.getMonth() + 1;
        month = month < 10 ? `0${month}` : month;

        let day = startDate.getDate();
        day = day < 10 ? `0${day}` : day;
        // dateRange.push(year-month + "-" + day);
        dateRange.push(`${year}-${month}-${day}`);
        startDate.setDate(startDate.getDate() + 1);
      }
      return dateRange;
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
            color: "#BEECFF",
            fontSize: echartMapPx.mapWidth(14),
            margin: echartMapPx.mapHeight(12.5),
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
            barWidth: echartMapPx.mapWidth(11),
            stack: 'total',
            label: {
              show: true,
              position: "top",
              distance: echartMapPx.mapHeight(6),
              color: "#fff",
              fontSize: echartMapPx.mapWidth(10),
            },
            data: dataList.map((item) => {
              return {
                value: item.value,
                itemStyle: {
                  barBorderRadius: echartMapPx.mapWidth(5),
                  color: "#D3F9FF",
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
.center-three {
  padding-left: vw(49);
  padding-right: vw(23);
  .chart-box {
    margin-top: vh(14);
    height: vh(270);
  }
}
</style>
