<template>
  <div>
    <div class="top">
      <button class="topbtn"  @click="buttonclick(1)" :class="activeNum == 1?'bf':''"><router-link to="/admin/unknown">未审核项目</router-link></button>
      <button class="topbtn"  @click="buttonclick(2)" :class="activeNum == 2?'bf':''"><router-link to="/admin/pass">已审核项目</router-link></button>
      <button class="topbtn"  @click="buttonclick(3)" :class="activeNum == 3?'bf':''"><router-link to="/admin/fail">已驳回项目</router-link></button>

    </div>
    <router-view></router-view>
  </div>
</template>
  
<script>
import axios from "axios";
import del from "../assets/deleteCookies";
export default {
  data() {
    return {
      title: "标题标题标题",
      page: "1",
      projects: [],
      search: "",
      activeNum: ""
    };
  },
  beforeCreate() {
    if (this.$cookies.get("username") == null) {
      alert("你还没有登录！！！");
      this.$router.push({
        path: "/login",
      });
    }
    if (this.$cookies.get("usertype") == 1) {
      alert("你不是管理员捏qwq");
      this.$router.push({
        path: "/user",
      });
    }
  },
  methods: {
    detail(project) {
      console.log("我拿到了详情数据", project);
      this.$router.push({
        name: "detail",
        params: project,
      });
    },
    buttonclick(n)
    {
      this.activeNum=n
    }
  }
};
</script>

  <style scoped>
* {
  margin: 0;
  padding: 0;
}
.admin-list-item {
  width: fit-content;
  height: 7rem;
  margin-left: auto;
  margin-right: auto;
  display: flex;
}
.topbtn{
  width: 20rem;

}
.top{
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  display: flex;
}
li {
  width: fit-content;
  height: 7rem;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  display: flex;
}
img {
  margin-top: 1rem;
}
.content {
  text-align: center;
  width: 30rem;
  height: fit-content;
  margin: 0;
  margin-top: 2rem;
  margin-left: 4rem;
  font-size: 2rem;
  font-weight: 900;
  display: flex;
}
button {
  margin-left: 2rem;
  margin-top: 2rem;
  width: 6rem;
  height: 2.5rem;
  margin-bottom: 1rem;
  padding-top: 0.15rem;
  padding-bottom: 0.15rem;
  font-size: 1.3rem;
  border-width: 0.01rem;
  border-style: solid;
  border-color: black;
  border-radius: 1rem;
}
button:hover {
  background-color: rgb(174, 213, 255);
}
a {
  text-decoration: none;
  color: black;
}
.bf{
  background-color: rgb(49, 149, 255);
}
 
</style>