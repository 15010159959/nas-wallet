
var Vue = require("vue").default,
    VueRouter = require("vue-router").default;

Vue.config.productionTip = false;
Vue.use(VueRouter);

new Vue({
    components: {
        "vue-app": require("@/components/vue-app").default
    },
    el: "div",
    router: new VueRouter({ routes: require("@/assets/routes") }),
    template: "<vue-app></vue-app>"
});
