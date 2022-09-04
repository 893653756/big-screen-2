<template>
  <div class="children">
    <div class="children-item" v-for="item of treeData" :key="item.label">
      <div class="children-item-type">
        <div class="type-name">{{ item.name }}</div>
        <div class="type-value">{{ item.value }}</div>
      </div>
      <ChildItem
        v-if="item.children && item.children.length > 0"
        :treeData="item.children"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "ChildItem",
  props: {
    treeData: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.children {
  &-item {
    padding-left: vw(8);
    &-type {
      display: flex;
      color: #85caff;
      font-size: vw(12);
      .type-value {
        margin-left: vw(12);
      }
      margin-top: vh(8);
    }
  }
}
</style>
