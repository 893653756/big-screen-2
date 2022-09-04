<template>
  <div class="ring-box">
    <CommonChart :option="optionLeft" />
    <CommonChart :option="optionRight" />
  </div>
</template>

<script>
import CommonChart from "@/components/CommonChart";
import { echartMapPx } from "@/utils";
import iconUp from "@/assets/right_images/icon-up.png";
import iconDown from "@/assets/right_images/icon-down.png";
export default {
  components: {
    CommonChart,
  },
  data() {
    return {
      optionLeft: {},
      optionRight: {},
    };
  },
  mounted() {
    this.initData();
  },
  methods: {
    initData() {
      this.optionLeft = this.getOption({
        text: "同比",
        percent: "30%",
        value: 60,
        icon: iconUp,
      });
      this.optionRight = this.getOption({
        text: "环比",
        percent: "15%",
        value: 30,
        icon: iconDown,
      });
    },
    getOption(dataObj) {
      const { text, percent, value, icon } = dataObj;
      return {
        title: [
          {
            text: text,
            x: "center",
            top: "55%",
            textStyle: {
              color: "#64B4D9",
              fontSize: echartMapPx.mapWidth(14.5),
              fontWeight: "400",
            },
          },
          {
            text: `{a| }{b|${percent}}`,
            x: "center",
            top: "30%",
            textStyle: {
              rich: {
                a: {
                  backgroundColor: {
                    image: icon,
                    width: echartMapPx.mapWidth(11),
                    height: echartMapPx.mapWidth(15),
                  },
                },
                b: {
                  fontSize: echartMapPx.mapWidth(23.5),
                  color: "#70E2FF",
                  fontFamily: "DS-Digital-Bold",
                  fontWeight: "bold",
                },
              },
            },
          },
        ],
        polar: {
          radius: ["77%", "93%"],
          center: ["50%", "50%"],
        },
        angleAxis: {
          max: 100,
          show: false,
        },
        radiusAxis: {
          type: "category",
          show: true,
          axisLabel: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
        },
        series: [
          {
            name: "",
            type: "bar",
            roundCap: true,
            barWidth: 10,
            showBackground: true,
            backgroundStyle: {
              color: "rgba(66, 66, 66, .3)",
            },
            data: [value],
            coordinateSystem: "polar",
            itemStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                {
                  offset: 0,
                  color: "#896ad8",
                },
                {
                  offset: 1,
                  color: "#5bd9ff",
                },
              ]),
            },
          },
          {
            name: "",
            type: "pie",
            startAngle: 90,
            radius: ["99%"],
            hoverAnimation: false,
            center: ["50%", "50%"],
            itemStyle: {
              color: "rgba(66, 66, 66, .1)",
              borderWidth: 1,
              borderColor: "#8CC8F2",
            },
            data: [100],
          },
          {
            name: "",
            type: "pie",
            startAngle: 90,
            radius: ["70%"],
            hoverAnimation: false,
            center: ["50%", "50%"],
            itemStyle: {
              color: "rgba(66, 66, 66, .1)",
              borderWidth: 1,
              borderColor: "#8CC8F2",
            },
            data: [100],
          },
        ],
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.ring-box {
  height: vh(132.5);
  margin-top: vh(16);
  display: flex;
  align-items: center;
  justify-content: center;
  & > div {
    width: vw(142);
    &:nth-child(2) {
      margin-left: vw(45);
    }
  }
}
</style>
