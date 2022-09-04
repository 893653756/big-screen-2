<template>
  <div class="program">
    <!-- 头 -->
    <div class="program-title">
      <span pmzd>四川省生态环境厅“一网通办”工作专题</span>
    </div>
    <!-- 四角边线 -->
    <div class="sideline sideline-left_top"></div>
    <div class="sideline sideline-left_bottom"></div>
    <div class="sideline sideline-right_top"></div>
    <div class="sideline sideline-right_bottom"></div>
    <!-- 左侧 -->
    <LeftPart />
    <!-- 中间 -->
    <CenterPart />
    <!-- 右侧 -->
    <RightPart />
  </div>
</template>

<script>
import LeftPart from "./left-part.vue";
import RightPart from "./right-part.vue";
import CenterPart from "./center-part.vue";
export default {
  components: {
    LeftPart,
    RightPart,
    CenterPart,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.program {
  width: 100%;
  height: 100%;
  background-image: url("~@/assets/images/program-bg.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;
  display: flex;

  &-title {
    position: absolute;
    width: 100%;
    height: vh(77);
    background-image: url("~@/assets/images/program-title.png");
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    span {
      background-image: linear-gradient(to bottom, #9de4ff, #29cdd3);
      -webkit-background-clip: text;
      color: transparent;
      font-size: vw(40);
    }
  }
  .sideline {
    width: vw(292);
    height: vh(133);
    position: absolute;
    background-image: url("~@/assets/images/sideline.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    &-left_top {
      left: 0px;
      top: vh(32);
    }
    &-left_bottom {
      left: 0px;
      bottom: vh(16);
      transform: scale(1, -1);
    }
    &-right_top {
      right: 0px;
      transform: scale(-1, 1);
      top: vh(32);
    }
    &-right_bottom {
      right: 0px;
      bottom: vh(16);
      transform: scale(-1, -1);
    }
  }
}
</style>
