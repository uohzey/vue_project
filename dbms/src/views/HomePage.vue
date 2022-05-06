<template>
  <div>
    <div class="header">Welcome!</div>
    <div class="navbar">
      <el-aside width="200px">
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
          <el-radio-button :label="false">展开</el-radio-button>
          <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
        <el-menu
          router
          default-active="1-4-1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :collapse="isCollapse"
        >
          <el-submenu index="/home">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">常规气象参数</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/acl">大气相干长度</el-menu-item>
              <el-menu-item index="/dft">天空背景辐亮度</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <span slot="title">选项4</span>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
    </div>
    <el-main><router-view></router-view></el-main>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      isCollapse: true,
    };
  },
  computed: {
    activeRoutes: function () {
      return this.$router.options.routes.filter(function (route) {
        return !route.hidden;
      });
    },
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-header {
  position: absolute;
  line-height: 50px;
  top: 0px;
  left: 0px;
  right: 0px;
  background-color: red;
}
.el-aside {
  position: absolute;
  width: 200px;
  top: 100px; /* 距离上面50像素 */
  left: 0px;
  /* bottom: 0px; */
  overflow-y: auto; /* 当内容过多时y轴出现滚动条 */
}
.el-footer {
  position: absolute;
  bottom: 0px;
}
.el-main {
  position: absolute;
  top: 50px;
  left: 200px;
  bottom: 0px;
  right: 0px; /* 距离右边0像素 */
  padding: 10px;
  overflow-y: auto; /* 当内容过多时y轴出现滚动条 */
}
/* 头部样式 */
.header {
  position: absolute;
  line-height: 50px;
  top: 0px;
  left: 0px;
  right: 0px;
}

/* 左侧样式 */
.navbar {
  position: absolute;
  width: 200px;
  top: 0px; /* 距离上面0像素 */
  left: 0px;
  bottom: 0px;
  overflow-y: auto; /* 当内容过多时y轴出现滚动条 */
}

/* 主区域 */
.main {
  position: absolute;
  top: 50px;
  left: 200px;
  bottom: 0px;
  right: 0px; /* 距离右边0像素 */
  padding: 10px;
  overflow-y: auto; /* 当内容过多时y轴出现滚动条 */
  /* background-color: red; */
}
</style>