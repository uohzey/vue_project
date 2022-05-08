<template>
  <el-container class="home-container">
    <el-header
      ><div>
        <img src="../assets/logo.png" height="35px" width="35px" alt="" />
        <span>大气数据管理系统</span>
      </div>
      <el-button type="info" @click="logout">log out</el-button></el-header
    >
    <el-container>
      <el-aside>
        <side-bar></side-bar>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import SideBar from '../components/SideBar.vue'
export default {
  name: 'HomePage',
  components: { SideBar },
  computed: {},
  methods: {
    logout() {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
  },
}
</script>

<style lang ="less" scoped>
.home-container {
  height: 100vh;
  width: 100%;
}
.el-header {
  display: flex;
  justify-content: space-between;
  padding-left: 2%;
  background-color: rebeccapurple;
  color: #ffff;
  > div {
    display: flex;
    align-items: center;
    span {
      margin-left: 15px;
    }
  }
  align-items: center;
}
.el-aside {
  overflow: hidden;
}
.el-main {
  /* position: absolute; */
  /* overflow-y: auto; 当内容过多时y轴出现滚动条 */
}
</style>