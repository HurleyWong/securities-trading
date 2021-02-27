<template>
  <div class="orderForm">
    <el-form label-width="80px">
      <!-- 股票代码自动提示框 -->
      <el-form-item>
        <h3 :style="direction === 0 ? 'color: #F56C6C' : 'color: #67C23A'">
          {{ direction === 0 ? "买入" : "卖出" }}股票
        </h3>
      </el-form-item>
      <!-- 证券代码 -->
      <el-form-item label="证券代码">
        <code-input />
      </el-form-item>
      <!-- 证券名称 -->
      <el-form-item label="证券名称">
        <el-input readonly v-model="name" />
      </el-form-item>

      <!-- 可买/可卖的数量 -->
      <el-form-item :label="'可' + (direction === 0 ? '买' : '卖') + '(股)'">
        <el-input readonly v-model="affordCount" />
      </el-form-item>
      <!-- 价格 -->
      <el-form-item label="价格">
        <el-input-number
          v-model="price"
          controls-position="right"
          :step="0.01"
          :min="0.01"
        />
      </el-form-item>

      <el-form-item :label="(direction === 0 ? '买入' : '卖出') + '(股)'">
        <el-input-number
          v-model="volume"
          controls-position="right"
          :max="affordCount"
          :min="0"
        />
      </el-form-item>

      <!-- 按钮，根据显示的按钮来显示是买入还是卖出 -->
      <el-form-item>
        <el-button
          :type="direction === 0 ? 'danger' : 'success'"
          style="float: right"
        >
          {{ direction === 0 ? "买入" : "卖出" }}
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
 
<script>
import CodeInput from "./CodeInput";

export default {
  name: "OrderWidget",
  components: {
    CodeInput,
  },

  data() {
    return {
      code: "",
      name: "",
      affordCount: undefined,
      price: undefined,
      volumu: undefined,
    };
  },

  created() {
    this.$bus.on("codeinput-selected", this.updateSelectedCode);
  },
  beforeDestroy() {
    this.$bus.off("codeinput-selected", this.updateSelectedCode);
  },

  methods: {
    updateSelectedCode(item) {
      this.code = item.code;
      this.name = item.name;
      this.price = undefined;
      this.volume = undefined;
    },
  },

  // 判断是买入的组件还是卖出的组件
  props: {
    direction: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.orderForm {
  input {
    text-align: center;
  }

  .el-input-number {
    width: 100%;
  }
}
</style>