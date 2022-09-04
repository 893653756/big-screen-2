<template>
  <div class="label-count">
    <span class="label">{{ info.label }}</span>
    <span class="value">{{ info.value }}</span>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      default: () => ({
        label: "辐射许可",
        value: 1357,
      }),
    },
  },
};
</script>

<style lang="scss" scoped>
.label-count {
  display: flex;
  flex-direction: column;
  .label {
    color: #9fcefe;
    font-size: vw(11);
    font-weight: bold;
  }
  .value {
    color: #9ff2fe;
    font-size: vw(21);
    font-family: DS-Digital-Bold;
    margin-top: vh(10);
  }
}
</style>
