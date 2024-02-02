import { createApp } from "vue";
import { createHead } from "@vueuse/head";
import { router } from "@/router";
import { createPinia } from "pinia";

// 代替v-html
import VueDOMPurifyHTML from "vue-dompurify-html";

// 主入口
import App from "./App.vue";

// 全局CSS
import "./index.css";

// UnoCSS
// import "uno.css";
import "virtual:uno.css";

const app = createApp(App);
const head = createHead();
const pinia = createPinia();

app.use(head);
app.use(router);
app.use(pinia);
app.use(VueDOMPurifyHTML);
app.mount("#app");
