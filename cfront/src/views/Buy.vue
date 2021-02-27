<template>
  <div>
    <!-- 信息提示 -->
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item separator="/">
          <i class="el-icon-s-order"></i> 委托
        </el-breadcrumb-item>

        <el-breadcrumb-item>买入</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <el-card shadow="hover" class="container">
      <el-row>
        <!-- 委托组件 -->

        <el-col :span="12">
          <order-widget :direction="0" />
        </el-col>

        <!-- 订单簿组件 -->
        <el-col :span="12"></el-col>
      </el-row>

      <!-- 资金持仓的组件 -->
      <post-list />
    </el-card>
  </div>
</template>

<script>
import PostList from "../components/PostList";
import OrderWidget from "../components/OrderWidget";

export default {
  components: { PostList, OrderWidget },
  name: "Buy",
};
</script>

<style scoped>
</style>