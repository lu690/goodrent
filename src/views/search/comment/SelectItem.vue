<template>
  <div class="chose">
    <van-dropdown-menu>
      <van-dropdown-item title="区域">
        <van-picker title="标题" :columns="columns" value-key="label" />
        <van-row>
          <van-col span="8">
            <van-button block class="btnq">取消</van-button>
          </van-col>
          <van-col span="16">
            <van-button block type="default">确定</van-button>
          </van-col>
        </van-row>
      </van-dropdown-item>
      <van-dropdown-item title="方式">
        <van-picker title="标题" :columns="columns1" />
      </van-dropdown-item>
      <van-dropdown-item title="租金">
        <van-picker title="标题" :columns="columns2" />
      </van-dropdown-item>
      <van-dropdown-item title="筛选" />
    </van-dropdown-menu>
  </div>
</template>

<script>
import { getItems } from '@/utils/storge'
import { getSubCity } from '@/api/cityInfo'
export default {
  created () {
    // console.log(11)
    // console.log(this.setCurrentCityId)
    console.log(this.getSubCity())
    // console.log(22)
  },
  data () {
    return {
      show: false,
      active: '',
      setCurrentCityId: getItems('setCurrentCityId'),
      columns: [
      ],
      columns1: [
      ],
      columns2: [
      ]
    }
  },
  methods: {
    async getSubCity () {
      try {
        const res = await getSubCity({ id: this.setCurrentCityId })
        console.log(res)
        // console.log(res.data.body.rentType)
        res.data.body.area.children[0].children = [{ label: '' }]
        res.data.body.subway.children[0].children = [{ label: '' }]
        this.columns = [res.data.body.area, res.data.body.subway]
        res.data.body.rentType[0] = [{ label: '' }]
        this.columns1 = [res.data.body.rentType]

        // console.log(area)
        // characteristic, floor, oriented, price, rentType, roomType, subway
        // area.children.forEach((item, index) => {
        //   })
      } catch (error) {
        console.log(error)
      }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.chose {
  // position: relative;
  position: sticky;
  top: -2px;
  z-index: 200;
  /deep/.van-tabs {
    width: 100%;
    // position: fixed;
    .van-tab {
      z-index: 2100;
      background-color: #fff;
    }
    .van-popup {
      // position: absolute;
      top: 92px;
      right: 0;
    }
  }
}
.btnq {
  color: #21b97a;
  background-color: #fff;
}
</style>
