<style>
    .vue-wallet {
        background-color: gray;
        display: flex;
    }

    .vue-wallet>.left,
    .vue-wallet>.right {
        min-width: 0;
        overflow-x: hidden;
    }

    .vue-wallet>.left {
        flex: 0 1 240px;
    }

    .vue-wallet>.right {
        flex: 1 1 240px;
    }

    .vue-wallet .add-wallet {
        background-color: rgb(137, 187, 216);
        color: beige;
        cursor: pointer;
        line-height: 32px;
        margin: 20px 10px;
        text-align: center;
    }
</style>
<template>
    <div class=vue-wallet>
        <div class=left>
            <vue-collapsible v-for="o in arr" v-bind:addr=o v-bind:collapse="expand != o" v-bind:key=o v-on:clickHandbar=onClickHandbar></vue-collapsible>
            <div class=add-wallet v-on:click="right = 'add'">Add Wallet ➫</div>
        </div>
        <div class=right>
            <vue-add v-show="right == 'add'"></vue-add>
            <div v-show="right != 'add'">
                <br>right right right right right right right right right right right right right right right right right right right right right right right right right right right right right right right right right right right right right right right right right right right right right right right right right right right right right right right right right right right right right right right right right right right right right right right right right right right right right right right right right right right right right right right right right right
                <br>right
                <br>right
                <br>right
                <br>right
                <br>right
                <br>right
                <br>right
                <br>right
            </div>
        </div>
    </div>
</template>
<script>
    module.exports = {
        components: {
            "vue-add": require("./add").default,
            "vue-collapsible": require("@/components/collapsible").default
        },
        data() {
            return {
                arr: [],
                expand: "",
                right: ""
            }
        },
        methods: {
            onClickHandbar(vmChild) {
                this.expand = vmChild.collapse ? vmChild.addr : "";
            }
        },
        mounted() {

            console.log("如果在浏览器里就不添加钱包, 否则读取并显示保存的钱包");

            this.arr = [
                "0x7D6e767D994AE11C77cbcf9C0B97aCf0843Cc19E",
                "0xEFc17b279Ec4e72f1B2c497cC0976c6C6ba705a1",
                // "0x281055afc982d96fab65b3a49cac8b878184cb16",
                // "0xab7c74abc0c4d48d1bdad5dcb26153fc8780f83e",
                // "0x53d284357ec70ce289d6d64134dfac8e511c8a3d",
                // "0xf4b51b14b9ee30dc37ec970b50a486f37686e2a8",
                // "0xe853c56864a2ebe4576a807d26fdc4a0ada51919",
                // "0x61edcdf5bb737adffe5043706e7c5bb1f1a56eea",
            ];

        }
    };
</script>