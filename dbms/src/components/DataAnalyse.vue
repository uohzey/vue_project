<template>
  <el-descriptions
    class="margin-top"
    title="数值分析"
    :column="3"
    border
  >
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-user"></i>
        数据条数
      </template>
      {{ this.$store.state.total }}
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-mobile-phone"></i>
        查询耗时
      </template>
      {{ this.$store.state.passTime}}
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-location-outline"></i>
        数值计算
      </template>
      
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-tickets"></i>
        备注
      </template>
      <el-tag size="small">学校</el-tag>
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-office-building"></i>
        联系地址
      </template>
      江苏省苏州市吴中区吴中大道 1188 号
    </el-descriptions-item>
  </el-descriptions>
</template>
<script>
export default {
  name: 'DataAnalyse',
  data() {
    return {}
  },
}
</script>
<style scoped>
</style>