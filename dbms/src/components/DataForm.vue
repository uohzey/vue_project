<template>
    <el-table :data="tableData" style="width: 50%" height="450">
      <el-table-column 
      v-for="item in options"
      :key="item.prop"
      :prop = "item.prop"
      :label = "item.label"
      ></el-table-column>
    </el-table>
</template>

<script>
export default {
    name:"DataForm",
    props:['params'],
    data(){
        return {
            tableData:[],
            options:this.params,
        }
    }
}
</script>

<style lang="less" scoped>

</style>

