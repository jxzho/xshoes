<template>
  <div class="stroll">
    <HeaderNav :navOptions="{ title: 'STROLL' }"></HeaderNav>
    <FooterNav></FooterNav>
  </div>  
</template>

<script>
import HeaderNav from "common/HeaderNav";
import FooterNav from "common/FooterNav";

export default {
  name: "Stroll",
  data() {
    return {
    };
  },
  methods: {
  },
  components: {
    HeaderNav,
    FooterNav
  }
}
</script>

<style lang="less" scoped>
  .stroll {
    height: 100%;
    overflow: hidden;
    background: rgba(0, 0, 0, .02);
    position: relative;
  }
</style>

