<template>
  <div>
    <NavBar @goMyDom="goMyDom" title="账号登录"></NavBar>
    <van-form @submit="onSubmit" ref="form">
      <van-field
        v-model.trim="username"
        name="username"
        placeholder="请输入账号"
        :rules="[
          { required: true },
          {
            pattern: /^[a-zA-Z0-9_-]{4,16}$/,
            message: '用户名格式5-8位的字母和数据',
          },
        ]"
      />
      <van-field
        v-model.trim="password"
        type="password"
        name="password"
        placeholder="请输入密码"
        :rules="[{ required: true }]"
      />
      <div style="margin: 16px">
        <van-button square block type="info" native-type="submit"
          >登录</van-button
        >
      </div>
    </van-form>
    <div class="zc">
      <a href="javascript:;">还没有账号，去注册~</a>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/navbar'
import { getAdmin } from '@/api/login'
export default {
  name: 'Login',
  created () { },
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async onSubmit (values) {
      console.log('submit', values)
      try {
        const res = await getAdmin(values)
        console.log(res)
        // 将用户信息传入后台暂存
        this.$store.commit('setUser', res.data.body)

        if (this.$store.state.user && this.$store.state.user.token) {
          this.$toast.fail('登录成功')
          setTimeout(() => {
            this.$router.push({ name: 'my' })
          }, 2000)
        } else {
          if (this.username.length < 7 || this.password.length < 6) {
            this.$toast.fail('账户或密码位数不对！')
          } else {
            this.$toast.fail('您的账户或密码异常！')
          }
        }
      } catch (error) {
        console.log(error)
      }
    },
    goMyDom () {
      this.$router.push('/my')
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {
    NavBar
  }
}
</script>

<style scoped lang='less'>
/deep/ .van-nav-bar__title {
  font-size: 36px !important;
}

.van-form {
  margin-top: 10px;
  .van-field {
    line-height: 150px;
    height: 150px;
    /deep/ input::-webkit-input-placeholder {
      font-size: 34px !important;
      line-height: 160px;
    }
  }
  .van-cell::after {
    border-bottom: 0.02667rem solid #c0c0c0;
  }
  /deep/ .van-button {
    height: 100px;
    margin-top: 50px !important;
  }
  .van-button--info {
    background-color: #21b97a;
  }
}
.zc {
  width: 100%;
  height: 50px;
  text-align: center;
  a {
    font-size: 24px;
    color: rgb(50, 50, 50);
  }
}
</style>
