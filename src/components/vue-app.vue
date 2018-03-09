<style>
    .vue-app .vue-body {
        display: flex;
    }

    .vue-app .left {
        background-color: #fff;
        margin-right: 20px;
        /* overflow: hidden; */
        width: 260px;
    }

    .vue-app .left .msg_1 {
        height: 140px;
        background-color: gray;
        margin: 12px auto;
        text-align: center;
        line-height: 45px;
    }

    .vue-app .right {
        flex: 1;
    }

    .vue-app .right nav {
        background-color: grey;
        display: flex;
        line-height: 40px;
    }

    .vue-app .right nav a {
        color: white;
        flex: 1;
        margin: 0 10px;
        text-align: center;
    }
</style>
<template>
    <div class=vue-app>
        <vue-header></vue-header>
        <div class=vue-body>
            <div class=left>
                <div class="msg_1">Information hints
                    <br> (Operational guidelines, and transfer）
                    <br>
                </div>
                <div class="msg_1">Information hints
                    <br> (Operational guidelines,and transfer）
                    <br>
                </div>
                <div class="msg_1">Information hints
                    <br> (Operational guidelines,and transfer）
                    <br>
                </div>
                <div class="msg_1">Information hints
                    <br> (Operational guidelines,and transfer）
                    <br>
                </div>
                <div class="msg_1">Information hints
                    <br> (Operational guidelines,and transfer）
                    <br>
                </div>
            </div>
            <div class=right>
                <nav>
                    <router-link to=wallet>wallet</router-link>
                    <router-link to=transation>transation</router-link>
                    <router-link to=contracts>contracts</router-link>
                </nav>
                <router-view></router-view>
            </div>
        </div>
        <vue-footer></vue-footer>
    </div>
</template>
<script>
    module.exports = {
        components: {
            "vue-footer": require("@/components/vue-footer").default,
            "vue-header": require("@/components/vue-header").default
        }
    };
</script>