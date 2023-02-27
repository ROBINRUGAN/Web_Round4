<template>
  <div>
    <div class="list-item">
      <li>
        <div class="content">
          {{ title }}
        </div>
      </li>
    </div>
    <div class="infomation">
      {{ info }}
    </div>
    <img :src="url" width="400px" />
    <h3>Tel: {{ tel }} &nbsp;&nbsp;&nbsp;&nbsp; 已筹款: {{ money }}</h3>
    <br />
    <div class="form">
      <input type="text" v-model="offermoney" placeholder="输入资助金额..." />

      <button @click="offer">出资</button>
    </div>
  </div>
</template>
  
<script>
import axios from 'axios';
export default {
  data() {
    return {
      title: "标题标题标题",
      info:
        "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容" +
        "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容" +
        "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容" +
        "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容" +
        "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容" +
        "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容" +
        "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容" +
        "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
      projects: [],
      url: "../assets/logo.png",
      tel: "",
      money: "",
      offermoney: "",
      pid: ""
    };
  },
  methods:{
    offer(){
      var formData = new FormData()
      formData.append("fund",this.offermoney);
      axios({
        method: "POST",
        url: `http://api.mewtopia.cn/api/v1/user/contribution/${this.pid}`,
        data: formData,
        headers: {
          Authorization: this.$cookies.get("token"),
        },
      }).then(
        (res) => {
          console.log(res.data);

          alert(res.data.msg);
          this.$router.go(-1)
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
    }
  },
  mounted() {
    console.log("Detail页面拿到了", this.$route.params);
    this.title = this.$route.params.title;
    this.info = this.$route.params.content;
    this.url = "http://" + this.$route.params.pic_path;
    this.tel = this.$route.params.telephone;
    this.money = this.$route.params.fund;
    this.pid = this.$route.params.pid;
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
h3 {
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  display: flex;
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
  width: fit-content;
  height: 8rem;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  display: flex;
}
img {
  margin-top: 1rem;
  margin-bottom: 2rem;
  margin-left: auto;
  margin-right: auto;
  display: flex;
}
input {
  border-radius: 10rem;
  height: fit-content;
  font-size: 1.5rem;
  padding: 0.5rem;
}
.content {
  text-align: center;
  width: fit-content;
  height: 5rem;
  margin: 0;
  margin-top: 2rem;
  font-size: 2.7rem;
  font-weight: 900;
  display: flex;
}
button {
  text-align: center;
  margin-left: 3rem;
  width: 10rem;
  height: 2.5rem;
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
.form {
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
  display: flex;
}
.infomation {
  word-break: break-all;
  margin-left: auto;
  margin-right: auto;
  padding: 2rem;
  font-size: 1.7rem;
  border-width: 0.1rem;
  border-style: solid;
  border-color: black;
  border-radius: 1rem;
  width: 50rem;
  height: fit-content;
  background-color: rgb(239, 239, 239);
}
</style>