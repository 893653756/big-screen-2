<template>
  <div class="right-two">
    <div class="right-two-title">
      <span ysbth>特色应用</span>
    </div>
    <div class="panel-box">
      <div class="panel-item" v-for="item of dataList" :key="item.label">
        <BaseCount :count="item.count" class="panel-item-num">
          <span slot="unit">{{ item.unit }}</span>
        </BaseCount>
        <BaseLabel :label="item.label" class="panel-item-label" />
      </div>
    </div>
    <!-- 排行 -->
    <div class="rank-box">
      <div class="rank-box_title">访问量排名TOP{{ rankList.length }}</div>
      <div class="rank-info">
        <RankItem v-for="item of rankList" :key="item.rank" :rankInfo="item" />
      </div>
    </div>
  </div>
</template>

<script>
import BaseCount from "@/components/BaseCount";
import BaseLabel from "@/components/BaseLabel";
import RankItem from "./rank-item.vue";
import { mapGetters } from "vuex";
import { StstemIdMapName } from "@/config/constent";
export default {
  components: {
    BaseCount,
    BaseLabel,
    RankItem,
  },
  computed: {
    ...mapGetters({
      systemSpecialData: "systemSpecialData",
      rankData: "rankData",
    }),
    dataList() {
      let { special_num, getway_num, pv_num } = this.systemSpecialData;
      return [
        { label: "特色应用数", count: special_num, unit: "个", icon: "xxx" },
        { label: "累计访问量", count: pv_num, unit: "条", icon: "xxx" },
        { label: "网关代理量", count: getway_num, unit: "条", icon: "xxx" },
      ];
    },
    rankList() {
      return this.rankData.map((item, index) => {
        return {
          rank: index + 1,
          icon: item.system_pic,
          desc: StstemIdMapName[item.system_id].label || item.system_name,
          count: item.system_pv,
        };
      });
    },
  },
  data() {
    return {
      // dataList: [
      //   { label: "特色应用数", count: 32, unit: "个", icon: "xxx" },
      //   { label: "累计访问量", count: 47, unit: "万条", icon: "xxx" },
      //   { label: "网关代理量", count: 30, unit: "万条", icon: "xxx" },
      // ],
      // rankList: [
      //   { rank: 1, icon: "xx", desc: ["“三线一单” 符合性分析"], count: 12345 },
      //   {
      //     rank: 2,
      //     icon: "xx",
      //     desc: ["四川省“三线一单” 数据分析系统"],
      //     count: 10375,
      //   },
      //   {
      //     rank: 3,
      //     icon: "xx",
      //     desc: ["建设项目", "环评公示"],
      //     count: 10105,
      //   },
      // ],
    };
  },
};
</script>

<style lang="scss" scoped>
.right-two {
  height: vh(395);
}
.right-two-title {
  margin-top: vh(16);
  display: flex;
  height: vh(33);
  justify-content: center;
  background-image: url("~@/assets/right_images/title-bg.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  align-items: center;
  span {
    font-size: vw(28);
    font-weight: 400;
    color: #9ff2fe;
  }
}
.panel-box {
  display: flex;
  justify-content: center;
  margin-top: vh(17);
  .panel-item {
    &:nth-child(n + 2) {
      margin-left: vw(11.5);
    }
    width: vw(114);
    height: vh(64.5);
    background-image: url("~@/assets/right_images/panel-bg.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    ::v-deep .count {
      font-size: vw(25);
    }
    &-num {
      margin-top: vh(10);
    }
    &-label {
      margin-top: vh(3);
    }
  }
}
.rank-box {
  margin-top: vh(12);
  &_title {
    background-image: url("~@/assets/right_images/title-bg-02.png");
    background-repeat: no-repeat;
    background-position: bottom center;
    background-size: vw(181.5) vh(6.5);
    text-align: center;
    line-height: 1.5em;
    font-weight: bold;
    font-size: vw(13);
    color: rgba(159, 242, 254, 1);
  }
  .rank-info {
    margin-top: vh(13);
    display: flex;
    justify-content: center;
    & > div {
      &:nth-child(n + 2) {
        margin-left: vw(16.5);
      }
    }
  }
}
</style>
