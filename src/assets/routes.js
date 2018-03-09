
module.exports = [{
    component: require("@/routes/vue-wallet").default,
    path: "/wallet"
}, {
    redirect: "wallet",
    path: "/"
}, {
    component: require("@/routes/vue-transation").default,
    path: "/transation"
}, {
    component: require("@/routes/vue-contracts").default,
    path: "/contracts"
}];
