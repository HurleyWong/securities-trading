<template>
  <!-- state: 用户选择的内容
       fetch-suggestions: 通过给出 queryString, callback 来填充提示框的内容
       trigger-on-focus: 是否获取焦点之后会立即触发搜索
       debounce: 查询触发阈值，用户输入间隔大于某个值之后再进行搜索
       select: 自动提示框的信息（用户选中的 item）
  -->
  <el-autocomplete
    style="width: 100%"
    size="small"
    placeholder="代码/简称"
    :fetch-suggestions="querySearchAsync"
    :trigger-on-focus="false"
    :debounce="100"
    @select="updateInput"
    v-model="state"
  >
  </el-autocomplete>
</template>

<script>
export default {
  name: "CodeInput",
  data() {
    return {
      state: "",
    };
  },

  methods: {
    // 根据 queryString 的值来联想用户会输入哪些值
    querySearchAsync(queryString, callback) {
      // 从后台服务查询数据
      let list = [
        {
          code: 1,
          name: "平安银行",
          value: "000001-平安银行",
        },
        {
          code: 600000,
          name: "浦发银行",
          value: "600000-浦发银行",
        },
      ];

      // 通知自动提示框的组件在提示框要显示的内容
      callback(list);
    },

    updateInput(item) {
      // 不这样学习的原因是因为，000001 会被简化为 1，而我们想要的不是数学数字，而是这个值
      // 1 --> 0000001 --> 000001
      // this.state = item.code;
      this.state = ("000000" + item.code).slice(-6);

      // 用消息总线通知
      this.$bus.emit("codeinput-selected", item);
    },
  },
};
</script>

<style lang="scss">
.wide-dropdown {
  width: 600px !important;
}
</style>