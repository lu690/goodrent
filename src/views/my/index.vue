<template>
  <div>
    <div class="My-title">
      <!-- 登录/未登录 不同部分 -->
      <div class="deng">
        <div class="My_info">
          <!-- 登录状态 -->
          <div
            class="login"
            v-if="$store.state.user && $store.state.user.token"
          >
            <!--已登录的背景 -->
            <img src="http://liufusong.top:8080/img/avatar.png" alt="" />
            <div class="userInfo">
              <van-image round src="https://img01.yzcdn.cn/vant/cat.jpeg" />
              <div class="My_title2">好客_2543</div>
              <van-button class="tuibtn" @click="logout">退出</van-button>
              <div class="emit">
                <span>编辑个人资料</span>
                <van-icon name="play" color="#999" />
              </div>
            </div>
          </div>
          <!-- 退出状态 -->
          <div class="notlogin" v-else>
            <!--未登录的背景 -->
            <img src="http://liufusong.top:8080/img/profile/bg.png" alt="" />
            <div class="userLogin">
              <van-image round src="https://img01.yzcdn.cn/vant/cat.jpeg" />
              <div class="My_title">游客</div>
              <van-button @click="goLogin">去登录</van-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 公共部分 -->
    <div class="am-grid">
      <van-grid :column-num="3">
        <van-grid-item icon="star-o" text="我的收藏" />
        <van-grid-item icon="wap-home-o" text="我的出租" />
        <van-grid-item icon="clock-o" text="看房记录" />
        <van-grid-item icon="credit-pay" text="成为房主" />
        <van-grid-item icon="user-o" text="个人资料" />
        <van-grid-item icon-size="20px" icon="service-o" text="联系我们" />
      </van-grid>
    </div>
    <div class="My_join">
      <img src="http://liufusong.top:8080/img/profile/join.png" alt="" />
    </div>
  </div>
</template>

<script>
// import Exitgo from '@/'
import { getUser } from '@/api/login'
// import { mapState } from 'vuex'
export default {
  name: 'MyP',
  async created () {
    if (this.$store.state.user && this.$store.state.user.token) {
      try {
        const res = await getUser()
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    }
  },
  data () {
    return {
      username: '',
      password: '',
      isLoginShow: false
    }
  },
  methods: {
    onSubmit (values) {
      // console.log('submit', values)
    },
    logout () {
      this.$dialog.confirm({
        title: '提示',
        message: '是否确认退出？'
      }).then(() => {
        this.$store.commit('setUser', {})
      })
    },
    goLogin () {
      this.$router.push('/login')
      this.window.localStorage()
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.My-title {
  img {
    width: 100%;
    min-height: 600px;
  }
  .deng {
    .My_info {
      .notlogin {
        .userLogin {
          position: absolute;
          top: 20%;
          left: 50%;
          transform: translateX(-50%);
          text-align: center;
          background-color: rgb(255, 255, 255);
          width: 85%;
          height: 330px;
          box-shadow: 0 0 10px 3px #ddd;
          .van-image {
            transform: translateY(-50%);
            width: 120px;
            height: 120px;
            border: 10px solid #f5f5f5;
          }
          .My_title {
            font-size: 26px;
            margin-top: -40px;
          }
          .van-button {
            width: 138px;
            height: 60px;
            font-size: 26px;
            padding: 0 20px;
            border-radius: 10px;
            margin-bottom: 85px;
          }
        }
      }
      // 登录状态
      .login {
        position: relative;
        .userInfo {
          position: absolute;
          top: 45%;
          left: 50%;
          transform: translateX(-50%);
          text-align: center;
          background-color: rgb(255, 255, 255);
          width: 85%;
          height: 430px;
          box-shadow: 0 0 10px 3px #ddd;
          .van-image {
            transform: translateY(-50%);
            width: 120px;
            height: 120px;
            border: 10px solid #f5f5f5;
          }
          .My_title2 {
            font-size: 24px;
            margin-top: -50px;
          }
          .tuibtn {
            height: 40px;
            font-size: 24px;
            padding: 4 30px;
            border-radius: 60px;
            margin-bottom: 85px;
          }
          .emit {
            margin-top: -40px;
            span {
              font-size: 24px;
              color: #999;
            }
            .van-icon-play {
              font-size: 24px;
            }
          }
        }
      }
    }
  }
}
.am-grid {
  padding: 20px 0;
  .van-grid-item__text {
    color: #333;
  }
}
/deep/[class*="van-hairline"]::after {
  border: unset;
}
.My_join {
  text-align: center;
  img {
    width: 690px;
    padding-bottom: 120px;
  }
}
</style>
