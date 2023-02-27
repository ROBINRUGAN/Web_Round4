<template>
  <div>
    <input
      type="text"
      class="search"
      v-model="search"
      placeholder="输入关键词搜索"
    />
    <div
      class="list-item"
      v-for="project in projects"
      :key="project.randomUUID"
    >
      <li>
        <img :src="'http://'+project.pic_path" width="100px" height="100px" />
        <div class="content">
          {{ project.title }}
        </div>
        <button @click="detail(project)">查看详情</button>
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
    axios({
      method: "POST",
      url: `http://api.mewtopia.cn/api/v1/project/show/pass`,
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
          this.deleteCookies();
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
    deleteCookies() {
      del.deleteCookies();
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
      }).then((res) => {
        // console.log(res.data.data.item);
        console.log(res.data.data.item);
        this.projects = res.data.data.item;
      });
    },
  },
};
</script>

  <style scoped>
* {
  margin: 0;
  padding: 0;
}
.search {
  border-radius: 10rem;
  width: 30rem;
  height: 2.5rem;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  font-size: 2rem;
  padding: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-top: 3rem;
  margin-bottom: 2rem;
}
.listItem {
  width: auto;
  height: 50rem;
}
ul {
  width: auto;
  height: 50rem;
}
li {
  width: 50rem;
  height: 8rem;
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
  width: 60rem;
  height: fit-content;
  margin: 0;
  margin-top: 2rem;
  margin-left: 10rem;
  font-size: 2rem;
  font-weight: 900;
  display: flex;
}
button {
  text-align: center;
  margin-left: 9rem;
  width: 20rem;
  height: 2.5rem;
  margin-top: 2rem;
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