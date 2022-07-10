<template>
  <div class="container">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <CityItem
          v-for="item in currentCityInfo"
          :key="item.id"
          :item="item"
        ></CityItem>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import CityItem from '@/components/citylist/CityItem.vue'
import { getItems } from '@/utils/storge'
import { getCityHouses } from '@/api/cityInfo'
export default {
  // props: {
  //   singleCity: {
  //     type: [Array, Object],
  //     required: true
  //   }
  // },
  created () { },
  mounted () {
    this.getcurrentCityInfo()
    // console.log(this.setCurrentCityId)
  },
  data () {
    return {
      currentCityInfo: [],
      setCurrentCityId: getItems('setCurrentCityId'),
      loading: false,
      finished: false,
      refreshing: false
      // id: 'http://liufusong.top:8080'
    }
  },
  methods: {
    async getcurrentCityInfo () {
      setTimeout(() => {
        if (this.refreshing) {
          this.currentCityInfo = []
          this.refreshing = false
          this.getCityHouses()
        }
      }, 500)
      try {
        const res = await getCityHouses({ cityId: this.setCurrentCityId })
        // console.log('我要的')
        if (res.data.body.count === null) {
          this.finished = true
        }
        this.currentCityInfo.push(...res.data.body.list)
        this.loading = false
        // console.log(this.currentCityInfo)
      } catch (error) {
        console.log(error)
      }
    },
    onLoad () {
      this.getcurrentCityInfo()
    },
    onRefresh () {
      this.finished = false
      this.loading = true
      this.getcurrentCityInfo()
    },

    goTo () {
      // this.$router.push('/housedetails')
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {
    CityItem
  }
}
</script>

<style scoped lang='less'>
.container {
  padding-bottom: 100px;
}
</style>
