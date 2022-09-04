<template>
  <div id="app">
    <HomePage />
  </div>
</template>

<script>
import HomePage from "@/pages/home/index.vue";
export default {
  name: "App",
  components: {
    HomePage,
  },
};
</script>

<style>
#app {
  /* color: #ffffff; */
  font-family: "Microsoft YaHei";
  display: flex;
  line-height: 1;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
@keyframes circleLoop {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
