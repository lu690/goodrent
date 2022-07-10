<template>
  <div class="searchInfo">
    <div class="location">
      <span @click="cityShow">{{ currentcity }}</span>
      <i class="iconfont icon-xialasanjiao"></i>
      <span class="shuxian"></span>
    </div>

    <van-search v-model="value" placeholder="请输入小区或地址"> </van-search>
    <i class="iconfont icon-ditu"></i>
    <!-- <CityList></CityList> -->
  </div>
</template>

<script>
import { getItems } from '@/utils/storge'
// import CityList from '@/components/citylist'
export default {
  created () { },
  data () {
    return {
      value: '',
      currentcity: getItems('setCurrentCity')
    }
  },
  methods: {
    cityShow () {
      this.$router.push('/city')
    }
  },
  computed: {},
  watch: {
  },
  filters: {},
  components: {
    // CityList
  }
}
</script>

<style scoped lang='less'>
.searchInfo {
  position: relative;
  // height:0;
  .location {
    position: absolute;
    left: 60px;
    top: 50px;
    width: 100px;
    // height: 48px;
    // line-height: 48px;
    z-index: 2;
    span {
      margin-right: 5px;
      font-size: 28px;
    }
    .iconfont {
      font-size: 10px;
      color: #7f7f80;
    }
    .shuxian {
      font-size: 35px;
      padding-right: 18px;
      border-right: 1px solid #e5e5e5;
    }
  }
  /deep/.van-search {
    position: absolute;
    top: 0;
    left: 0;
    width: 620px;
    height: 68px;
    padding: 10px 10px 10px 16px;
    margin: 50px 0 0 40px;
    border-radius: 6px;
    z-index: 1 !important;
    .van-search__content {
      background-color: #fff;
      padding-left: 132px;
      .van-field__left-icon {
        color: #9c9fa1;
        margin-right: 0;
      }
    }
    input::-webkit-input-placeholder {
      padding-left: 8px;
      font-size: 26px;
      color: #9c9fa1;
    }
  }

  .icon-ditu {
    font-size: 50px;
    position: absolute;
    left: 680px;
    top: 60px;
    color: #fff;
    z-index: 2;
  }
}
</style>
