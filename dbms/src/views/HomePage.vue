<template>
  <div>
    <div class="header">Welcome!</div>
    <div class="navbar">
      <el-aside width="200px">
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
          <el-radio-button :label="false">展开</el-radio-button>
          <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
        <el-menu
          router
          default-active="1-4-1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :collapse="isCollapse"
        >
          <el-submenu index="/home">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">常规气象参数</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/acl">大气相干长度</el-menu-item>
              <el-menu-item index="/dft">天空背景辐亮度</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <span slot="title">选项4</span>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
    </div>
    <div class="main">
      <el-container>
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
        <el-select v-model="valuePlace" placeholder="请选择地点" ref="place">
          <el-option
            v-for="item in optionsPlaces"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
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
        <el-button plain @click="handleClick(value2)">确定</el-button>
      </el-container>
      <div class="el-aside"></div>
      <div class="main"><router-view></router-view></div>
    </div>
  </div>
</template>

<script>
import { postRequest } from "../utils/api.js";
export default {
  name: "HomePage",
  data() {
    return {
      isCollapse: true,
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
      value1: "",
      value2: "",
      options: [
        {
          value: "1",
          label: "所有数据",
        },
        {
          value: "2",
          label: "每十秒",
        },
        {
          value: "5",
          label: "每分钟",
        },
        {
          value: "30",
          label: "每小时",
        },
        {
          value: "180",
          label: "每六小时",
        },
      ],
      value: "",
      optionsPlaces: [
        {
          value: "sansha",
          label: "三沙",
        },
        {
          value: "qingdao",
          label: "青岛",
        },
        {
          value: "huludao",
          label: "葫芦岛",
        },
      ],
      valuePlace: "",
    };
  },
  computed: {
    activeRoutes: function () {
      return this.$router.options.routes.filter(function (route) {
        return !route.hidden;
      });
    },
  },
  methods: {
    getLabel() {
      this.$nextTick(() => {
        console.log(this.$refs.place.selected.value);
      });
    },
    handleClick(date) {
      //通过axios调用后端接口;
      const place = this.$refs.place.selected.value;
      // console.log(place);
      const interval = this.$refs.timeInterval.selected.value;
      // console.log(interval);
      const newDate = {
        place,
        startDate: date[0],
        endDate: date[1],
        interval,
      };
      postRequest("/api/data/acl", this.qs.stringify(newDate)).then((res) => {
        console.log();
        console.log(res.data);
      });
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-header {
  position: absolute;
  line-height: 50px;
  top: 0px;
  left: 0px;
  right: 0px;
  background-color: red;
}
.el-aside {
  position: absolute;
  width: 200px;
  top: 100px; /* 距离上面50像素 */
  left: 0px;
  /* bottom: 0px; */
  overflow-y: auto; /* 当内容过多时y轴出现滚动条 */
}
.el-footer {
  position: absolute;
  bottom: 0px;
}
.el-main {
  position: absolute;
  top: 50px;
  left: 200px;
  bottom: 0px;
  right: 0px; /* 距离右边0像素 */
  padding: 10px;
  overflow-y: auto; /* 当内容过多时y轴出现滚动条 */
}
/* 头部样式 */
.header {
  position: absolute;
  line-height: 50px;
  top: 0px;
  left: 0px;
  right: 0px;
}

/* 左侧样式 */
.navbar {
  position: absolute;
  width: 200px;
  top: 0px; /* 距离上面0像素 */
  left: 0px;
  bottom: 0px;
  overflow-y: auto; /* 当内容过多时y轴出现滚动条 */
}

/* 主区域 */
.main {
  position: absolute;
  top: 50px;
  left: 200px;
  bottom: 0px;
  right: 0px; /* 距离右边0像素 */
  padding: 10px;
  overflow-y: auto; /* 当内容过多时y轴出现滚动条 */
  /* background-color: red; */
}
</style>