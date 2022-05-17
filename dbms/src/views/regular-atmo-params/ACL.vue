<template>
  <div>
    <search-form params="acl" :addData="addData"></search-form>
    <data-form :titles="titles" :tableData="tableData"></data-form>
    <data-analyse></data-analyse>
  </div>
</template>

<script>
import SearchForm from '@/components/SearchForm.vue'
import DataForm from '@/components/DataForm.vue'
import DataAnalyse from '@/components/DataAnalyse.vue'
export default {
  name: 'ACL',
  components: { SearchForm, DataAnalyse, DataForm },
  data() {
    return {
      tableData:[],
      titles:[
        {
          prop:'date',
          label:'日期'
        },
        {
          prop:'time',
          label:'时间'
        },
        {
          prop:'r0',
          label:'r0'
        }
      ],
    }
  },
  methods: {
    addData(newData){
      this.tableData = newData
      console.log(this.tableData);
    },
  },
}
</script>

<style>
</style>