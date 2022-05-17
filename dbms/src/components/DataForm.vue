<template>
    <div>
        <el-button type="primary" @click="lazyLoading()">查询</el-button>
        <el-button type="primary" @click="flashList()">刷新</el-button>
        <el-table :data="tableData" style="width: 50%" height="450">
        <el-table-column 
        v-for="title in titles"
        :key="title.label"
        :prop="title.prop"
        :label = "title.label"
        ></el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
  name:"DataForm",
  props:['titles'],
  data(){
      return {
          tableData:[],
          loading: false,
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
          modPage: 0,
      }
  },
  watch:{

  },
  methods: {
    lazyLoading() {
      this.tableData = []
      this.totalPage = this.$store.state.total / 10
      this.modPage = this.$store.state.total % 10
      // this.countTotal = 20
      // console.log(this.totalPage)
      for (let i = 0; i < this.countTotal; i++) {
        this.tableData.push(this.$store.state.dataList[i])
      }
      let dom = document.querySelector('.el-table__body-wrapper')
      dom.addEventListener('scroll', () => {
        const scrollDistance =
          dom.scrollHeight - dom.scrollTop - dom.clientHeight
        // if (scrollDistance <= 0) {  //分辨率问题，如果设置 100% ，滑倒最底部，scrollDistance的值 可能为 0.201 到 -0.201
        if (scrollDistance <= 1) {
          //等于0证明已经到底，可以请求接口
          if (this.pagination.page > this.totalPage) {
            //判断是否到达底部
            // this.$message.warning("我~是有底线的 (～￣▽￣)～");
            console.log('我~是有底线的 (～￣▽￣)～')
          }
          if (this.pagination.page < this.totalPage - 1) {
            //当前页数小于总页数就请求
            this.pagination.page++ //当前页数自增
            var cIndex = this.countTotal + 10
            for (let i = this.countTotal + 1; i <= cIndex; i++) {
              this.tableData.push(this.$store.state.dataList[i])
            }
            this.countTotal += 10
          }
          if (this.pagination.page == this.totalPage) {
            this.pagination.page++ //当前页数自增
            var ccIndex = this.countTotal + this.modPage
            for (let i = this.countTotal + 1; i <= ccIndex; i++) {
              this.tableData.push(this.$store.state.dataList[i])
            }
            this.countTotal += this.modPage
          }
        }
      })
    },
    flashList() {
      this.$store.state.total = 0
      this.$store.state.dataList = []
    //   this.lazyLoading()
    },
  },
}
</script>

<style lang="less" scoped>

</style>

