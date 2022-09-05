<template>
  <div class="center-part">
    <CenterOne />
    <div class="center-box">
      <div class="center-box-rect">
        <img :src="centerBg" alt="" class="center-bg" />
        <!-- 倒影图片 -->
        <img :src="reflectionBg" alt="" class="reflection-bg" />
        <div class="text-box">
          <div class="num-unit">
            <div class="num">{{ countSystemData.length }}</div>
            <div class="unit">个</div>
          </div>
          <span class="label">国垂系统深度对接</span>
        </div>
        <CircleItem
          v-for="(item, index) of appList"
          :icon="item.icon"
          :key="item.text"
          :text="item.text"
          :isActive="item.active"
          :class="'circle-' + (index + offset)"
        />
      </div>
    </div>
    <CenterThree />
  </div>
</template>

<script>
import CircleItem from "./center-comp/circle-item.vue";
import CenterOne from "./center-comp/center-one.vue";
import CenterThree from "./center-comp/center-three.vue";
import centerBg from "@/assets/center_images/center-bg.png";
import reflectionBg from "@/assets/center_images/reflection-bg.png";
import { mapGetters } from "vuex";
import { StstemIdMapName } from "@/config/constent";
export default {
  components: {
    CenterOne,
    CenterThree,
    CircleItem,
  },
  computed: {
    ...mapGetters({
      countSystemData: "countSystemData",
      systemIndex: "systemIndex",
    }),
    appList() {
      return this.countSystemData.map((item) => ({
        text: StstemIdMapName[item.system_id].label || item.system_name,
        icon: StstemIdMapName[item.system_id].icon,
      }));
    },
    offset() {
      if ([2, 4].includes(this.appList.length)) {
        return 1;
      }
      return 0;
    },
  },
  data() {
    this.centerBg = centerBg;
    this.reflectionBg = reflectionBg;
    // this.appList = [
    //   { text: "环境评价", icon: "hjpj", active: false },
    //   { text: "登记表备案", icon: "djbba", active: false },
    //   { text: "应急预案", icon: "yjya", active: true },
    //   { text: "辐射安全", icon: "fsaq", active: false },
    //   { text: "企业排污", icon: "qypw", active: false },
    // ];
    return {};
  },
};
</script>

<style lang="scss" scoped>
.center-part {
  flex: 1;
  width: 0px;
  padding-left: vw(17);
  .center-box {
    display: flex;
    justify-content: center;
    &-rect {
      position: relative;
      margin-top: vh(-14);
      .center-bg {
        position: relative;
        width: vw(496);
        animation: circleLoop 60s infinite linear;
      }
      .reflection-bg {
        width: vw(361);
        transform: translate(-50%);
        left: 50%;
        position: absolute;
        top: vh(382.5);
      }
      .text-box {
        position: absolute;
        width: 100%;
        height: 100%;
        font-family: PangMenZhengDao;
        left: 0px;
        top: 0px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .num-unit {
          margin-top: vh(108);
        }
        .num {
          color: #88fbff;
          font-size: vw(99);
          display: inline-block;
        }
        .unit {
          color: #88dcff;
          font-size: vw(25);
          margin-left: vw(9);
          display: inline-block;
        }
        .label {
          color: #88dcff;
          font-size: vw(35);
        }
      }
      .circle-0 {
        top: vh(250);
        transform: translateX(-50%);
        left: 50%;
      }
      .circle-1 {
        top: vh(216.5);
        left: vw(6.5);
      }
      .circle-2 {
        top: vh(216.5);
        right: vw(6.5);
      }
      .circle-3 {
        top: vh(99.5);
        left: vw(-25);
        transform: translateX(-100%);
      }

      .circle-4 {
        top: vh(99.5);
        right: vw(-25);
        transform: translateX(100%);
      }
    }
  }
}
</style>
