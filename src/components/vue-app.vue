<style>
    .vue-app .body {
        display: flex;
    }

    .vue-app .body>.right {
        flex: 1;
        min-width: 0;
    }

    .vue-app .body>.right nav {
        background-color: grey;
        display: flex;
        line-height: 40px;
        margin-top: 12px;
    }

    .vue-app .body>.right nav a {
        color: white;
        flex: 1;
        margin: 0 10px;
        text-align: center;
    }
</style>
<template>
    <div class=vue-app>
        <vue-header></vue-header>
        <div class=body>
            <vue-left></vue-left>
            <div class=right>
                <nav>
                    <router-link to=wallet>wallet</router-link>
                    <router-link to=transation>transation</router-link>
                    <router-link to=contracts>contracts</router-link>
                </nav>
                <router-view class=mt10></router-view>
            </div>
        </div>
        <vue-footer></vue-footer>
    </div>
</template>
<script>
    module.exports = {
        components: {
            "vue-footer": require("@/components/vue-footer").default,
            "vue-header": require("@/components/vue-header").default,
            "vue-left": require("@/components/vue-left").default
        }
    };
</script>