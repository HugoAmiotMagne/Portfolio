import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router.js";
import "./style.css";

const app = createApp(App);

const test = "coucou"
app.use(router);
app.mount("#app");
