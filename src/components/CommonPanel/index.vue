<template>
  <div class="common-panel">
    <!-- line -->
    <div class="top-line"></div>
    <div class="left-line"></div>
    <div class="bottom-line"></div>
    <RightAngle class="left-top" />
    <RightAngle class="left-bottom" />
    <RightAngle class="right-buttom" />
    <slot></slot>
  </div>
</template>

<script>
import RightAngle from "../RightAngle/index.vue";
export default {
  components: {
    RightAngle,
  },
};
</script>

<style lang="scss" scoped>
.common-panel {
  background-color: rgba(0, 114, 202, 0.12);
  position: relative;
  .left-top {
    left: 0px;
    top: 0px;
    border-right-color: transparent;
    border-bottom-color: transparent;
  }
  .left-bottom {
    left: 0px;
    bottom: 0px;
    border-right-color: transparent;
    border-top-color: transparent;
  }
  .right-buttom {
    right: 0px;
    bottom: 0px;
    border-left-color: transparent;
    border-top-color: transparent;
  }
  .top-line {
    position: absolute;
    width: vw(147);
    height: vh(1.5);
    top: 0px;
    left: 0px;
    background-image: linear-gradient(to right, #91dcff 70%, transparent);
    opacity: 0.7;
  }
  .left-line {
    position: absolute;
    width: vh(1.5);
    height: vh(48.5);
    top: 0px;
    left: 0px;
    background-image: linear-gradient(to bottom, #91dcff 20%, transparent);
    opacity: 0.7;
  }
  .bottom-line {
    position: absolute;
    width: vw(105.5);
    height: vh(1.5);
    bottom: 0px;
    right: vw(24.5);
    background-image: linear-gradient(
      to right,
      transparent,
      #91dcff,
      transparent
    );
  }
}
</style>
