<template>
  <div>
    <!-- 引入头部导航栏 -->
    <v-header></v-header>
    <!-- 显示子页面 -->
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import vHeader from "../components/Header";

export default {
  name: "Home",
  components: {
    vHeader,
  },
};
</script>
