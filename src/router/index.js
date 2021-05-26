import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '',
        name: '前台首頁',
        component: () => import('../views/Index.vue'),
      },
      {
        path: 'products',
        name: '產品列表',
        component: () => import('../views/Products.vue'),
      },
      {
        path: 'productInfo/:id',
        name: '產品介紹',
        component: () => import('../views/ProductInfo.vue'),
        props: (route) => ({ // route 值會是觸發這個路由時所帶入的
          id: route.params.id,
        }),
      },
      {
        path: 'carts',
        name: '購物車列表',
        component: () => import('../views/Carts.vue'),
      },
      {
        path: 'login',
        name: '登入',
        component: () => import('../views/Login.vue'),
      },
    ],
  },
  {
    path: '/admin',
    // name: '後台儀表板',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/admin/Index.vue'),
      },
      {
        path: 'products',
        component: () => import('../views/admin/Products.vue'),
      },
      {
        path: 'orders',
        component: () => import('../views/admin/Orders.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
