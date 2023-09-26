import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import Home from "./components/Home.vue";
import "./style.css";

const routes = [
  { path: "/", component: Home },
  { path: '/getting-started', component: () => import('./components/Tutorial/GettingStarted.vue') },
  { path: '/declarative-rendering', component: () => import('./components/Tutorial/DeclarativeRendering.vue') },
  { path: '/attribute-binding', component: () => import('./components/Tutorial/AttributeBinding.vue') },
  { path: '/event-listeners', component: () => import('./components/Tutorial/EventListeners.vue') },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);

app.use(router);
app.mount("#app");
