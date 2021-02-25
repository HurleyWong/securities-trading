<template>
  <div>
    <!-- 信息提示 -->
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item separator="/">
          <i class="el-icon-s-order"></i> 查询
        </el-breadcrumb-item>

        <el-breadcrumb-item>历史委托</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <el-card shadow="hover" class="container">
      <history-order-list />
    </el-card>
  </div>
</template>

<script>
import HistoryOrderList from "../components/HistoryOrderList";

export default {
  name: "HistoryOrderQuery",
  components: {
    HistoryOrderList,
  },
};
</script>

<style scoped>
</style>