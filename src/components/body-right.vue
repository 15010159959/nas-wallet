<style>
    .vue-body-right {
        display: flex;
        flex-direction: column;
    }

    .vue-body-right nav {
        background-color: grey;
        display: flex;
        line-height: 40px;
        margin: 10px 0;
    }

    .vue-body-right nav a {
        color: white;
        flex: 1;
        margin: 0 10px;
        overflow: hidden;
        text-align: center;
    }

    .vue-body-right .vue-router-view {
        flex: 1;
        /* firefox 61 needs min-height */
        min-height: 0;
    }
</style>
<template>
    <div class=vue-body-right>
        <nav>
            <router-link to=wallet>wallet</router-link>
            <router-link to=transation>transation</router-link>
            <router-link to=contracts>contracts</router-link>
        </nav>
        <router-view class=vue-router-view></router-view>
    </div>
</template>