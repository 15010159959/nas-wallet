
module.exports = [{
    redirect: "wallet",
    path: "/"
}, {
    component: require("@/routes/vue-contracts").default,
    path: "/contracts"
}, {
    component: require("@/routes/vue-transation").default,
    path: "/transation"
}, {
    component: require("@/routes/vue-wallet").default,
    path: "/wallet"
}];
