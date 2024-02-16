// import and setup Vue Router here
// HINT: You'll also need to import your page components
import { createApp } from "vue";
import App from "./App.vue";
import "../style.css";
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";

const routes = [
  { path: '/', name: 'home', component: HomePage },
  {
    path: '/:id',
    name: 'movie-detail',
    component: () => import("./pages/MovieDetailPage.vue"),
    props: (route) => ({ id: Number(route.params.id) })
  },
]

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

app.use(router)

app.mount("#app");