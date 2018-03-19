
module.exports = [{
    redirect: "wallet",
    path: "/"
}, {
    component: require("@/routes/contracts").default,
    path: "/contracts"
}, {
    component: require("@/routes/transation").default,
    path: "/transation"
}, {
    component: require("@/routes/wallet").default,
    path: "/wallet"
}];
