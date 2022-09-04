<template>
  <div class="base-count-two">
    <div class="count-box" :class="{ 'has-unit': showUnit }">
      <div class="num-bg" v-for="item of numList" :key="item.uuid">
        {{ item.value }}
      </div>
      <!-- <span>{{ numList }}</span> -->
    </div>
    <slot name="unit">
      <span class="default-unit">万条</span>
    </slot>
  </div>
</template>

<script>
import anime from "animejs";
let uuid = 1;
export default {
  props: {
    count: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      animatedValue: 0,
    };
  },
  watch: {
    count(val) {
      this.animateNum(val);
    },
  },
  computed: {
    showUnit() {
      return !!this.$slots.unit;
    },
    numList() {
      return this.animatedValue
        .toFixed(0)
        .split("")
        .map((v) => ({
          uuid: uuid++,
          value: v,
        }));
    },
  },
  mounted() {
    this.animateNum(this.count);
  },
  methods: {
    animateNum(value) {
      anime({
        targets: this,
        animatedValue: value,
        duration: 2600,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.base-count-two {
  color: #7bc4f7;
  font-size: vw(11);
  .count-box {
    font-family: DS-Digital-Bold;
    color: #f6e7b2;
    font-size: vw(45);
    display: inline-flex;
    position: relative;
    .num-bg {
      background-image: url("~@/assets/center_images/num-bg.png");
      background-repeat: no-repeat;
      width: vw(31);
      height: vh(41.5);
      background-size: 100% 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      &:nth-child(n + 2) {
        margin-left: vw(5.5);
      }
    }
    // .value {
    //   position: absolute;
    // }
  }
  .has-unit {
    margin-right: vw(8);
  }
  .default-unit {
    margin-left: vw(8);
  }
}
</style>
