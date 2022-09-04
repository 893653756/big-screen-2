<template>
  <svg class="c-svg-icon" aria-hidden="true" :class="{ 'is-active': isActive }">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
export default {
  name: "SvgIcon",
  props: {
    icon: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    iconName() {
      return `#icon-${this.icon}`;
    },
  },
};
</script>

<style lang="scss">
.c-svg-icon {
  width: 1em;
  height: 1em;
//   vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  fill: url(#nomal-gradient);
  &.is-active {
    fill: url(#active-gradient);
  }
}
</style>
