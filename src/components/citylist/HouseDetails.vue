<template>
  <div class="main">
    <!-- <div v-for="item in houseDetail" :key="item.id"> -->
    <div>
      <van-nav-bar :title="houseDetail.title">
        <van-icon
          slot="left"
          name="arrow-left"
          @click="$router.back()"
        ></van-icon>
      </van-nav-bar>
      <van-swipe :autoplay="3000">
        <van-swipe-item
          v-for="(item1, index) in houseDetail.houseImg"
          :key="index"
        >
          <img :src="picId + item1" />
        </van-swipe-item>
      </van-swipe>
      <div class="sanceng">
        <div class="top">
          <p class="title">{{ houseDetail.community }}</p>
          <p class="tags">
            <van-tag
              type="warning"
              v-for="item in houseDetail.tags"
              :key="item.id"
              >{{ item }}
            </van-tag>
          </p>
        </div>
        <div class="center">
          <div class="aitem">
            <p class="price">{{ houseDetail.price }} <span>/月</span></p>
            <p class="txt">租金</p>
          </div>
          <div class="aitem">
            <p class="num">{{ houseDetail.roomType }}</p>
            <p class="txt">房型</p>
          </div>
          <div class="aitem">
            <p class="size">{{ houseDetail.size }}</p>
            <p class="txt">面积</p>
          </div>
        </div>
        <div class="bottom">
          <div class="left">
            <p>装修： <span>精装</span></p>
            <p>
              楼层： <span>{{ houseDetail.floor }}</span>
            </p>
          </div>
          <div class="right">
            <p>
              朝向:
              <span v-for="item in houseDetail.oriented" :key="item.id">{{
                item
              }}</span>
            </p>
            <p>类型: <span>普通住宅</span></p>
          </div>
        </div>
      </div>

      <div class="sanceng">
        <p class="houseName">小区：{{ houseDetail.community }}</p>
        <div id="container"></div>
        <p class="peitao">房屋配套</p>
        <van-grid :border="false">
          <van-grid-item
            v-for="(item, index) in houseDetail.supporting"
            :key="index"
            icon="point-gift-o"
            :text="item"
          />
        </van-grid>
      </div>
      <div class="sanceng">
        <p class="gaik">房源概况</p>
        <div class="master">
          <van-image
            round
            fit="cover"
            src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202008%2F03%2F20200803130051_lnxsh.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658892175&t=3b2a4c522c6886ce6653f8a8783d4963"
          />
          <van-cell title="王女士" label="描述信息">
            <span slot="label">
              <van-icon name="like"></van-icon> 已认证房主
            </span>
            <van-button plain type="primary" slot="extra">发消息</van-button>
          </van-cell>
        </div>
        <p class="decp">{{ houseDetail.description }}</p>
      </div>

      <div class="sanceng sanceng3">
        <p class="gaik">猜你喜欢</p>
        <!-- <homeitem></homeitem> -->
      </div>

      <van-grid :border="true" :column-num="3" class="fixbottom">
        <van-grid-item>
          <van-button plain>
            <van-icon name="111 " color></van-icon>
            收藏</van-button
          >
        </van-grid-item>
        <van-grid-item>
          <van-button plain>在线咨询</van-button>
        </van-grid-item>
        <van-grid-item>
          <van-button type="primary">电话预约</van-button>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script>
import { getHouseDetail } from '@/api/cityInfo'
export default {
  props: {
    id: {
      type: [Number, String],
      required: true
    }
  },
  created () {
    this.getHouseDetail()
    console.log(1111)
    console.log(this.id)
  },
  data () {
    return {
      houseDetail: [],
      picId: 'http://liufusong.top:8080'
    }
  },
  methods: {
    async getHouseDetail () {
      const { data } = await getHouseDetail(this.id)
      this.houseDetail = data.body
      // console.log(123456)
      // console.log(data.body)
    }
  },
  computed: {},
  watch: {
  },
  filters: {},
  components: {},
  updated () {
  }
}
</script>

<style scoped lang="less">
.decp {
  color: #999;
  margin-top: 20px;
  padding-bottom: 60px;
}
.master {
  display: flex;
  align-content: center;
  justify-content: start;
  /deep/ .van-image {
    width: 120px;
    height: 120px;
    margin-right: 10px;
    /deep/ img {
      width: 120px;
      height: 120px;
    }
    margin-top: 10px;
  }
}
/deep/ .van-cell {
  width: 560px;
}
.peitao,
.gaik {
  padding: 20px 0;
  font-weight: 500;
  border-bottom: 2px solid #eee;
}
/deep/ .van-grid-item {
  border: none;
}
/deep/ .van-tag {
  margin-right: 10px;
}
/deep/ .HouseDetail_mapArrow__26oyW {
  background: url(http://map.baidu.com/fwmap/upload/r/map/fwmap/static/house/images/label.png)
    no-repeat !important;
  position: absolute;
  width: 22px;
  height: 20px;
  top: 46px;
  left: 20px;
  overflow: hidden;
}
#container {
  width: 100%;
  height: 290px;
  padding: 0 !important;
  margin-top: 10px;
}
.main {
  background-color: #eee;
}
p {
  margin: 0;
  padding: 0;
  font-size: 30px;
}

.sanceng {
  margin-bottom: 10px;
  background-color: #fff;
  //   height: 266px;
  padding: 0 30px;
  .top {
    // height: 80px;
    border-bottom: 2px solid #aaa;
    .title {
      font-size: 32px;
      padding-top: 30px;
      margin-bottom: 20px;
    }
    padding-bottom: 20px;
  }
  .center {
    text-align: center;
    height: 140px;
    border-bottom: 2px solid #aaa;
    display: flex;
    justify-content: space-around;
    align-content: center;
    .aitem {
      margin-top: 20px;
      p {
        margin-bottom: 10px;
        font-size: 26px;
        color: #666;
        color: #eb553d;
        font-size: 36px;
      }
      .txt {
        font-size: 36px;
        color: #666;
      }
    }
  }
  .bottom {
    margin-top: 40px;
    height: 140px;
    display: flex;
    justify-content: start;
    p {
      margin-bottom: 10px;
      margin-right: 12px;
      font-size: 26px;
      color: #666;
      span {
        font-size: 28px;
        color: #333;
      }
    }
    .right {
      margin-left: 240px;
    }
  }
}
/deep/ .van-nav-bar {
  background-color: #4eb979;
  .van-nav-bar__title {
    color: #fff;
    font-size: 40px;
  }
  .van-icon {
    color: #fff;
    font-size: 20px;
  }
}
/deep/ .van-swipe {
  //   margin-top: 40px;
  width: 100%;
  img {
    width: 100%;
    // height: 252px;
  }
}
/deep/ .sanceng3 {
  padding-bottom: 100px;
  .van-cell {
    width: 720px;
  }
}
.fixbottom {
  z-index: 999;
  border-top: 2px solid #eee;
  width: 100%;
  position: fixed;
  bottom: 0;
  /deep/ .van-button--normal {
    font-size: 36px;
  }
  /deep/ .van-button {
    border: none;
    width: 100%;
  }
  /deep/ .van-grid {
    border-top: 4px solid #cecece;
  }
  .van-grid-item:nth-child(1) {
    border-right: 1px solid #e8e8e9;
  }
  /deep/ .van-grid-item__content {
    padding: 0;
    .van-button--default {
      color: #999;
    }
  }
}
.houseName {
  padding: 23px 0;
}
</style>
