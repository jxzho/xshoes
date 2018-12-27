<template>
  <div class="home">
    <HomeHeader></HomeHeader>
    <HomeBody></HomeBody>
    <FooterNav></FooterNav>
  </div>
</template>

<script>
import axios from "axios";
import HomeHeader from "./components/HomeHeader";
import HomeBody from "./components/home_body/HomeBody";
import FooterNav from "common/FooterNav";
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
    FooterNav
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

