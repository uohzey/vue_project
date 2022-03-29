<template>
  <div class="login">
    <!-- background -->
    <img :src="login_background" class="login-img" />
    <div class="login-card">
      <div class="login-bg"></div>
      <login-form class="login-form"></login-form>
    </div>
  </div>
  <!-- <img :src="login_background" /> -->
</template>
 
<script>
import LoginForm from "../components/LoginForm.vue";
import login_background from "../assets/images/login/login_background.jpg";
export default {
  name: "LoginInter",
  components: { LoginForm },
  data() {
    return {
      login_background,
    };
  },
};
</script>

<style lang="scss">
.login {
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-content: center;
  .login-img {
    width: 100%;
    height: 100%;
    position: absolute;
  }
  .login-card {
    width: 40%;
    height: 50%;
    position: absolute;
    right: 8%;
    top: 30%;
    display: flex;
    padding: 20px;
    justify-content: center;
    .login-bg {
      width: 50%;
      background-color: rgba($color: #fff, $alpha: 0.4);
      border-radius: 10px 0px 0px 10px;
    }
    .login-form {
      width: 50%;
      min-width: 250px;
      min-height: 360px;
      background-color: #fff;
      padding: 10px;
      border-radius: 0 10px 10px 0;
    }
  }
}
</style>