import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login'
import Home from '../components/Home'
import Welcome from '../components/Welcome'
import Users from '@/components/user/Users'
import Rights from '../components/power/Rights'
import Roles from '../components/power/Roles'
import Cate from '@/components/goods/Cate'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      redirect:'/welcome',
      component:Home,
      children: [
        { path:'/welcome', component:Welcome },
        { path:'/users', component:Users },
        { path:'/rights', component:Rights },
        { path:'/roles', component:Roles },
        { path:'/categories', component:Cate }
      ]
    }
  ]
})

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // to将要访问的路径
  // from代表从哪个路径跳转而来
  // next是一个函数表示放行   next()放行       next('/login')强制跳转
  if (to.path === '/login') return next()
  // 湖区token
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})

export default router
