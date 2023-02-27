<template>
  <div class="login" style="text-align: center">
    <br /><br /><br /><br />
    <h1>登录</h1>
    <span>
      账号：
      <input type="text" v-model="account" />
    </span>
    <br />
    <span>
      密码：
      <input type="password" v-model="password" />
    </span>
    <br />
    <button @click="submit">登录</button>
    <button><router-link to="/register">注册</router-link></button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      account: "",
      password: "",
    };
  },
  methods: {
    submit() {
      var formData = new FormData();
      formData.append("user_name", this.account);
      formData.append("password", this.password);
      // formData.forEach((v,k)=>{
      //   console.log(v);
      //   console.log(k);
      // })
      axios
        .post("http://api.mewtopia.cn/api/v1/user/login", formData)
        .then((res) => {
          console.log("success", res.data);
          if (res.data.status == 200) {
            this.$cookies.set("username", res.data.data.user.username);
            this.$cookies.set("email", res.data.data.user.email);
            this.$cookies.set("userid", res.data.data.user.id);
            this.$cookies.set("usertype", res.data.data.user.class);
            this.$cookies.set("usermoney", res.data.data.user.money);
            this.$cookies.set("token", res.data.data.token);
            alert("MEWWWW!!! 登录成功ヾ(≧▽≦*)o");
            
            this.$router.push({
              path: "/user",
              query: res.data.data,
            });
            location.reload()
          } else if (res.data.status == 400) alert(res.data.msg);
        });
    },
  },
};
</script>

<style scoped>
.login {
  background-size: 180% 100%;
  background-position: 40%;
}
input {
  font-size: 1.3rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 1rem;
  border-width: 0.01rem;
}
span {
  font-size: 1.3rem;
}
button {
  margin: 0.2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1.3rem;
  border-radius: 1rem;
  border-width: 0.01rem;
}
button:hover {
  background-color: rgb(142, 196, 254);
}
a {
  text-decoration: none;
  color: black;
}
</style>