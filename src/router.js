import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./pages/HomeView.vue";
import ContactView from "./pages/ContactView.vue";
import ProjectView from "./pages/ProjectView.vue";
import ParcoursView from "./pages/ParcoursView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/project", component: ProjectView },
  { path: "/contact", component: ContactView },
  { path: "/parcours", component: ParcoursView },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
