<template>
  <div
    class="home"
    style="
      overflow: auto;
      padding: 0;
      display: flex;
      margin-left: auto;
      margin-right: auto;
    "
  >
    <div class="image">
      <div class="launch">
        <router-link to="/add">点击登记筹款求助</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "../components/Banner.vue";
export default {
  components: {
    Banner,
  },
};
</script>
<style scoped>
button:hover {
  background-color: rgb(142, 196, 254);
}

.image {
  display: flex;
  margin-left: -70rem;
  width: 200rem;
  height: 51.3rem;
  background-image: url("https://static1.shuidichou.com/website/img/ecb88fb.png");
}
.launch {
  position: relative;
  display: flex;
  margin-left: 75rem;
  margin-top: 16rem;
  padding-top: 0.7rem;
  padding-bottom: 1rem;
  padding-left: 5rem;
  padding-right: 5rem;
  width: 32rem;
  height: 5rem;
  font-weight: 1rem;
  font-size: 4rem;
  color: rgb(255, 255, 255);
  background-color: rgba(152, 152, 152, 0.758);
  border-radius: 10rem;
  opacity: 60%;
}
.launch:hover {
  opacity: 100%;
}
a {
  
  text-decoration: none;
  color: rgb(255, 255, 255);
}
</style>