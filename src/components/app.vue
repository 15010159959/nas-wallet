<style>
    .vue-app .body {
        display: flex;
        height: 100vh;
    }

    .vue-app .vue-body-left,
    .vue-app .vue-body-right {
        min-width: 0;
    }

    .vue-app .vue-body-left {
        flex: 1;
        max-width: 200px;
    }

    .vue-app .vue-body-right {
        flex: 1 1 240px;
    }
</style>
<template>
    <div class=vue-app>
        <vue-header></vue-header>
        <div class=body>
            <vue-body-left></vue-body-left>
            <vue-body-right></vue-body-right>
        </div>
        <vue-footer></vue-footer>
    </div>
</template>
<script>
    module.exports = {
        components: {
            "vue-footer": require("@/components/footer").default,
            "vue-header": require("@/components/header").default,
            "vue-body-left": require("@/components/body-left").default,
            "vue-body-right": require("@/components/body-right").default
        }
    };
</script>