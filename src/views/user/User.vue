<template>
  <div class="user">
    <HeaderNav :navOptions="navOptions"></HeaderNav>
    <UserHeader></UserHeader>
    <UserItem v-if="false"></UserItem>
  </div>
</template>

<script>
import HeaderNav from "common/HeaderNav";
import UserHeader from "./components/UserHeader";
import UserItem from "./components/UserItem";

export default {
  name: "User",
  data() {
    return {
      navOptions: {
        title: "USER"
      }
    }
  },
  components: {
    UserHeader,
    UserItem,
    HeaderNav
  }
}
</script>

<style lang="less">
  .user {
    height: 100%;
    overflow: hidden;
    background: rgba(0, 0, 0, .02);
  }
</style>

