<template>
  <div class="Login">
    <HeaderNav :navOptions="navOptions"></HeaderNav>
  </div>
</template>

<script>
import HeaderNav from "common/HeaderNav";

export default {
  name: "Login",
  data() {
    return {
      navOptions: {
        title: "LOGIN"
      }
    }
  },
  components: {
    HeaderNav
  }
}
</script>

<style lang="less"></style>

