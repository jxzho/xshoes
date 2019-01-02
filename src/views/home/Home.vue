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
import { Toast } from 'vant';

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
    if (location.search) {
      Toast.success({ message: '支付成功', duration: 2000 });
      location.href = location.origin;
    }
  }
};

</script>

<style lang="less">
  .home {
    height: 100%;
  }
</style>

