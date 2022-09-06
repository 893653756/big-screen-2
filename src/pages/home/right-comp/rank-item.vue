<template>
  <div class="rank-item">
    <div class="rank-item_rank" ysbth :class="'rank-' + rankInfo.rank">
      {{ rankNum }}
    </div>
    <img :src="rankInfo.icon" alt="" class="rank-item_icon">
    <!-- <div class="rank-item_icon"></div> -->
    <div class="rank-item_desc">
      <div>{{ rankInfo.desc }}</div>
    </div>
    <BaseCount :count="rankInfo.count" class="rank-item_value">
      <span slot="unit">次访问</span>
    </BaseCount>
  </div>
</template>

<script>
import BaseCount from "@/components/BaseCount";
export default {
  components: {
    BaseCount,
  },
  props: {
    rankInfo: {
      type: Object,
      default: () => ({
        rank: 1,
        icon: "xx",
        desc: "“三线一单” 符合性分析",
        count: 12345,
      }),
    },
  },
  computed: {
    rankNum() {
      return `NO${this.rankInfo.rank}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.rank-item {
  width: vw(111);
  height: vh(170);
  background-image: url("~@/assets/right_images/rank-bg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  &_rank {
    -webkit-background-clip: text;
    color: transparent;
    font-size: vw(15);
    position: absolute;
    left: vw(12);
    top: vh(12);
    &.rank-1 {
      background-image: linear-gradient(to bottom, #fffd73, #ffcf10);
    }
    &.rank-2 {
      background-image: linear-gradient(to bottom, #78b0e4, #cbe4f7);
    }
    &.rank-3 {
      background-image: linear-gradient(to bottom, #f8ebbd, #f3ab71);
    }
  }
  &_icon {
    width: vh(37);
    height: vh(37);
    // background-color: pink;
    margin-top: vh(38.5);
  }
  &_desc {
    margin-top: vh(11);
    color: #9ff2fe;
    font-size: vw(12);
    font-weight: bold;
    line-height: 1.5em;
    text-align: center;
  }
  &_value {
    margin-top: vh(13);
    ::v-deep .count {
      font-family: DS-Digital-Italic;
      font-size: vw(20);
    }
  }
}
</style>
