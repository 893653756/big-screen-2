<template>
  <div class="right-part">
    <RightOne />
    <!-- 分割线 -->
    <div class="driver-line"></div>
    <!-- 特色应用 -->
    <RightTwo />
  </div>
</template>

<script>
import RightOne from './right-comp/right-one.vue'
import RightTwo from "./right-comp/right-two.vue";
export default {
  components: {
    RightOne,
    RightTwo,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.right-part {
  width: vw(481.5);
  background-color: rgba(0, 114, 202, 0.12);
  position: relative;
  display: flex;
  flex-direction: column;
  &::after {
    content: "";
    width: vw(1.85);
    height: vh(329);
    background: linear-gradient(0deg, #10294b, #91dcff, #10294b);
    opacity: 0.52;
    position: absolute;
    left: 0px;
    top: vh(313);
  }
  .driver-line {
    height: vh(4.75);
    background-color: rgba(185, 246, 253, 0.12);
  }
}
</style>
