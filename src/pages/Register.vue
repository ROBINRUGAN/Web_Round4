<template>
  <div class="register" style="text-align: center">
    <br /><br /><br /><br />
    <h1>注册</h1>
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
    <span>
      邮箱：
      <input type="email" v-model="email" />
    </span>
    <br />
    <button @click="submit">注册</button>
    <button><router-link to="/login">已有帐号</router-link></button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      account: "",
      password: "",
      email: "",
    };
  },
  methods: {
    submit() {
      var formData = new FormData();
      formData.append("user_name", this.account);
      formData.append("email", this.email);
      formData.append("password", this.password);
      formData.append("class", 1);
      // formData.forEach((v,k)=>{
      //   console.log(v);
      //   console.log(k);
      // })
      axios
        .post("http://api.mewtopia.cn/api/v1/user/register", formData)
        .then((res) => {
          console.log("success", res.data);
          if (res.data.status == 200) {
            alert("MEWWWW!!! 注册成功ヾ(≧▽≦*)o");
            this.$router.push({
              path: "/login",
            });
          } else if (res.data.status == 400) alert(res.data.msg);
        });
    },
  },
};
</script>
<style scoped>
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