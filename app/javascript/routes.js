import { createRouter, createWebHistory } from "vue-router";
import About from "./components/pages/About.vue";
import Index from "./components/pages/Index.vue";

// 1. Define route components.

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: "/", component: Index },
  { path: "/about", component: About },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
export const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

// Make sure to _use_ the router instance to make the
// whole app router-aware.

// Now the app has started!
