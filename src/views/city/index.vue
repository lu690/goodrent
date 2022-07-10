<template>
  <div>
    <NavBar :title="title"></NavBar>
    <van-index-bar :index-list="firstLetterIndex">
      <van-index-anchor index="当前城市" />
      <van-cell :title="currentCity" @click="choseCity" />

      <van-index-anchor index="热门城市" />
      <van-cell
        :title="item.label"
        v-for="(item, index) in hotCityList"
        :key="index"
        @click="choseCity(item)"
      />

      <div v-for="(obj, index) in cityLists" :key="index">
        <van-index-anchor :index="index" />
        <div v-for="(item, index) in obj" :key="index">
          <van-cell :title="item.label" @click="choseCity(item)">
            <template> </template>
          </van-cell>
        </div>
      </div>
    </van-index-bar>

    <!-- <CityList :singleCity="singleCity"></CityList> -->
    <!-- <CityList></CityList> -->
  </div>
</template>

<script>
// import CityList from '@/components/citylist'
import orderBy from 'lodash/orderBy'
import { setItems } from '@/utils/storge'
import { getHotCity, getCityInfo, getCityHouses } from '@/api/cityInfo'
import NavBar from '@/components/navbar'

export default {
  created () {
    this.getHotCity()
    this.getCityInfo()
    // this.getCityHouses()
  },
  data () {
    return {
      title: '城市列表',
      hotCityList: [],
      cityLists: [],
      firstLetterIndex: [],
      currentCity: ''
      // singleCity: []
    }
  },
  methods: {
    async getHotCity () {
      try {
        const res = await getHotCity()
        // console.log(res.data.body)
        this.hotCityList = res.data.body
      } catch (error) {
        console.log(error)
      }
    },
    async getCityInfo () {
      const { data } = await getCityInfo({ level: 1 })
      console.log(data.body)
      const cityLists = {}
      const firstLetterIndex = []
      data.body = orderBy(data.body, ['short'])
      // console.log(data.body)
      data.body.forEach((item, index) => {
        const firstLetter = item.short.slice(0, 1).toLocaleUpperCase()
        firstLetterIndex.push('#', '热', firstLetter)
        // console.log('   ' + firstLetter)
        // console.log(item)
        // console.log([item])
        if (cityLists[firstLetter]) {
          cityLists[firstLetter].push(item)
        } else {
          cityLists[firstLetter] = [item]
        }
      })
      this.firstLetterIndex = [...new Set(firstLetterIndex)]
      // console.log(this.firstLetterIndex)
      this.cityLists = cityLists
    },

    async choseCity (value) {
      try {
        // console.log(value)
        this.currentCity = value.label
        // 本地存储点击的城市名
        setItems('setCurrentCity', this.currentCity)
        // 本地存储的城市ID,拼接用
        setItems('setCurrentCityId', value.value)
        const { data } = await getCityHouses({ id: value.value })
        // console.log(data)
        // this.singleCity = data
        if (data.length === 0) {
          this.$toast('该城市暂无房源')
        } else {
          this.$router.push('/citylist')
        }
      } catch (error) {
        console.log(error)
      }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {
    NavBar
    // CityList
  }
}
</script>

<style scoped lang='less'>
/deep/.van-index-bar {
  .van-index-anchor {
    color: #999;
  }
  .van-cell {
    padding: 0 32px;
    .van-cell__title {
      line-height: 100px;
    }
  }
  .van-index-bar__sidebar {
    padding: 0 0.21333rem 0 0.42667rem;
    .van-index-bar__index {
      padding: unset;
      margin: 12px 0;
    }
    .van-index-bar__index--active {
      color: #fff;
      background-color: #21b97a;
      border-radius: 100%;
      font-size: 24px;
      width: 30px;
      height: 30px;
      line-height: 30px;
    }
  }
}
</style>
