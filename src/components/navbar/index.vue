<template>
  <div>
    <van-nav-bar>
      <template #title>
        <span>{{ title }}</span>
      </template>
      <template #left>
        <van-icon name="arrow-left" @click="$router.go(-1)" />
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  created () { },
  data () {
    return {}
  },
  methods: {},
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
</style>
