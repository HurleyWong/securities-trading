<template>
  <div class="wrapper">
    <!-- 引入头部导航栏 -->
    <v-header></v-header>

    <!-- 引入侧边导航栏 -->
    <v-sidebar></v-sidebar>

    <!-- 显示子页面 -->
    <div class="content-box" :class="{ 'content-collapse': collapse }">
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
// 这么命名是为了防止和html本身的标签起冲突
import vHeader from "../components/Header";
import vSidebar from "../components/Sidebar";

export default {
  name: "Home",
  components: {
    vHeader,
    vSidebar,
  },
  data() {
    return {
      collapse: false,
    };
  },
  created() {
    this.$bus.on("collapse-content", (msg) => {
      this.collapse = msg;
    });
  },
  beforeDestroy() {
    this.$bus.off("collapse-content", (msg) => {
      this.collapse = msg;
    });
  },
};
</script>
