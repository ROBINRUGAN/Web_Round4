<template>
  <div>
    <div
      class="admin-list-item"
      v-for="project in projects"
      :key="project.randomUUID"
    >
      <li>
        <img :src="'http://'+project.pic_path" width="100px" height="100px" />
        <div class="content">
          {{ project.title }}
        </div>
        <button @click="detail(project)">详情</button>
        <button @click="pass(project.pid)">通过</button>
        <button @click="remove(project.pid)">删除</button>
      </li>
    </div>
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
    };
  },
  mounted() {
    var formData = new FormData();
    formData.append("page_num", this.page);
    formData.append("page_size", "5");
    // axios.post('http://10.134.35.131:9999/api/v1/project/show/pass',formData).then(
    //   (res)=>{
    //     console.log("success",res.data);
    //   }
    // )
    axios({
      method: "POST",
      url: `http://api.mewtopia.cn/api/v1/project/show/fail`,
      data: formData,
      headers: {
        Authorization: this.$cookies.get("token"),
      },
    }).then(
      (res) => {
        // console.log(res.data.data.item);
        this.projects = res.data.data.item;
        console.log(this.projects);
      },
      (error) => {
        console.log(error.response.data.msg);
        if (error.response.data.msg == "token解析失败") {
          alert("登录已过期，请重新登录！");
          del.deleteCookies();
        }
        if (error.response.data.msg == "token获取失败")
          alert("你还没有登录！！！");
        this.$router.push({
          path: "/login",
        });
      }
    );
  },
  methods: {
    detail(project) {
      console.log("我拿到了详情数据", project);
      this.$router.push({
        name: "detail",
        params: project,
      });
    },
    fail(pid) {
      var formData = new FormData();
      formData.append("ispass", "fail");
      axios({
        method: "POST",
        url: `http://api.mewtopia.cn/api/v1/project/audit/${pid}`,
        data: formData,
        headers: {
          Authorization: this.$cookies.get("token"),
        },
      }).then(
        (res) => {
          console.log(res.data);

          alert(res.data.msg);
          this.$router.go(0);
        },
        (error) => {
          console.log(error.response.data.msg);
          if (error.response.data.msg == "token解析失败") {
            alert("登录已过期，请重新登录！");
            del.deleteCookies();
          }
          if (error.response.data.msg == "token获取失败")
            alert("你还没有登录！！！");
          this.$router.push({
            path: "/login",
          });
        }
      );
    },
    remove(pid) {
      axios({
        method: "DELETE",
        url: `http://api.mewtopia.cn/api/v1/project/delete/${pid}`,
        headers: {
          Authorization: this.$cookies.get("token"),
        },
      }).then(
        (res) => {
          console.log(res.data);

          alert(res.data.msg);
          this.$router.go(0);
        },
        (error) => {
          console.log(error.response.data.msg);
          if (error.response.data.msg == "token解析失败") {
            alert("登录已过期，请重新登录！");
            del.deleteCookies();
          }
          if (error.response.data.msg == "token获取失败")
            alert("你还没有登录！！！");
          this.$router.push({
            path: "/login",
          });
        }
      );
    },
    pass(pid) {
      var formData = new FormData();
      formData.append("ispass", "pass");
      axios({
        method: "POST",
        url: `http://api.mewtopia.cn/api/v1/project/audit/${pid}`,
        data: formData,
        headers: {
          Authorization: this.$cookies.get("token"),
        },
      }).then(
        (res) => {
          console.log(res.data);

          alert(res.data.msg);
          this.$router.go(0);
        },
        (error) => {
          console.log(error.response.data.msg);
          if (error.response.data.msg == "token解析失败") {
            alert("登录已过期，请重新登录！");
            del.deleteCookies();
          }
          if (error.response.data.msg == "token获取失败")
            alert("你还没有登录！！！");
          this.$router.push({
            path: "/login",
          });
        }
      );
    },
  },
  watch: {
    search(val) {
      var formData = new FormData();
      formData.append("info", val);
      axios({
        method: "POST",
        url: `http://api.mewtopia.cn/api/v1/project/search`,
        data: formData,
        headers: {
          Authorization: this.$cookies.get("token"),
        },
      }).then(
        (res) => {
          // console.log(res.data.data.item);
          console.log(res.data.data.item);
          this.projects = res.data.data.item;
        },
        (error) => {
          console.log(error.response.data.msg);
          if (error.response.data.msg == "token解析失败") {
            alert("登录已过期，请重新登录！");
            del.deleteCookies();
          }
          if (error.response.data.msg == "token获取失败")
            alert("你还没有登录！！！");
          this.$router.push({
            path: "/login",
          });
        }
      );
    },
  },
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
  background-color: rgb(142, 196, 254);
}
a {
  text-decoration: none;
  color: black;
}
</style>