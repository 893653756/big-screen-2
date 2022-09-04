<template>
  <div class="box-item">
    <div class="text">{{ label }}</div>
    <BaseCount :count="count">
      <span slot="unit">万条</span>
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
    label: {
      type: String,
      default: "XXX",
    },
    count: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="scss" scoped>
.box-item {
  width: vw(141);
  height: vh(79);
  background-image: url("~@/assets/right_images/box-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  flex-direction: column;
  .text {
    color: #85caff;
    font-size: vw(13);
    margin-top: vh(18);
    margin-bottom: vh(6);
  }
  ::v-deep .count {
    font-size: vw(34);
  }
}
</style>
