<template>
  <div class="base-label">
    <span v-if="icon" class="label-icon">
      <i v-if="icon == 'rect'" class="rect"></i>
      <img v-else :src="icon" alt="" />
    </span>
    <span class="label">{{ label }}</span>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "XXX",
    },
    icon: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.base-label {
  .label {
    font-size: vw(14);
    font-weight: 400;
    color: #79dbff;
  }
  .rect {
    width: vw(3.15);
    height: vh(10.85);
    background-color: #7efcfe;
    display: inline-block;
    margin-right: vw(8.95);
  }
}
</style>
