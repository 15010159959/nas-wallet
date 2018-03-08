<template>
    <div class=vue>
        <vue-header></vue-header>
        <router-view></router-view>
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