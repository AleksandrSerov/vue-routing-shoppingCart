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
      component: LoginBox
    },
    {
      path: "/products",
      component: ProductList
    },
    {
      path: "/products/:id",
      component: ProductItem,
      props: true
    },
    {
      path: "/cart",
      component: CartList
    },
    {
      path: "/",
      redirect: "/products"
    },
    {
      path: "*",
      component: NotFound
    }
  ]
});

export default router;
