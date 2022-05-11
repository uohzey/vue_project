<template>
  <div>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="时间间隔">
        <el-select
          v-model="value"
          placeholder="请选择时间间隔"
          ref="timeInterval"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="地点">
        <el-select v-model="valuePlace" placeholder="请选择地点" ref="place">
          <el-option
            v-for="item in optionsPlaces"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="日期">
        <div class="block">
          <span class="demonstration"></span>
          <el-date-picker
            v-model="value2"
            type="daterange"
            align="right"
            value-format="yyyy-MM-dd"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions"
          >
          </el-date-picker>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="getDataList(value2)">查询</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>


<script>
import { Message } from 'element-ui'
import { postRequest } from '../utils/api.js'
export default {
  name: 'SearchForm',
  props: ['params'],
  data() {
    return {
      total: 0,
      dataList: [],
      isCollapse: true,
      pickerOptions: {
        shortcuts: [
          {
            text: '最近一周',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', [start, end])
            },
          },
          {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              picker.$emit('pick', [start, end])
            },
          },
          {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              picker.$emit('pick', [start, end])
            },
          },
        ],
      },
      value1: '',
      value2: '',
      options: [
        {
          value: '1',
          label: '所有数据',
        },
        {
          value: '2',
          label: '每十秒',
        },
        {
          value: '5',
          label: '每分钟',
        },
        {
          value: '30',
          label: '每小时',
        },
        {
          value: '180',
          label: '每六小时',
        },
      ],
      value: '1',
      optionsPlaces: [
        {
          value: 'sansha',
          label: '三沙',
        },
        {
          value: 'qingdao',
          label: '青岛',
        },
        {
          value: 'huludao',
          label: '葫芦岛',
        },
      ],
      valuePlace: 'sansha',
    }
  },

  methods: {
    handleClick(date) {
      //通过axios调用后端接口;
      //通过$refs访问组件
      const place = this.$refs.place.selected.value
      // console.log(place);
      const interval = this.$refs.timeInterval.selected.value
      // console.log(interval);
      const newUrl = '/data/' + this.params
      const newDate = {
        place,
        startDate: date[0],
        endDate: date[1],
        interval,
      }
      postRequest(newUrl, this.qs.stringify(newDate)).then((res) => {
        this.dataList = res.data
        this.$store.state.results = res.data
        console.log(this.$store.state.results)
      })
    },
    async getDataList(date) {
      //通过axios调用后端接口;
      //通过$refs访问组件
      const place = this.$refs.place.selected.value
      // console.log(place);
      const interval = this.$refs.timeInterval.selected.value
      // console.log(interval);
      const newUrl = '/data/' + this.params
      const newDate = {
        place,
        startDate: date[0],
        endDate: date[1],
        interval,
      }
      const { data: res } = await this.$axios.post(
        newUrl,
        this.qs.stringify(newDate)
      ).catch(err=>{
        if(err){
          Message.error({message:'登陆状态已失效,请重新登录!'})
          return;
        }
      })
      this.total = res.data.length
      this.dataList = res.data
      this.$store.state.total = this.total
      this.$store.state.dataList = this.dataList
      console.log(this.$store.state.total)
    },
  },
}
</script>


<style scoped>
</style>