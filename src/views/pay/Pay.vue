<template>
  <div class="pay-page" ref="payWrapper">

  </div>
</template>

<script>
export default {
  name: "Pay",
  mounted() {
    const form = this.$route.params.form;
    this.$refs.payWrapper.innerHTML = form;
  }
}
</script>

<style lang="less" scoped>
  .pay-page {
    position: fixed;
    left: 0; right: 0; top: 0; bottom: 0;
    overflow: hidden;

    & /deep/ #alipaysubmit {
      width: 100%;
      height: 100%;
    }
  }
</style>


