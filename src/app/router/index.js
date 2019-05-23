import Vue from "vue";
import VueRouter from "vue-router";

import CartList from "../components/cart/CartList";
import ProductList from "../components/product/ProductList";
import NotFound from "../components/NotFound";
import ProductItem from "../components/product/ProductItem";
import LoginBox from "../components/login/LoginBox.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/login",
      component: LoginBox,
      beforeEnter: (_, __, next) => {
        const token = localStorage.getItem("token");
        if (token) {
          next("/products");
        } else next();
      }
    },
    {
      path: "/products",
      component: ProductList
    },
    {
      path: "/",
      redirect: "/products"
    },
    {
      path: "/products/:id",
      component: ProductItem,
      props: true,
      beforeEnter: (to, from, next) => {
        const id = to.params.id;
        if (![1, 2, 3, 4].includes(Number(id))) {
          next("/not-found");
        } else next();
      }
    },
    {
      path: "/cart",
      component: CartList
    },
    {
      path: "*",
      component: NotFound
    }
  ]
});

router.beforeEach((to, _, next) => {
  const token = localStorage.getItem("token");
  if (!token && to.path !== "/login") {
    next("/login");
  } else {
    next();
  }
});

export default router;
