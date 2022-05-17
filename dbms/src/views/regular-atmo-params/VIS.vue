<template>
  <div>
    <search-form params="vis"></search-form>
    <data-form :titles="titles"></data-form>
    <data-analyse></data-analyse>
  </div>
</template>

<script>
import DataForm from '@/components/DataForm.vue'
import DataAnalyse from '@/components/DataAnalyse.vue'
import SearchForm from '@/components/SearchForm.vue'
export default {
  name: 'VIS',
  components: { SearchForm ,DataAnalyse,DataForm},
  data() {
    return {
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
          prop:'vis',
          label:'能见度'
        }
      ],
    }
  },
}
</script>

<style>
</style>