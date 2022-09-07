<template>
  <div class="base-count">
    <AnimatedNumber
      :form="0"
      :value="count"
      :formatValue="formatToPrice"
      :duration="2500"
      easing="easeInOutQuad"
      class="count"
      :class="{ 'has-unit': showUnit }"
    />
    <slot name="unit">
      <span class="default-unit">条</span>
    </slot>
  </div>
</template>

<script>
import AnimatedNumber from "animated-number-vue";
export default {
  components: {
    AnimatedNumber,
  },
  props: {
    count: {
      type: Number,
      default: 100,
    },
  },
  computed: {
    showUnit() {
      return !!this.$slots.unit;
    },
  },
  methods: {
    formatToPrice(value) {
      return `${value.toFixed(0)}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.base-count {
  color: #7bc4f7;
  font-size: vw(11);
  .count {
    font-family: DS-Digital-Italic;
    color: #9ff2fe;
    font-size: vw(42);
  }
  .has-unit {
    margin-right: vw(8);
  }
  .default-unit {
    margin-left: vw(8);
  }
}
</style>
