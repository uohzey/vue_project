<template>
  <div class="login-form">
    <!-- 登录表单头部 -->
    <header class="login-title">
      <h2>登录</h2>
      <h4>
        你尚未拥有账户?点击
        <span class="login-regist">注册</span>
        进行登录
      </h4>
    </header>
    <!-- 登录表单内容 -->
    <article>
      <el-form
        :model="LoginFormData"
        :rules="rules"
        class="login-form-body"
        ref="LoginFormData"
        label-width="100px"
      >
        <el-form-item label="用户名" prop="username">
          <el-input
            v-model="LoginFormData.username"
            class="login-form-input"
          ></el-input>
        </el-form-item>
        <el-form-item label="用户密码" prop="password">
          <el-input
            v-model="LoginFormData.password"
            class="login-form-input"
          ></el-input>
        </el-form-item>
      </el-form>
      <!-- <el-checkbox v-model="ready" class="login-ready"
        >我已阅读并同意
        <span>相关协议</span>
      </el-checkbox> -->
      <div class="login-button">
        <el-button round type="primary" @click="submitLogin">登录</el-button>
      </div>
      <!-- <el-form-item type = "text" aria-autocomplete="false" v-model=""></el-form-item> -->
    </article>
    <!-- 登录表单底部 -->
    <footer></footer>
  </div>
</template>

<script>
import { Message } from 'element-ui'
import {postRequest} from '../utils/api.js'
export default {
  name: 'LoginForm',
  data() {
    return {
      LoginFormData: {
        username: 'admin',
        password: '000000',
      },
      rules: {
        username: [
          // blur 失去焦点时触发
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 5, max: 8, message: '请输入用户名', trigger: 'blur' },
        ],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
      },
      ready: false,
    }
  },
  methods: {
    submitLogin() {
      this.$refs.LoginFormData.validate(async (valid) => {
        if (valid) {
          //通过axios调用后端接口
          postRequest("/api/login", this.qs.stringify(this.LoginFormData)).then(
            (res) => {
              if (res.data.status === 200) {
                window.sessionStorage.setItem('token', res.data.token)
                Message.success({message:'登录成功!'})
                // alert(JSON.stringify(res));
                this.$router.replace("/home");
              }
              else{
                Message.error({message:'请输入正确的账号密码!'})
                return console.log(res.data);
              }
            }
          );
        }
        //   const { data: res } = await this.$axios.post(
        //     '/api/login',
        //     this.qs.stringify(this.LoginFormData)
        //   )
        //   if (res.status !== 200) {
        //     // return this.$message.error('登陆失败')
        //     return this.$message.error(res.status)
        //   }
        //   this.$message.success('登陆成功')
        //   // console.log(res.token);
        //   //将登录成功后的token保存到客户端的seesionStorage
        //   window.sessionStorage.setItem('token', res.token)
        //   this.$router.push('/home')
        // }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.login-form {
  .login-title {
    h2 {
      font-size: 25px;
    }
    h4 {
      font-size: 14px;
      color: rgba($color: gray, $alpha: 0.7);
      letter-spacing: 1px;
      padding-top: 5px;
      .login-regist {
        color: #426ab3;
      }
      .login-regist:hover {
        color: #6a6da9;
      }
    }
  }
  article {
    .login-form-body {
      width: 80%;
      padding: 10px;
      .login-form-input {
        height: 20px;
      }
    }
    .login-ready {
      span {
        color: #426ab3;
      }
      span:hover {
        color: #6a6da9;
      }
    }
    .login-button {
      text-align: right;
      padding-top: 15px;
      padding-right: 15%;
      button {
        width: 40%;
      }
    }
  }
}
</style>