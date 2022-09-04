<template>
  <div class="icon-item">
    <div class="icon-box">
      <img :src="icon" alt="" class="icon" />
      <img :src="iconBottom" alt="" class="icon-bottom" />
    </div>
    <BaseLabel icon="rect" :label="label" class="label" />
    <BaseCount :count="count"> <span slot="unit">万条</span></BaseCount>
  </div>
</template>

<script>
import BaseLabel from "@/components/BaseLabel";
import BaseCount from "@/components/BaseCount";
import iconBottom from "@/assets/left_images/icon-bottom.png";
export default {
  props: {
    icon: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "xxx",
    },
    count: {
      type: Number,
      default: 100,
    },
  },
  components: {
    BaseCount,
    BaseLabel,
  },
  data() {
    this.iconBottom = iconBottom;
    return {};
  },
};
</script>

<style lang="scss" scoped>
.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  .icon-box {
    margin-top: vh(36.5);
    width: vw(49);
    position: relative;
    .icon {
      width: vw(49);
      animation: circleLoop 10s infinite linear;
    }
    .icon-bottom {
      width: vw(159);
      position: absolute;
      left: vw(-50);
      top: vh(40);
    }
  }
  .label {
    margin-top: vh(45);
    margin-bottom: vh(12);
  }
}
</style>
