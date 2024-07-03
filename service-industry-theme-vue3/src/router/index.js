import { createRouter, createWebHistory } from "vue-router";
import store from '../store';


import { loadAllScripts } from "../utils/loadAllScript";
import HomeView from "../views/HomeView.vue";
import NotFound from "../views/NotFound.vue";
import TestView from "../views/TestView.vue";
import TestServiceView from "../views/TestServiceView.vue";
import TestServices1 from "../components/serviceChild/TestServices1.vue";
import TestServices2 from "../components/serviceChild/TestServices2.vue";
import SolutionView from "../views/SolutionView.vue";



const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: '/solution/:param',
    name: 'Solution',
    component: SolutionView
  },
  {
    path: "/test",
    name: "Test",
    component: TestView,
  },
  {
    path: '/testService',
    name: 'TestServiceView',
    component: TestServiceView,
    children: [
      {
        path: 'testServices1',
        name: 'TestServices1',
        component: TestServices1,
      },
      {
        path: 'testServices2',
        name: 'TestServices2',
        component: TestServices2,
      }
    ]
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// 记录路由来源到 Vuex store
router.beforeEach((to, from, next) => {
  loadAllScripts();
  // console.log('To route:', to);
  // console.log('From route:', from);
  
  if (from.name) {
    // console.log('Storing route name:', from.name);
    store.commit('setRoutes', { from, to });
  } else {
    // console.log('Initial load or direct access');
  }
  
  next();
});

export default router;
