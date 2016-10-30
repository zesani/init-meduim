import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Write from './components/Write'
import Story from './components/Story'

Vue.use(VueRouter)

const routes = [
  { name: 'home', path: '/home', component: Home },
  { name: 'write', path: '/write', component: Write },
  { name: 'story', path: '/story/:id', component: Story }
]

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
