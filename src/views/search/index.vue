<template>
  <div>
    <div class="header">
      <NavBar :title="title" class="navbar"></NavBar>
      <Search></Search>
    </div>

    <SelectItem></SelectItem>

    <CityList></CityList>
  </div>
</template>

<script>
import SelectItem from './comment/SelectItem.vue'
import CityList from '@/components/citylist'
import Search from '@/components/search'
import NavBar from '@/components/navbar'

export default {
  name: 'SearchP',
  created () {
  },
  mounted () {
  },
  data () {
    return {
      title: '',
      houses: []
    }
  },
  methods: {
  },
  computed: {},
  watch: {
  },
  filters: {},
  components: {
    NavBar,
    Search,
    CityList,
    SelectItem
  }
}
</script>

<style scoped lang='less'>
.header {
  position: relative;

  .searchInfo {
    position: absolute;
    top: -38px;
    left: 60px;
    /deep/.van-search {
      width: 400px;
    }
    /deep/.van-cell {
      width: 400px;
    }
    /deep/ .van-field__control {
      width: 300px;
    }
    /deep/ .icon-ditu {
      left: 610px;
    }
  }
}
/deep/.van-tabs__nav {
  height: 80px;
  border-bottom: 1px solid #ebebeb;
  .van-tab {
    color: #333;
    font-size: 34px;
  }
}
</style>
