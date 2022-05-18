<template>
  <div>
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-menu router default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
      :collapse="isCollapse">
      <el-submenu index="/home">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">常规气象参数</span>
        </template>
        <el-menu-item index="/acl">大气相干长度</el-menu-item>
        <el-menu-item index="/dft">天空背景辐亮度</el-menu-item>
        <el-menu-item index="/vis">能见度</el-menu-item>
        <el-menu-item index="/pas">吸收系数</el-menu-item>
        <el-menu-item index="/turb">湍流廓线</el-menu-item>
        <el-menu-item index="/ws">气象参数</el-menu-item>
      </el-submenu>
      <!-- <el-submenu index="/home">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">常规气象参数</span>
        </template>
        <el-menu-item index="/1">大气相干长度</el-menu-item>
        <el-menu-item index="/2">天空背景辐亮度</el-menu-item>
        <el-menu-item index="/vis">能见度</el-menu-item>
      </el-submenu> -->
      <el-menu-item index="/home">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>


<script>
export default {
  name: 'SideBar',
  data() {
    return {
      isCollapse: true,
    }
  },
  computed: {
    activeRoutes: function () {
      return this.$router.options.routes.filter(function (route) {
        return !route.hidden
      })
    },
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
  },
}
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>