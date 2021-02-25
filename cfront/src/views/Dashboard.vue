<template>
  <div>
    <!-- 信息提示 -->
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item separator="/">
          <i class="el-icon-baseball"></i> 资金股份
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <el-card class="container">
      <post-list />
    </el-card>
  </div>
</template>

<script>
import PostList from "../components/PostList.vue";
export default {
  name: "Dashboard",
  components: {
    PostList,
  },
};
</script>

<style scoped>
</style>