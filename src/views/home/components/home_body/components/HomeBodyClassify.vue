<template>
  <div class="homeBD-classify clearfix">
    <div class="content" v-for="(item, index) of classify" :key="index">
      <div class="tit">
        <h2>{{item.title}}</h2>
        <span>{{item.desc}}</span>
      </div>
      <div class="pic">
        <img :src="item.pic">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeBodyClassify",
  data() {
    return {
      classify: [
        {
          title: "篮球",
          desc: "纯白系列秒杀",
          pic: "http://shihuo.hupucdn.com/def/20181105/2355ddafee2bdc0963e346192576c3631541383761.jpg?imageView2/0/w/160/h/160/interlace/1"
        },
        {
          title: "跑步",
          desc: "女王节秒杀",
          pic: "http://shihuo.hupucdn.com/def/20180801/a580ec1affbbf4a344974bc92969c7671533133549.jpg?imageView2/0/w/160/h/160/interlace/1"
        },
        {
          title: "足球",
          desc: "其实是在吹总裁",
          pic: "http://shihuo.hupucdn.com/def/20170919/3be93b46f0580a025e26ecc4a444e4b81505807923.jpg?imageView2/0/w/160/h/160/interlace/1"
        },
        {
          title: "冬季",
          desc: "防寒扮酷一流",
          pic: "http://shihuo.hupucdn.com/appHome/201807/1811/1d039f64648d5e33025c747ec6420060.jpg?imageView2/2/w/120/h/120/interlace/1"
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.homeBD-classify {
  margin-top: @secOffset;

  .content {
    width: 49.6%;
    height: .63rem;
    float: left;
    background: #fff;
    margin-bottom: 2px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 .2rem;
    
    .tit {
      display: flex;
      flex-direction: column;
      h2 {
        color: #000;
        font-size: .16rem;
        line-height: 1;
        font-weight: 600;
        margin-bottom: 5px;
      }
      span {
        font-size: .12rem;
      }
    }

    .pic {
      width: .52rem;
      height: .52rem;
      img {
        width: 100%;
      }
    }

    &:nth-of-type(odd) {
      margin-right: 3px;
    }
  }

}
</style>

