import { createRouter, createWebHistory } from "vue-router"
 
import dashboard from '../page/master/dashboard'

import detail from '../page/userdetail'
import accountCreation from '../page/accountCreation'
import apiData from '../page/apidata'

  const routes = [
    {
      name: 'Dashboard',
      path: '/',
      component: dashboard,
      children: [
        {
          path: '/userdetail',
          component: detail 
        },
        {
            path: '/home',
            component: detail
        },
        {
            path: '/accountCreation',
            component: accountCreation
        },
        {
            path: '/apiUserData',
            component: apiData
        },
        {
            path: '/setting',
            component: detail
        }
      ]
    },
       
  ];
const router = Router();
export default router;
function Router() {
    const router = new createRouter({
        history: createWebHistory(),
        routes,
    });
    return router;
}
  