import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Home from './views/Home.vue'
import SysBasic from '/src/views/sys/SysBasic.vue'
Vue.use(Router)



export default new Router({
	//mode:'history',
    routes: [
		{
		    path: '/',
		    name: 'Login',
		    component: Login,
		    hidden: true
		},
        {
            path: '/login',
            name: 'Login',
            component: Login,
            hidden: true
        },
		/* {
		    path: '/sys/SysBasic',
		    name: 'SysBasic',
		    component: SysBasic,
		    hidden: true
		}, */
		 {
		     path: '/home',
		     name: 'Home',
		     component: Home,
		     hidden: true
		     
		      
		 }, {
            path: '*',
            redirect: '/home'
        }
		/* {
            path: '/home',
            name: 'Home',
            component: Home,
            hidden: true,
            meta: {
                roles: ['admin', 'user']
            }
             
        }, {
            path: '*',
            redirect: '/home'
        } */
    ]
})