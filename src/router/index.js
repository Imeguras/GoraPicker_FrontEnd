import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/components/LandingPage'
import Camera from '@/components/Camera'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    }, {
		path: '/Camera',
		name: 'Camera',
		component: Camera
	}
	
  ]
})
