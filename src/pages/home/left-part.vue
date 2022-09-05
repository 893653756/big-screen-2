<template>
  <div class="program-left">
    <!-- 时间 -->
    <div class="time-box">
      <span class="time">{{ currentTime }}</span>
      <div></div>
      <span class="week">{{ currentWeek }}</span>
      <span class="date">{{ currentDate }}</span>
    </div>
    <div class="line"></div>
    <div class="program-left-body">
      <LeftOne />
      <LeftTwo class="left-two" />
      <LeftThree class="left-three" />
    </div>
  </div>
</template>

<script>
import LeftOne from "./left-comp/left-one.vue";
import LeftTwo from "./left-comp/left-two.vue";
import LeftThree from "./left-comp/left-three.vue";
import dayjs from "dayjs";
export default {
  components: {
    LeftOne,
    LeftTwo,
    LeftThree,
  },
  data() {
    this.weekMap = {
      1: "一",
      2: "二",
      3: "三",
      4: "四",
      5: "五",
      6: "六",
      7: "日",
    };
    return {
      currentTime: "",
      currentDate: "",
      currentWeek: "",
    };
  },
  mounted() {
    this.timer = setInterval(() => {
      this.initTime();
    }, 1000);
  },
  beforeDestroy() {
    this.timer = clearInterval(this.timer);
  },
  methods: {
    initTime() {
      let d = dayjs();
      this.currentTime = d.format("HH:mm:ss");
      this.currentDate = d.format("YYYY年MM月DD日");
      let week = d.day();
      this.currentWeek = `星期${this.weekMap[week]}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.program-left {
  padding-top: vh(52);
  .time-box {
    height: vh(16);
    padding-left: vw(84.5);
    display: flex;
    align-items: center;
    .time {
      font-weight: 400;
      color: #96f4ff;
      font-size: wh(27);
    }
    div {
      margin: 0px vw(8.5);
      height: vh(16);
      width: vw(1);
      background-color: #7bfef9;
      opacity: 0.18;
    }
    .week {
      color: #7cdef6;
      font-weight: bold;
      font-size: wh(24);
    }
    .date {
      font-weight: 400;
      color: #55b4f0;
      font-size: wh(21);
      margin-left: vw(23.5);
    }
  }
  .line {
    margin-top: vh(12.5);
    margin-left: vw(20.5);
    background-image: linear-gradient(
      to right,
      transparent 10%,
      #7bc9ed,
      transparent
    );
    opacity: 0.76;
    height: vh(1.5);
  }
  &-body {
    padding-top: vh(26);
    padding-left: vw(63.5);
    .left-two,
    .left-three {
      margin-top: vh(30);
    }
  }
}
</style>
