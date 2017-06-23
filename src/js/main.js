import conf from "../../conf.json";
import "./testvue";
import "../style/css/main.css"

import Vue from 'vue';
import VueRouter from 'vue-router';
import App from 'components/app.vue';    // 路由挂载
import Routers from './router.js';       // 路由列表
import iView from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS

Vue.use(VueRouter);
Vue.use(iView);

// 路由配置
const RouterConfig = {
    routes: Routers
};
const router = new VueRouter(RouterConfig);

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});

function main() {
    console.log(conf.greetText);
    console.log(2);
    var ele = document.createElement("div");
    ele.textContent = conf.greetText;
    return ele;
}
document.body.appendChild(main());