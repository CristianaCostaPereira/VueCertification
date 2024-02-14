import { createApp } from "vue";
import App from "./App.vue";
import "../style.css";
import { createRouter, createWebHistory } from "vue-router";


// import and setup Vue Router here
// 💡 HINT: You'll also need to import your page components
import HomePage from "@/pages/HomePage.vue";
import MovieDetailPage from "@/pages/MovieDetailPage.vue";

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/:id', name: 'MovieDetail', component: MovieDetailPage },
]

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

const app = createApp(App)
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router)
app.mount('#app')

// createApp(App).mount("#app");
