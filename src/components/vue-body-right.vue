<style>
    .vue-body-right nav {
        background-color: grey;
        display: flex;
        line-height: 40px;
    }

    .vue-body-right nav a {
        color: white;
        flex: 1;
        margin: 0 10px;
        overflow: hidden;
        text-align: center;
    }
</style>
<template>
    <div class=vue-body-right>
        <nav>
            <router-link to=wallet>wallet</router-link>
            <router-link to=transation>transation</router-link>
            <router-link to=contracts>contracts</router-link>
        </nav>
        <router-view class=mt10></router-view>
    </div>
</template>