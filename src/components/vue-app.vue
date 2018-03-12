<style>
    .vue-app .body {
        display: flex;
    }

    .vue-app .vue-body-left {
        background-color: #fff;
        flex: 0 1 200px;
        min-width: 0;
    }

    .vue-app .vue-body-right {
        flex: 1;
        min-width: 0;
    }
</style>
<template>
    <div class=vue-app>
        <vue-header></vue-header>
        <div class=body>
            <vue-body-left></vue-body-left>
            <vue-body-right class=mt10></vue-body-right>
        </div>
        <vue-footer></vue-footer>
    </div>
</template>
<script>
    module.exports = {
        components: {
            "vue-footer": require("@/components/vue-footer").default,
            "vue-header": require("@/components/vue-header").default,
            "vue-body-left": require("@/components/vue-body-left").default,
            "vue-body-right": require("@/components/vue-body-right").default
        }
    };
</script>