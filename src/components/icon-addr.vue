<style>
    .vue-icon-addr {
        align-items: center;
        display: flex;
    }

    .vue-icon-addr :first-child {
        margin: 10px;
    }

    .vue-icon-addr :last-child {
        margin-right: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>
<template>
    <div class=vue-icon-addr>
        <div class=addr>{{ addr }}</div>
    </div>
</template>
<script>
    var blockies = require("blockies");

    module.exports = {
        mounted() {
            var icon = blockies({
                seed: this.addr.toLowerCase()
            });

            this.$el.insertAdjacentElement("afterbegin", icon);
        },
        props: ["addr"]
    };
</script>