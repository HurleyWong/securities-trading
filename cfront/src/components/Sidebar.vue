<template>
  <div class="sidebar">
    <el-menu
      class="sidebar-el-menu"
      :default-active="onRoutes"
      :collapse="collapse"
      background-color="#324157"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
      unique-opened
      router
    >
      <template v-for="item in items">
        <!-- 有下拉列表的 item -->
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index">
            <!-- 提示项 -->
            <template slot="title">
              <i :class="item.icon" />
              <span slot="title">{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-menu-item :index="subItem.index" :key="subItem.index">
                {{ subItem.title }}
              </el-menu-item>
            </template>
          </el-submenu>
        </template>
        <!-- 没有下拉列表的 item -->
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon" />
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collapse: false,
      // item 数组不应该写死，而是根据用户登录后所有的权限来查询，将用户可访问的列表动态返回给用户
      items: [
        {
          icon: "el-icon-pie-chart",
          index: "dashboard",
          title: "资金股份",
        },
        {
          icon: "el-icon-s-order",
          index: "buy",
          title: "买入",
        },
        {
          icon: "el-icon-sell",
          index: "sell",
          title: "卖出",
        },
        {
          icon: "el-icon-search",
          index: "3",
          title: "查询",
          subs: [
            {
              index: "orderquery",
              title: "当日委托",
            },
            {
              index: "tradequery",
              title: "当日成交",
            },
            {
              index: "historyorderquery",
              title: "历史委托",
            },
            {
              index: "histradequery",
              title: "历史成交",
            },
          ],
        },

        {
          icon: "el-icon-bank-card",
          index: "4",
          title: "银证业务",
          subs: [
            {
              index: "transfer",
              title: "银证转账",
            },
            {
              index: "transferquery",
              title: "转账查询",
            },
          ],
        },
        {
          icon: "el-icon-setting",
          index: "pwdsetting",
          title: "修改密码",
        },
      ],
    };
  },
  computed: {
    onRoutes() {
      return this.$route.path.replace("/", "");
    },
  },
  methods: {
    collapseChange(msg) {
      this.collapse = msg;
      // 往总线发送消息，通知主页对折叠进行处理
      this.$bus.emit("collapse-content", msg);
    },
  },
  created() {
    // 订阅 collapse 消息
    this.$bus.on("collapse", (msg) => {
      this.collapseChange(msg);
    });
  },
  beforeDestroy() {
    // 在销毁前结束订阅
    this.$bus.off("collapse", (msg) => {
      this.collapseChange(msg);
    });
  },
};
</script>

<style scoped lang="scss">
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  overflow-y: scroll;

  .el-menu-item {
    min-width: 150px;
  }

  li {
    text-align: left;
    .el-tooltip {
      width: auto !important;
    }
  }

  /*下拉导航菜单多出1px*/
  .el-menu {
    border-right-width: 0;
  }

  .el-menu--collapse {
    width: auto !important;
  }
}

.sidebar::-webkit-scrollbar {
  width: 0;
}

.sidebar-el-menu:not(.el-menu--collapse) {
  width: 150px;
}

.sidebar > ul {
  height: 100%;
}
</style>