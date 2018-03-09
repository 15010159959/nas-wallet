<style>
    .vue-wallet {
        background-color: gray;
        height: 600px;
        margin-top: 8px;
        overflow: auto;
    }

    .vue-wallet .vue-collapsible {
        width: 320px;
    }
</style>
<template>
    <div class=vue-wallet>
        <vue-collapsible></vue-collapsible>

        <div class=add>Add Wallet</div>
    </div>
</template>

<script>
    module.exports = {
        components: {
            "vue-collapsible": require("@/components/vue-collapsible").default
        },
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    };
</script>