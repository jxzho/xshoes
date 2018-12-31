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
import api from "@/api";

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
  methods: {
    getShoes() {
      api.getShoes().then(res => {
        this.$store.commit('setShoes', res.data.data);
      });
    }
  },
  computed: {
    ...mapState(['user'])
  },
  mounted() {
    this.getShoes();
  }
};

</script>

<style lang="less">
  .home {
    height: 100%;
  }
</style>

