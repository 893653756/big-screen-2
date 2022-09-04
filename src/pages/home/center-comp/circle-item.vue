<template>
  <div class="circle-item" :class="{ 'is-active': isActive }">
    <div class="icon">
      <SvgIcon :icon="icon" :is-active="isActive" />
    </div>
    <div class="text">{{ text }}</div>
  </div>
</template>

<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: "djbba",
    },
    text: {
      type: String,
      default: "环境评价",
    },
  },
};
</script>

<style lang="scss" scoped>
.circle-item {
  position: absolute;
  width: vw(100.5);
  height: vw(100.5);
  background-image: url("~@/assets/center_images/circle-bg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #5fbefa;
  &.is-active {
    color: #ccfffb;
    background-image: url("~@/assets/center_images/circle-bg-active.png");
  }
  .icon {
    margin-top: vh(20);
    font-size: vw(40);
  }
  .text {
    font-family: YouSheBiaoTiHei;
    font-size: vw(14);
  }
}
</style>
