import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import FontAwesomeIcon from "./plugins/font-awesome";

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);

app.use(router).mount("#app");
