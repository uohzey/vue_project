# 项目日志

#### 2020/3/30

- 登录界面设计

  ![](./pics/Login.png)

- 将项目打包到另一台电脑上

  - 安装node_modules

  ```shell
  npm i
  ```

- 登录事件处理

  ![](./pics/LoginErrorMessage.png)

- 调用后端接口axios,配置响应拦截器文件api.js

#### 2022/3/31

- 数据处理

  - tips

    - 使用python处理hdf文件导入mysql --mysql.ipynb
    - 版本:pyhdf0.10.3(需要在官网下载安装包)+numpy1.20.1(用1.19报错)
    - 电脑磁盘转速太低了...用其他电脑导入数据生成sql脚本,再导入,两台电脑磁盘读写速度相差很大(1.3-11mb/s vs 0.1-0.3mb)

    ```shell
    %生成sql脚本(管理员身份运行)
    C:\Windows\system32>mysqldump -u root -p camoc db>C:\db.sql
    %导入sql脚本
    %需要在mysql环境下
    mysql-8.0.28-winx64\bin>mysql -u root -p
    Enter password: ********
    
    mysql>use camoc
    Data changed
    
    mysql> source C:\db.sql
    ```
    
    

- 主界面页面跳转

  - 有两个

  ```vue
  <router-view/>
  <!--默认跳转到App.vue 里的router-view
  index.ts:将路由作为Home的children
  -->
  ```
  - 将路由数据动态渲染到菜单栏
  - v-if v-for不能同时使用,解决方案:在计算属性上遍历
    - 原因:当 Vue 处理指令时，`v-for` 比 `v-if` 具有更高的优先级，哪怕我们只渲染出一小部分用户的元素，也得在每次重渲染的时候遍历整个列表，不论活跃用户是否发生了变化。
  
  ```vue
  <el-menu router>
      <el-submenu
          index="1"
          v-for="(item, index) in this.activeRoutes"
          :key="index"
      >
          <template slot="title"
          ><i class="el-icon-location"></i>常规气象参数{{
              item.name
          }}</template
          >
          <el-menu-item-group>
          <el-menu-item
              :index="children.path"
              v-for="(children, indexj) in item.children"
              :key="indexj"
              >{{ children.name }}</el-menu-item
          >
          </el-menu-item-group>
      </el-submenu>
  </el-menu>
  
  <script>
  export default {
    name: "Home",
    computed: {
      activeRoutes: function () {
        return this.$router.options.routes.filter(function (route) {
          return !route.hidden;
        });
      },
    },
  };
  </script>
  ```
  
  

#### 2022/4/1

- mysql导入数据主键相同:使用关键字,ignore忽略之后的主键相同值,replace替换主键相同值

```mysql
insert ignore into db() values()
insert replace into db() values()
```

#### 2020/4/10

- 学习nodejs时重新安装了nodejs,导致项目里node sass环境出错,解决方案:

```shell
npm rebuild node-sass
```



