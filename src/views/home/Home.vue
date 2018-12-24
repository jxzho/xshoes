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
import { mapState } from "vuex";

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
  computed: {
    ...mapState(['user'])
  },
  mounted() {
    // console.log(this.user);
  }
};

</script>

<style lang="less">
  .home {
    height: 100%;
  }
</style>

