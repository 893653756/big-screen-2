<template>
  <div class="right-one">
    <div class="right-one_header">
      <div>切到到工作台</div>
      <img :src="iconChange" alt="" />
    </div>
    <div class="line"></div>
    <!-- tab切换 -->
    <div class="tab-box">
      <img :src="iconArrow" alt="" class="arrow" />
      <i class="label">应急预案</i>
      <img :src="iconArrow" alt="" class="arrow arrow-right" />
    </div>
    <div class="box-box">
      <RightBoxItem label="日归集量" :count="1561" />
      <RightBoxItem label="日回流量" :count="831" />
      <RightBoxItem label="日同步量" :count="473" />
    </div>
    <!-- 圆环图 -->
    <RingChart />
    <!-- 累计归集量 -->
    <div class="total-box">
      <BaseCount :count="90"></BaseCount>
      <BaseLabel label="累计归集量" icon="rect" />
    </div>
    <!-- 柱状图 -->
    <BarChart />
  </div>
</template>

<script>
import BaseCount from "@/components/BaseCount";
import BaseLabel from "@/components/BaseLabel";
import iconChange from "@/assets/right_images/icon-change.png";
import iconArrow from "@/assets/right_images/icon-arrow.png";
import RightBoxItem from "./right-box-item.vue";
import RingChart from "./ring-chart.vue";
import BarChart from "./bar-chart.vue";
export default {
  components: {
    BaseCount,
    BaseLabel,
    RightBoxItem,
    RingChart,
    BarChart,
  },
  data() {
    this.iconChange = iconChange;
    this.iconArrow = iconArrow;
    return {};
  },
};
</script>

<style lang="scss" scoped>
.right-one {
  flex: 1;
  height: 0px;
  &_header {
    justify-content: center;
    display: flex;
    align-items: center;
    margin-top: vh(51);
    div {
      font-size: vw(15);
      color: #72fef2;
      font-weight: bold;
    }
    img {
      width: vw(17);
      margin-left: vw(14);
    }
  }
  .line {
    margin-top: vh(15);
    margin-right: vw(28.5);
    background-image: linear-gradient(
      to right,
      transparent 10%,
      #7bc9ed,
      transparent 90%
    );
    opacity: 0.76;
    height: vh(1.5);
  }
  .tab-box {
    display: flex;
    justify-content: center;
    margin-top: vh(25.5);
    position: relative;
    &::after {
      content: "";
      position: absolute;
      width: vw(123.5);
      height: vh(11.5);
      background-image: url("~@/assets/right_images/light-line.png");
      background-repeat: no-repeat;
      background-size: cover;
      transform: translateX(-50%);
      left: 50%;
      bottom: vh(-14);
    }
    .label {
      padding: 0px vw(40);
      color: #ccefff;
      font-size: vw(24);
      font-weight: bold;
    }
    .arrow {
      width: vw(21);
      &.arrow-right {
        transform: scale(-1, 1);
      }
    }
  }
  .box-box {
    margin-top: vh(26);
    display: flex;
    padding-left: vw(28);
  }
  .total-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: vh(1);
    ::v-deep .count {
      font-family: DS-Digital-Bold;
    }
    ::v-deep .base-label {
      font-weight: bold;
      margin-top: vh(10);
    }
  }
}
</style>
