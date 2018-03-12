//
// https://github.com/ethereum/mist
// https://github.com/ethereum/meteor-dapp-wallet
//
// https://electronjs.org/docs/api/menu#render-process
// https://github.com/sindresorhus/electron-context-menu

var Vue = require("vue").default,
    VueRouter = require("vue-router").default;

Vue.config.productionTip = false;
Vue.use(VueRouter);

require("./index.css");

new Vue({
    components: {
        "vue-app": require("@/components/vue-app").default
    },
    el: "div",
    router: new VueRouter({ routes: require("@/assets/routes") }),
    template: "<vue-app></vue-app>"
});
