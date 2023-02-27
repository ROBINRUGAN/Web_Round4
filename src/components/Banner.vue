<template>
  <div class="banner">
    <div class="banner-left">
      <img src="https://static1.shuidichou.com/website/img/5fb4691.png" />
    </div>
    <div class="banner-right">
      <ul>
        <li @click="buttonclick(1)" :class="activeNum == 1?'bf':''">
          <router-link to="/home">首页</router-link>
        </li>
        <li @click="buttonclick(2)" :class="activeNum == 2?'bf':''">
          <router-link to="/list">众筹列表</router-link>
        </li>
        <li @click="buttonclick(3)" :class="activeNum == 3?'bf':''">
          <router-link to="/user">个人中心</router-link>
        </li>
        <li @click="buttonclick(4)" :class="activeNum == 4?'bf':''">
          <router-link to="/admin">管理后台</router-link>
        </li>
      </ul>
    </div>
    <button class="loginbtn" v-if="!loginStatus"><router-link to="/login">登录</router-link></button>
    <button class="logoutbtn" v-if="loginStatus" @click="logout"><router-link to="">登出</router-link></button>
    <button><router-link to="/register">注册</router-link></button>
  </div>
</template>

<script>
import del from "../assets/deleteCookies"
export default {
  name: "Banner",
  data() {
    return {
      name: "mewtopia",
      address: "dream",
      activeNum: "",
      loginStatus:""
    };
  },
  methods:{
    buttonclick(n)
    {
      this.activeNum=n
    },
    logout(){
      del.deleteCookies()
      alert("成功退出登录！")      
      this.$router.push({
        path:"/login"
      })
   location.reload()
    } 
  },
  mounted(){
    if(this.$cookies.get('username')!=null)
    this.loginStatus = 1
    else this.loginStatus = 0

  },

};
</script>
<style scoped>
.banner-left {
    margin-top: 0.5rem;
  margin-right: 1rem;
}
.banner {
    width: fit-content;
  text-align: center;
  display: flex;
  margin-left: auto;
  margin-right: auto;

}
.banner-right {
  width: 40rem;
  display: inline;
  text-align: center;
}
ul {
  height: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
  margin-right: 3rem;
}
li {  
  margin: auto;
  display: inline-block;
  text-align: center;
  margin-top: 0.8rem;
  margin-bottom: 0.8rem;
  margin-left: 1rem;
  margin-right: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: .15rem;
  padding-bottom: .15rem;
  font-size: 1.3rem;
  border-width: .01rem;
  border-style: solid;
    border-color: black;
    border-radius: 1rem;

}
li:hover{
    background-color: rgb(142, 196, 254);
}
button{
  height: fit-content;
    margin-top: 0.8rem;
    margin-bottom: 0.8rem;
    margin-right: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: .15rem;
    padding-bottom: .15rem;
    font-size: 1.3rem;
    border-width: .01rem;
    border-style: solid;
    border-color: black;
    border-radius: 1rem;
    display: inline;
}
button:hover{
    background-color: rgb(142, 196, 254);
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: .15rem;
    padding-bottom: .15rem;
}
a{
    text-decoration: none;
    color: black;
}
.bf{
  background-color: rgb(49, 149, 255);
}
.logoutbtn{
  background-color:rgb(207, 89, 89);
  text-decoration: none;
    color: black;
    height: fit-content;
}

button:focus{outline:0;} 
 
</style>