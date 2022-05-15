<template>
  <div>
    <search-form params="acl" ref="aclData"></search-form>
    <data-form :params="options"></data-form>
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
      options:[
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
}
</script>

<style>
</style>