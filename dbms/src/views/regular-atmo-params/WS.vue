<template>
  <div>
    <search-form params="ws" :updateData="updateData"></search-form>
    <data-form :titles="titles" :isChanged="isChanged"></data-form>
    <data-analyse></data-analyse>
  </div>
</template>

<script>
import SearchForm from '@/components/SearchForm.vue'
import DataForm from '@/components/DataForm.vue'
import DataAnalyse from '@/components/DataAnalyse.vue'
export default {
  name: 'WS',
  components: { SearchForm, DataForm, DataAnalyse },
  data() {
    return {
      isChanged: true,
      titles: [
        {
          prop: 'date',
          label: '日期'
        },
        {
          prop: 'time',
          label: '时间'
        },
        {
          prop: 'T',
          label: '温度'
        },
        {
          prop: 'RH',
          label: '相对湿度'
        },
        {
          prop: 'P',
          label: '大气压强'
        },
        {
          prop: 'WS',
          label: '风速'
        },
        {
          prop: 'WD',
          label: '风向'
        }
      ],
    }
  },
  methods: {
    updateData() {
      this.isChanged = !this.isChanged
    },
  },
}
</script>

<style scoped>
</style>