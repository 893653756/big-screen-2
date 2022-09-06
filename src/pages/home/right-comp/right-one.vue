<template>
  <div class="right-one">
    <div class="right-one_header">
      <div>切到到工作台</div>
      <img :src="iconChange" alt="" />
    </div>
    <div class="line"></div>
    <!-- tab切换 -->
    <div class="tab-box">
      <img :src="iconArrow" alt="" class="arrow" @click="handleChange(-1)" />
      <i class="label">{{
        StstemIdMapName[currentSystem.system_id].label ||
        currentSystem.system_name
      }}</i>
      <img
        :src="iconArrow"
        alt=""
        class="arrow arrow-right"
        @click="handleChange(1)"
      />
    </div>
    <div class="box-box">
      <RightBoxItem
        v-for="item of cardList"
        :label="item.label"
        :key="item.prop + '_' + currentSystem.system_id"
        :count="currentSystem[item.prop]"
      />
    </div>
    <!-- 圆环图 -->
    <RingChart :chain="currentSystem.chain" :grew="currentSystem.grew" />
    <!-- 累计归集量 -->
    <div class="total-box">
      <BaseCount :count="currentSystem.count_num"></BaseCount>
      <BaseLabel label="累计归集量" icon="rect" />
    </div>
    <!-- 柱状图 -->
    <BarChart :dataList="currentSystem.count_map_list" />
  </div>
</template>

<script>
import BaseCount from "@/components/BaseCount";
import BaseLabel from "@/components/BaseLabel";
import iconChange from "@/assets/right_images/icon-change.png";
import iconArrow from "@/assets/right_images/icon-arrow.png";
import RightBoxItem from "./right-box-item.vue";
import RingChart from "./ring-chart.vue";
import BarChart from "./bar-chart.vue";
import { mapGetters } from "vuex";
import { StstemIdMapName } from "@/config/constant";
export default {
  components: {
    BaseCount,
    BaseLabel,
    RightBoxItem,
    RingChart,
    BarChart,
  },
  computed: {
    ...mapGetters({
      countSystemData: "countSystemData",
      systemIndex: "systemIndex",
    }),
    cardList() {
      const systemId = this.currentSystem.system_id;
      return this.systemIdMap[systemId];
    },
  },
  watch: {
    countSystemData() {
      this.initStytem();
    },
    systemIndex() {
      if (this.countSystemData.length > 0) {
        this.initStytem();
      }
    },
  },
  data() {
    let list_01 = [
      { label: "日归集量", prop: "day_in_num" },
      { label: "日回流量", prop: "day_gc_backflow_num" },
      { label: "日同步量", prop: "day_sync_num" },
    ];
    let list_02 = [
      { label: "日填报量", prop: "day_fill_num" },
      { label: "日审批量", prop: "day_audit_num" },
      { label: "日同步量", prop: "day_sync_num" },
    ];
    let list_03 = [
      { label: "日接入量", prop: "day_in_num" },
      { label: "日同步量", prop: "day_sync_num" },
      { label: "日同步成功量", prop: "day_sync_success_num" },
    ];
    this.systemIdMap = {
      1: list_03,
      2: list_03,
      3: list_02,
      4: list_01,
      5: list_03,
    };
    this.StstemIdMapName = StstemIdMapName;
    this.iconChange = iconChange;
    this.iconArrow = iconArrow;
    return {
      currentSystem: {
        count_num: 0,
        chain: 0,
        day_sync_num: 0,
        day_fill_num: 0,
        day_audit_num: 0,
        system_id: 1,
        system_name: "排污许可证系统",
        day_sync_success_num: 0,
        day_in_num: 0,
        grew: 0,
        count_map_list: [
          {
            countName: "累计填报量",
            count_map_num: 0,
          },
          {
            countName: "办件同步量",
            count_map_num: 0,
          },
          {
            countName: "办件同步成功量",
            count_map_num: 0,
          },
          {
            countName: "证照同步量",
            count_map_num: 0,
          },
          {
            countName: "证照同步成功量",
            count_map_num: 0,
          },
        ],
      },
    };
  },
  methods: {
    initStytem() {
      if (this.countSystemData.length > 0) {
        this.currentSystem = this.countSystemData[this.systemIndex];
      }
    },
    handleChange(num) {
      let index = this.systemIndex;
      index += num;
      if (index < 0) {
        index = this.countSystemData.length - 1;
      } else if (index >= this.countSystemData.length) {
        index = 0;
      }
      this.$store.commit("setSystemIndex", index);
    },
  },
};
</script>

<style lang="scss" scoped>
.right-one {
  flex: 1;
  height: 0px;
  &_header {
    justify-content: center;
    display: flex;
    align-items: center;
    margin-top: vh(51);
    div {
      font-size: vw(15);
      color: #72fef2;
      font-weight: bold;
    }
    img {
      width: vw(17);
      margin-left: vw(14);
    }
  }
  .line {
    margin-top: vh(15);
    margin-right: vw(28.5);
    background-image: linear-gradient(
      to right,
      transparent 10%,
      #7bc9ed,
      transparent 90%
    );
    opacity: 0.76;
    height: vh(1.5);
  }
  .tab-box {
    display: flex;
    justify-content: center;
    margin-top: vh(25.5);
    position: relative;
    &::after {
      content: "";
      position: absolute;
      width: vw(123.5);
      height: vh(11.5);
      background-image: url("~@/assets/right_images/light-line.png");
      background-repeat: no-repeat;
      background-size: cover;
      transform: translateX(-50%);
      left: 50%;
      bottom: vh(-14);
    }
    .label {
      padding: 0px vw(40);
      color: #ccefff;
      font-size: vw(24);
      font-weight: bold;
    }
    .arrow {
      width: vw(21);
      cursor: pointer;
      &.arrow-right {
        transform: scale(-1, 1);
      }
    }
  }
  .box-box {
    margin-top: vh(26);
    display: flex;
    padding-left: vw(28);
  }
  .total-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: vh(1);
    ::v-deep .count {
      font-family: DS-Digital-Bold;
    }
    ::v-deep .base-label {
      font-weight: bold;
      margin-top: vh(10);
    }
  }
}
</style>
