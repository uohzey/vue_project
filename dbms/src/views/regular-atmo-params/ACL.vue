<template>
  <div>
    <search-form params="acl" ref="aclData"></search-form>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="time" label="时间" width="180"> </el-table-column>
      <el-table-column prop="r0" label="r0"> </el-table-column>
    </el-table>
    <el-button type="primary" @click="postData()">显示</el-button>
  </div>
</template>

<script>
import SearchForm from '../../components/SearchForm.vue'
export default {
  name: 'ACL',
  components: { SearchForm },
  data() {
    return {
      tableData: [],
    }
  },
  methods: {
    postData() {
      this.tableData = this.$store.state.dataList
    },
  },
}
</script>

<style>
</style>