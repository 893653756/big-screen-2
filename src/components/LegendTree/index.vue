<template>
  <div class="legend-tree">
    <div v-for="item of treeData" :key="item.label" class="tree-item">
      <div class="tree-item-type">
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
import ChildItem from "./child-item.vue";
export default {
  components: {
    ChildItem,
  },
  props: {
    treeData: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.tree-item {
  &:nth-child(n + 2) {
    margin-top: vh(20);
  }
  &-type {
    display: flex;
    position: relative;
    &::before {
      content: "";
      width: vw(3.15);
      height: vh(10.85);
      background-color: #7efcfe;
      top: 50%;
      transform: translateY(-50%);
      left: vw(-8.95);
      position: absolute;
    }
    .type-name {
      color: #9ff2fe;
      font-size: vw(14);
      font-weight: bold;
    }
    .type-value {
      color: #59fffd;
      font-size: vw(12);
      margin-left: vw(12);
    }
  }
}
</style>
