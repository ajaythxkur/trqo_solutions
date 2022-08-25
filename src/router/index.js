import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
  {
    path: '/DynamicWebsite',
    name: 'DynamicWebsite',
    component: () =>
        import ( /* webpackChunkName: "DynamicWebsite" */ '../views/DynamicWebsite.vue')
},
// {
//   path: '/test',
//   name: 'test',
//   component: () =>
//       import ( /* webpackChunkName: "test" */ '../sections/SampleWebsite.vue')
// },
{
  path: '/Exchange',
  name: 'Exchange',
  component: () =>
      import ( /* webpackChunkName: "Exchange" */ '../views/ExchangeView')
},
{
  path: '/CRMSoftware',
  name: 'crm',
  component: () => import( '../views/CRMSoftware.vue')
},
{
  path: '/WhitePaper',
  name: 'WhitePaper',
  component: () => import( '../views/Whitepaper.vue')
}  ,

{
  path: '/contactus',
  name: 'ContactusView',
  component: () =>
      import ('../views/ContactusView.vue')
},
{
  path: '/ecommerce',
  name: 'EcommerceView',
  component: () =>
      import ( /* webpackChunkName: "Ecommerce" */ '../views/EcommerceView.vue')
},
{
  path: '/mobileapp',
  name: 'MobileappView',
  component: () =>
      import ( /* webpackChunkName: "MobileApp" */ '../views/MobileappView.vue')
},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
