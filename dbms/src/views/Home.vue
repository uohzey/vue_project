<template>
  <div>
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu router>
            <el-submenu
              index="1"
              v-for="(item, index) in this.activeRoutes"
              :key="index"
            >
              <template slot="title"
                ><i class="el-icon-location"></i>常规气象参数{{
                  item.name
                }}</template
              >
              <el-menu-item-group>
                <el-menu-item
                  :index="children.path"
                  v-for="(children, indexj) in item.children"
                  :key="indexj"
                  >{{ children.name }}</el-menu-item
                >
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  computed: {
    activeRoutes: function () {
      return this.$router.options.routes.filter(function (route) {
        return !route.hidden;
      });
    },
  },
};
</script>

<style scoped>
</style>