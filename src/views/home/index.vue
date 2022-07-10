<template>
  <div>
    <Search></Search>
    <div class="imgSearch">
      <!-- 轮播图 -->
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <!-- <img v-lazy="image" /> -->
          <img :src="ip + image.imgSrc" alt="" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="fourIcon">
      <van-row type="flex" justify="space-between">
        <van-col span="6" @click="$router.push('/search')">
          <img src="@/assets/imgs/整租.png" alt="" style="width: 1.6rem" />
          <p>租房</p>
        </van-col>
        <van-col span="6" @click="$router.push('/search')">
          <img src="@/assets/imgs/合租.png" alt="" style="width: 1.6rem" />
          <p>合租</p>
        </van-col>
        <van-col span="6">
          <img src="@/assets/imgs/地图找房.png" alt="" style="width: 1.6rem" />
          <p>地图找房</p>
        </van-col>
        <van-col span="6">
          <img src="@/assets/imgs/去出租.png" alt="" style="width: 1.6rem" />
          <p>去出租</p>
        </van-col>
      </van-row>
    </div>
    <div class="zufang">
      <div class="group-title">
        <h3>租房小组 <span>更多</span></h3>
      </div>
      <van-grid direction="horizontal" clickable :column-num="2">
        <!-- <van-grid-item icon="home-o" text="路由跳转" to="/" /> -->
        <van-grid-item
          text="路由跳转11"
          to="/"
          v-for="item in groups"
          :key="item.id"
        >
          <img :src="ip + item.imgSrc" alt="" />
          <div class="right">
            <p>{{ item.title }}</p>
            <p>{{ item.desc }}</p>
          </div>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script>
import Search from '@/components/search'
import Vue from 'vue'
import { Lazyload } from 'vant'
import { getImg, getGroup } from '@/api/home'

Vue.use(Lazyload)

export default {
  created () {
    this.getImgs()
    this.getGroups()
  },
  data () {
    return {
      // areaList
      // images: [
      //   'http://liufusong.top:8080/img/swiper/1.png',
      //   'http://liufusong.top:8080/img/swiper/2.png',
      //   'http://liufusong.top:8080/img/swiper/3.png'
      // ],
      value: '',
      images: [],
      ip: 'http://liufusong.top:8080',
      groups: []
    }
  },
  methods: {
    async getImgs () {
      try {
        const res = await getImg()
        console.log(res.data.body)
        this.images = res.data.body
        console.log(this.images)
      } catch (error) {
        console.log(error)
      }
    },
    async getGroups () {
      try {
        const res = await getGroup()
        console.log(res.data.body)
        this.groups = res.data.body
      } catch (error) {
        console.log(error)
      }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {
    Search
  }
}
</script>

<style scoped lang='less'>
.van-swipe-item {
  img {
    width: 100%;
    height: 424px;
  }
}
// .imgSearch {
// position: relative;
// /deep/.van-search {
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 620px;
//   height: 68px;
//   padding: 10px 10px 10px 16px;
//   margin: 50px 0 0 40px;
//   border-radius: 6px;
//   z-index: 1 !important;
//   .van-search__content {
//     background-color: #fff;
//     padding-left: 132px;
//     .van-field__left-icon {
//       color: #9c9fa1;
//       margin-right: 0;
//     }
//   }
//   input::-webkit-input-placeholder {
//     padding-left: 8px;
//     font-size: 26px;
//     color: #9c9fa1;
//   }
// }
// .location {
//   position: absolute;
//   left: 60px;
//   top: 55px;
//   // height: 48px;
//   line-height: 48px;
//   z-index: 2;
//   span {
//     margin-right: 5px;
//     font-size: 28px;
//   }
//   .iconfont {
//     font-size: 10px;
//     color: #7f7f80;
//   }
//   .shuxian {
//     font-size: 35px;
//     padding-right: 18px;
//     border-right: 1px solid #e5e5e5;
//   }
// }
// .icon-ditu {
//   font-size: 50px;
//   position: absolute;
//   right: 20px;
//   top: 60px;
//   color: #fff;
//   z-index: 2;
// }
// }
.fourIcon {
  .van-row {
    font-size: 28px;
    font-weight: 400;
    color: #333;
    text-align: center;
    padding-top: 20px;
  }
}
/deep/.zufang {
  padding: 10px 20px;
  background: #f6f5f6;
  .group-title {
    h3 {
      margin: 30px 0px 30px 20px;
      font-size: 30px;
      color: #333;
      position: relative;
      span {
        position: absolute;
        top: 0;
        right: 0;
        font-size: 28px;
        font-family: "Microsoft YaHei";
        color: #787d82;
      }
    }
  }
  .van-grid {
    .van-grid-item {
      .van-grid-item__content {
        border-radius: 10px;
        justify-content: left;
        // padding: 0;
        img {
          width: 100px;
          height: 100px;
          margin-right: 20px;
        }
        p {
          font-size: 28px;
          color: #333;
          width: 140px;
          margin: 0;
        }
      }
    }
  }
}
</style>
