<template>
  <div class="add" style="text-align: center">
    <br /><br /><br /><br />
    <h1>上传项目</h1>
    <span>
      标题：
      <input type="text" v-model="title" />
    </span>
    <br />
    <span class="brief">
      简介：
      <textarea v-model="info"></textarea>
    </span>
    <br />
    <span>
      电话：
      <input type="text" class="tel" v-model="tel" />
    </span>
    <br />
    <input type="file" @change="Upload" />
    <br />
    <button @click="submit">{{ buttonName }}</button>
  </div>
</template>

<script>
import axios from "axios";

import del from "../assets/deleteCookies";
export default {
  data() {
    return {
      title: "",
      info: "",
      tel: "",
      file: "",
      buttonName: "提交",
    };
  },
  methods: {
    Upload(event) {
      console.log(event.target.files[0]);
      this.file = event.target.files[0];
    },
    submit() {
      var formData = new FormData();
      formData.append("title", this.title);
      formData.append("content", this.info);
      formData.append("telephone", this.tel);
      formData.append("file", this.file);
      if (this.title && this.tel && this.info && this.file)
        this.buttonName = "上传中";
      axios({
        method: "POST",
        url: `http://api.mewtopia.cn/api/v1/project/upload`,
        data: formData,
        headers: {
          Authorization: this.$cookies.get("token"),
        },
      }).then(
        (res) => {
          console.log(res.data);

          alert(res.data.msg);
          this.$router.push({
            path: "/home",
          });
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
  beforeCreate() {
    if (this.$cookies.get("username") == null) {
      alert("你还没有登录！！！");
      this.$router.push({
        path: "/login",
      });
    }
  },
};
</script>
<style scoped>
.add {
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
.brief {
  margin: 0;
  width: 1rem;
}
.tel {
  margin-top: 3rem;
}
textarea {
  margin: 0;
  display: inline;
  width: 16rem;
  height: 5rem;
  font-size: 1.3rem;
  padding: 0.5rem;
  margin-bottom: -2.5rem;
  border-radius: 1rem;
  border-width: 0.01rem;
  font-family: "微软雅黑";
}
span {
  font-size: 1.3rem;
}
button {
  margin: 0.2rem;
  padding-left: 2rem;
  padding-right: 2rem;
  font-size: 1.5rem;
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