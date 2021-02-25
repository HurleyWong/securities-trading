<template>
  <div>
    <!-- 可用资金 -->
    <el-row>
      <el-col :span="5"> 可用资金: {{ balance }} </el-col>
    </el-row>
    <!-- 持仓列表 表格 -->
    <el-table
      :data="
        tableData.slice(
          (query.currentPage - 1) * query.pageSize,
          query.currentPage * query.pageSize
        )
      "
      border
      :cell-style="cellStyle"
      @sort-change="changeTableSort"
    >
      <el-table-column
        prop="code"
        label="代码"
        align="center"
        sortable
        :sort-orders="['ascending', 'descending']"
      />
      <el-table-column prop="name" label="名称" align="center" />
      <el-table-column prop="count" label="股票数量" align="center" />
      <el-table-column prop="cost" label="总投入" align="center" />
      <el-table-column label="成本" />
    </el-table>
    <!-- 分页空间 刷新按钮 -->
    <div class="pagination">
      <el-button
        round
        type="primary"
        size="mini"
        style="margin-top: 2px; float: right"
        icon="el-ihexo con-refresh"
        @click=""
      >
        刷新
      </el-button>
      <el-pagination
        layout="total, prev, pager, next"
        :current-page="query.currentPage"
        :page-size="query.pageSize"
        :total="dataTotalCount"
        background
        @current-change="handlePageChange"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "PostList",
  data() {
    return {
      balance: 10,
      tableData: [
        { code: "600025", name: "华能水电", count: 100, cost: 20 },
        { code: "600000", name: "浦发银行", count: 100, cost: 20 },
        { code: "000001", name: "平安银行", count: 100, cost: 20 },
        { code: "600886", name: "国投电力", count: 100, cost: 20 },
      ],
      // 总记录数
      dataTotalCount: 4,
      query: {
        // 当前页码
        currentPage: 1,
        // 每页显示的记录
        pageSize: 2,
      },
    };
  },

  methods: {
    cellStyle({ row, column, rowIndex, columnIndex }) {
      return "padding: 2px;";
    },

    handlePageChange(val) {
      this.$set(this.query, "currentPage", val);
    },

    changeTableSort(column) {
      if (column.order == "descending") {
        this.tableData = this.tableData.sort();
      } else {
        this.tableData = this.tableData.sort(
          (a, b) => a[column.prop] - b[column.prop]
        );
      }
    },
  },
};
</script>

<style scoped>
</style>