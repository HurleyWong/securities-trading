<template>
  <div>
    <!-- 委托列表 -->
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
      <!-- 委托时间 股票代码 名称 委托价格 委托数量 方向 状态 -->
      <el-table-column
        prop="time"
        label="委托时间"
        align="center"
        sortable
        :sort-orders="['ascending', 'descending']"
        :default-sort="{ prop: 'time', order: 'descending' }"
      />
      <el-table-column prop="code" label="股票代码" align="center" />
      <el-table-column prop="name" label="名称" align="center" />
      <el-table-column prop="price" label="委托价格" align="center" />
      <el-table-column prop="count" label="委托数量" align="center" />
      <el-table-column prop="direction" label="方向" align="center" />
      <el-table-column prop="status" label=" 状态" align="center" />
    </el-table>

    <!-- 分页控件 + 刷新按钮 -->
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
  name: "OrderList",
  data() {
    return {
      balance: 10,
      tableData: [
        {
          time: "09:55:00",
          code: "000001",
          name: "平安银行",
          price: 100,
          count: 10,
          direction: "买入",
          status: 3,
        },
        {
          time: "09:50:00",
          code: "000001",
          name: "平安银行",
          price: 100,
          count: 10,
          direction: "买入",
          status: 1,
        },
        {
          time: "09:40:00",
          code: "000001",
          name: "平安银行",
          price: 100,
          count: 10,
          direction: "买入",
          status: 3,
        },
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

    // 分页导航
    handlePageChange(val) {
      // 对于 value 值的修改，不能采用直接赋值的方式，下面这种方式不行
      // this.query.currentPage = val;
      this.$set(this.query, "currentPage", val);
    },

    // 处理排序
    changeTableSort(column) {
      // 排序的属性
      let fieldName = column.prop;
      // 排序的方式
      let sortingType = column.order;

      // 实现整个表格的排序
      if (fieldName == "time") {
        if (sortingType == "descending") {
          this.tableData = this.tableData.sort(
            // 对于非纯数字的比较，不能直接相减，而应使用大于小于
            (a, b) => {
              if (b[fieldName] > a[fieldName]) {
                return 1;
              } else if (b[fieldName] === a[fieldName]) {
                return 0;
              } else {
                return -1;
              }
            }
          );
        } else {
          this.tableData = this.tableData.sort((a, b) => {
            if (b[fieldName] > a[fieldName]) {
              return -1;
            } else if (b[fieldName] === a[fieldName]) {
              return 0;
            } else {
              return 1;
            }
          });
        }
      }
    },
  },
};
</script>

<style scoped>
</style>