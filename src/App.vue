<template>
  <div class="body">
    <Banner/>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
import Banner from "./components/Banner";
import Login from "./pages/Login";
import axios from 'axios'
export default {
  name: "App",
  components: { 
    Banner,
    Login
  },
  // methods:{
  //   getstudent(){
  //     axios.get('http://api.mewtopia.cn/projectListAll').then(
  //       response => {
  //         console.log('请求成功',response.data)
  //       },
  //     )
  //   }
  // },
};
</script>

<style>

</style>
