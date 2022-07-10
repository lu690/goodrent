import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/layout'

const Home = () => import('@/views/home')
const Search = () => import('@/views/search')
const News = () => import('@/views/news')
const My = () => import('@/views/my')
const Login = () => import('@/views/login')

const City = () => import('@/views/city')

const CityList = () => import('@/components/citylist')
const HouseDetail = () => import('@/components/citylist/HouseDetails.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: Home
      },
      {
        path: 'search',
        component: Search,
        children: [{
          path: '/citylist',
          component: CityList
        }]
      },
      {
        path: 'news',
        component: News
      },
      {
        path: 'my',
        component: My,
        name: 'my'
      }]
  }, {
    path: '/login',
    component: Login
  },
  {
    path: '/city',
    component: City
  },
  {
    path: '/housedetail/:id',
    component: HouseDetail,
    name: 'housedetail',
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
