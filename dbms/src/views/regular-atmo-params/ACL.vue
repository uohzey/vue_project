<template>
  <div>
    <search-form params="acl" ref="aclData"></search-form>
    <el-button type="primary" @click="lazyLoading()">刷新</el-button>
    <el-table :data="tableData" style="width: 50%" height="450">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="time" label="时间" width="180"> </el-table-column>
      <el-table-column prop="r0" label="r0"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
import SearchForm from '../../components/SearchForm.vue'
export default {
  name: 'ACL',
  components: { SearchForm },
  data() {
    return {
      loading: false,
      tableData: [],
      pagination: {
        page: 1,
        pageSize: 20,
        total: 0,
      },
      totalPage: 0,
      countTotal: 20,
      selectedIds: [],
      checked: false,
      otherHeight: 0,
      pageHeight: 0,
    }
  },
  // mounted() {
  //   //this.watchSize();
  //   this.lazyLoading()
  // },
  created() {
    //this.defaultDataTime();
    //this.search();
  },
  methods: {
    lazyLoading() {
      this.tableData = []
      this.totalPage = this.$store.state.total
      this.countTotal = 20
      console.log(this.totalPage)
      for (let i = 1; i <= this.countTotal; i++) {
        this.tableData.push(this.$store.state.dataList[i])
      }
      let dom = document.querySelector('.el-table__body-wrapper')
      dom.addEventListener('scroll', () => {
        const scrollDistance =
          dom.scrollHeight - dom.scrollTop - dom.clientHeight
        // if (scrollDistance <= 0) {  //分辨率问题，如果设置 100% ，滑倒最底部，scrollDistance的值 可能为 0.201 到 -0.201
        if (scrollDistance <= 1) {
          //等于0证明已经到底，可以请求接口
          if (this.pagination.page >= this.totalPage) {
            //判断是否到达底部
            // this.$message.warning("我~是有底线的 (～￣▽￣)～");
            console.log('我~是有底线的 (～￣▽￣)～')
          }
          if (this.pagination.page < this.totalPage) {
            //当前页数小于总页数就请求
            this.pagination.page++ //当前页数自增

            var cIndex = this.countTotal + 10
            for (let i = this.countTotal + 1; i <= cIndex; i++) {
              this.tableData.push(this.$store.state.dataList[i])
            }
            this.countTotal += 10
            //this.getData();
            // this.append();
          }
        }
      })
    },
  },
}
</script>

<style>
</style>