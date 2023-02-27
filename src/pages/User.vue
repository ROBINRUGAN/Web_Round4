<template>
  <div class="login" style="text-align: center">
    <br /><br /><br /><br />
    <div style="text-align: center"><h1>个人中心</h1></div>
    <div class="info">
      账号：{{ account }}
      <br />
      邮箱：{{ email }}
      <br />
      余额：{{ money }}
      <br />
      类型：{{ type }}
    </div>
    <br />
    <button><router-link to="/mylist">查看已上传项目</router-link></button>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {
      account: "",
      email: "1220045015@qq.com",
      money: 0,
      usertype: "",
      type:""
    };
  },
  beforeCreate() {
    if (this.$cookies.get("username") == null) {
      alert("你还没有登录！！！");
      this.$router.push({
        path: "/login",
      });
    }
  },
  mounted() {
    this.account = this.$cookies.get("username");
    this.email = this.$cookies.get("email");
    this.money = this.$cookies.get("usermoney");
    if (this.$cookies.get("usertype") == 1) this.type = "普通用户";
    if (this.$cookies.get("usertype") == 3) this.type = "管理员";
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
.info {
  text-align: left;
  font-size: 1.3rem;
  margin-left: 40%;
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