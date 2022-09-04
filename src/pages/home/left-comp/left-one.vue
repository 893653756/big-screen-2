<template>
  <div>
    <ItemTitle label="当日汇聚情况" />
    <CommonPanel class="panel">
      <div class="panel-body">
        <LeftOneItem :icon="icon_01" label="日接入当量" :count="561" />
        <LeftOneItem :icon="icon_02" label="日总同步量" :count="456" />
      </div>
    </CommonPanel>
  </div>
</template>

<script>
import ItemTitle from "@/components/ItemTitle/index.vue";
import CommonPanel from "@/components/CommonPanel/index.vue";
import LeftOneItem from "./left-one-item.vue";
import icon_01 from "@/assets/left_images/icon-01.png";
import icon_02 from "@/assets/left_images/icon-02.png";
export default {
  components: {
    ItemTitle,
    LeftOneItem,
    CommonPanel,
  },
  data() {
    this.icon_01 = icon_01;
    this.icon_02 = icon_02;
    return {};
  },
};
</script>

<style lang="scss" scoped>
.panel {
  margin-top: vh(14);
  height: vh(218);
  .panel-body {
    height: 100%;
    position: relative;
    display: flex;
    justify-content: space-evenly;
    & > div {
      flex: 1;
    }
  }
}
</style>
