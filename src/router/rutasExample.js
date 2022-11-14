const router2 = [
      {
        path: '/cuarto',
        name: 'cuarto',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/Cuarto.vue')
      },
      {
        path: '/banio',
        name: 'baño',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/Banio.vue')
      },
      {
        path: '/cocina',
        name: 'cocina',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/Cocina.vue')
      }
    ]
  
  export default router2