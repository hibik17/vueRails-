import { createRouter, createWebHashHistory } from "vue-router";
import About from "./components/pages/About.vue";
import BooksIndex from "./components/pages/books/Index.vue";
import BooksShow from "./components/pages/books/Show.vue";
import UserIndex from "./components/pages/users/Index.vue";
import UserShow from "./components/pages/users/Show.vue";
// 1. Define route components.

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { name: "top", path: "/", component: About },
  { name: "books_index", path: "/books", component: BooksIndex },
  { name: "books_show", path: "/books/:id", component: BooksShow },
  { name: "users_index", path: "/users", component: UserIndex },
  { name: "users_show", path: "/users/:id", component: UserShow },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
export const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

// Make sure to _use_ the router instance to make the
// whole app router-aware.

// Now the app has started!
