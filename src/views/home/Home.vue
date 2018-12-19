<template>
  <div class="home">
    <HomeHeader></HomeHeader>
    <HomeBody></HomeBody>
    <HomeFooter></HomeFooter>
  </div>
</template>

<script>
import axios from "axios";
import HomeHeader from "./components/HomeHeader";
import HomeFooter from "./components/HomeFooter";
import HomeBody from "./components/home_body/HomeBody";

axios.defaults.baseURL = "http://phalapix.cc:8000";

export default {
  name: "Home",
  data() {
    return {
    }
  },
  components: {
    HomeHeader,
    HomeBody,
    HomeFooter
  },
  mounted() {
    // 访问PHP的接口
    /* axios.get("/?s=User.Login&username=zjx&password=123456")
      .then(data => {
        console.log(data);
      }); */
  }
};

</script>

<style lang="less">
  .home {
    height: 100%;
  }
</style>

