<template>
  <div class="center-one">
    <div class="panel panel-1">
      <div class="panel-header">国垂总回流量</div>
      <div class="panel-num"><BaseCountTwo :count="128" /></div>

      <div class="panel-detail">
        <LabelCount v-for="item of list_01" :key="item.label" :info="item" />
      </div>
    </div>
    <div class="panel panel-2">
      <div class="panel-header">
        <span>全流程归集</span>
      </div>
      <div class="panel-num"><BaseCountTwo :count="9527" /></div>
      <div class="percent">
        <span class="percent-label">总成功率</span>
        <span class="percent-value">99.3%</span>
      </div>
    </div>
    <div class="panel panel-3">
      <div class="panel-header">
        <span>省平台总同步量</span>
      </div>
      <div class="panel-num"><BaseCountTwo :count="4399" /></div>
      <div class="panel-detail">
        <LabelCount v-for="item of list_03" :key="item.label" :info="item" />
      </div>
    </div>
  </div>
</template>

<script>
import BaseCountTwo from "@/components/BaseCountTwo";
import LabelCount from "@/components/LabelCount";
export default {
  components: {
    BaseCountTwo,
    LabelCount,
  },
  data() {
    return {
      list_01: [
        { label: "辐射许可", value: "1357" },
        { label: "环境评价", value: "13057" },
        { label: "排污许可", value: "1421" },
      ],
      list_03: [
        { label: "辐射许可", value: "1357" },
        { label: "应急预案", value: "13057" },
        { label: "环境评价", value: "1421" },
        { label: "排污许可", value: "1421" },
        { label: "等级报备", value: "1421" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.center-one {
  display: flex;
  margin-top: vh(105);
  justify-content: center;
    position: relative;
  z-index: 5;
  .panel {
    height: vh(162);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    &:nth-child(n + 2) {
      margin-left: vw(3);
    }
    &.panel-1 {
      width: vw(267);
      background-image: url("~@/assets/center_images/panel-bg-01.png");
    }
    &.panel-2 {
      width: vw(220.5);
      background-image: url("~@/assets/center_images/panel-bg-02.png");
    }
    &.panel-3 {
      width: vw(349);
      background-image: url("~@/assets/center_images/panel-bg-03.png");
    }
    &-header {
      color: #9ff2fe;
      font-size: vw(23);
      padding: vh(4) 0;
      text-align: center;
      font-family: YouSheBiaoTiHei;
    }
    &-num {
      margin-top: vh(12);
      display: flex;
      justify-content: center;
    }
    &-detail {
      margin-top: vh(18);
      display: flex;
      justify-content: space-around;
    }
    .percent {
      margin-top: vh(25);
      display: flex;
      align-items: center;
      justify-content: center;
      &-label {
        color: #9fcefe;
        font-size: vw(11);
        font-weight: bold;
      }
      &-value {
        margin-left: vw(10);
        color: #75ffe0;
        font-family: DS-Digital-Bold;
        font-size: vw(29);
      }
    }
  }
}
</style>
