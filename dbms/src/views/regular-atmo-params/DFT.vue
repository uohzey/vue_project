<template>
  <div>
    <search-form params="dft" :updateData="updateData"></search-form>
    <data-form :titles="titles" :isChanged="isChanged"></data-form>
    <data-analyse></data-analyse>
  </div>
</template>

<script>
import SearchForm from '@/components/SearchForm.vue'
import DataForm from '@/components/DataForm.vue'
import DataAnalyse from '@/components/DataAnalyse.vue'
export default {
  name: 'DFT',
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
          prop: 'vis',
          label: '天空背景辐亮度'
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