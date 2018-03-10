<style>
    /*
        <tag v-on:clickHandbar
        ></tag>
    */

    .vue-collapsible {
        background-color: beige;
        border-radius: 3px;
        margin: 12px;
        overflow: hidden;
    }

    .vue-collapsible .hand-bar {
        background-color: rgb(227, 229, 151);
        color: white;
        line-height: 19px;
        text-align: center;
        transition: background-color .5s ease;
    }

    .vue-collapsible.collapse .hand-bar {
        background-color: rgb(115, 189, 115);
    }

    .vue-collapsible .hand-bar::before {
        content: "⇧";
        display: inline-block;
        transition: transform .3s ease;
    }

    .vue-collapsible.collapse .hand-bar::before {
        transform: rotate(180deg);
    }

    .vue-collapsible .line1 {
        line-height: 30px;
    }

    .vue-collapsible .line2 {
        height: 140px;
        overflow: hidden;
        transition: height .5s ease;
    }

    .vue-collapsible.collapse .line2 {
        height: 0;
    }
</style>
<template>
    <div class=vue-collapsible v-bind:class={collapse}>
        <div class=hand-bar v-on:click=onClickHandbar></div>
        <vue-icon-addr v-bind:addr=addr></vue-icon-addr>
        <div class=line2>
            <br> 1
            <br> 2
            <br> 3
            <br> 4
            <br> 5
            <br> 6
            <br> 7
        </div>
    </div>
</template>
<script>
    module.exports = {
        components: {
            "vue-icon-addr": require("@/components/vue-icon-addr").default
        },
        methods: {
            onClickHandbar() {
                this.$emit("clickHandbar", this);
            }
        },
        props: ["addr", "collapse"]
    };
</script>