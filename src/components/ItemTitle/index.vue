<template>
  <div class="item-title" :class="{ long: isLong }">
    <div ysbth class="title">{{ label }}</div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "XXXX",
    },
    type: {
      type: String,
      default: "",
    },
  },
  computed: {
    isLong() {
      return this.type === "long";
    },
  },
};
</script>

<style lang="scss" scoped>
.item-title {
  background-repeat: no-repeat;
  background-image: url("~@/assets/left_images/item-title-bg.png");
  height: vh(37);
  width: vw(401);
  background-size: cover;
  position: relative;
  &.long {
    width: vw(463);
    background-image: url("~@/assets/center_images/item-title-bg.png");
  }
  .title {
    font-size: vw(25);
    line-height: vh(37);
    color: #92dcff;
    margin-left: vw(27.5);
    position: relative;
    display: inline-flex;
    &::after {
      content: "";
      width: calc(100% + vw(25));
      height: vh(2.65);
      background-color: #75d3ff;
      position: absolute;
      bottom: 0px;
      left: vw(-25);
    }
  }
}
</style>
