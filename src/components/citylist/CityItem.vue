<template>
  <div
    class="content"
    @click="
      $router.push({ name: 'housedetail', params: { id: item.houseCode } })
    "
  >
    <div class="img"><img :src="id + item.houseImg" alt="" /></div>
    <div class="txt">
      <h3>{{ item.title }}</h3>
      <p>{{ item.desc }}</p>
      <span class="tips">{{ item.tags[0] }}</span>
      <div class="price">
        <span>{{ item.price }}</span
        >元/月
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  created () { },
  mounted () {
  },
  data () {
    return {
      id: 'http://liufusong.top:8080'

    }
  },
  methods: {},
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.content {
  height: 210px;
  display: flex;
  padding: 36px 32px 0;
  border-bottom: 1px solid #ebebeb;
  .img {
    img {
      width: 212px;
      height: 160px;
      margin-right: 24px;
    }
  }
  .txt {
    h3 {
      font-size: 30px;
      color: #394043;
      margin: 0;
    }
    p {
      font-size: 24px;
      color: #afb2b3;
      // line-height: 44px;
      padding-top: 2px;
      margin: 0;
    }
    .tips {
      font-size: 24px;
      color: #39becd;
      background: #e1f5f8;
      border-radius: 6px;
      padding: 8px 10px;
      margin-right: 10px;
      line-height: 24px;
    }
    .price {
      margin-top: 10px;
      font-size: 32px;
      color: #fa5741;
      line-height: 44px;
      span {
        font-weight: 700;
      }
    }
  }
}
</style>
