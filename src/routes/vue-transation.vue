<style>
    .vue-transation {
        background-color: gray;
        height: 600px;
        margin-top: 8px;
    }

    .vue-transation .t-head {
        height: 150px;
    }

    .vue-transation .t-head .from {
        width: 50%;
        height: 100%;
        float: left;
        text-align: center;
        font-size: 20px;
    }

    .vue-transation .t-head .from .from_msg {
        height: 100px;
        margin-top: 20px;
    }

    .vue-transation .t-head .from .from_msg .pic {
        width: 60px;
        height: 60px;
        border: 1px solid black;
        border-radius: 50%;
        float: left;
    }

    .vue-transation .t-head .from .from_msg .address {
        width: 268px;
        height: 60px;
        border: 1px solid black;
        float: left;
    }

    .vue-transation .t-head .to {
        width: 50%;
        height: 100%;
        float: left;
        text-align: center;
        font-size: 20px;
    }

    .vue-transation .t-head .to .to_msg {
        height: 100px;
        margin-top: 20px;
    }

    .vue-transation .t-head .to .to_msg .pic {
        width: 60px;
        height: 60px;
        border: 1px solid black;
        border-radius: 50%;
        float: left;
    }

    .vue-transation .t-head .to .to_msg .address {
        width: 268px;
        height: 60px;
        border: 1px solid black;
        float: left;
    }

    .vue-transation .t-body {
        height: 350px;
    }


    .vue-transation .t-body ul {
        height: 152px;
    }

    .vue-transation .t-body ul>li {
        float: left;
        list-style: none;
        width: 150px;
        height: 150px;
        background-color: #fff;
        margin-left: 40px;
    }

    .vue-transation .t-body .swap {
        height: 100px;
        width: 400px;
        background-color: #fff;
        margin: auto;
    }

    .vue-transation .t-check {
        height: 100px;
    }

    .vue-transation .t-check .check {
        height: 100px;
        width: 200px;
        background-color: #ccc;
    }
</style>
<template>
    <div class=vue-transation>
        <div class=t-head>
            <div class=from>
                <span>FROM</span>
                <div class=from_msg>
                    <div class=pic></div>
                    <div class=address></div>
                </div>
            </div>
            <div class=to>
                <span>TO</span>
                <div class=to_msg>
                    <div class=pic></div>
                    <div class=address></div>
                </div>
            </div>
        </div>
        <div class=t-body>
            <ul>
                <li>币种</li>
                <li>数量</li>
                <li>Gas</li>
            </ul>
            <div class="swap">
                swap
            </div>
        </div>
        <div class=t-check>
            <div class="check">确认</div>
        </div>
    </div>
</template>

<script>
        module.exports = {
            components: {
            },
            data() {
                return {
                    arr: [],
                    msg: 'Welcome to Your Vue.js App'
                }
            },
            mounted() {
    
                this.arr = [
                    "0xEFc17b279Ec4e72f1B2c497cC0976c6C6ba705a1",
                    "0x281055afc982d96fab65b3a49cac8b878184cb16",
                    "0xab7c74abc0c4d48d1bdad5dcb26153fc8780f83e",
                    "0x53d284357ec70ce289d6d64134dfac8e511c8a3d",
                    "0xf4b51b14b9ee30dc37ec970b50a486f37686e2a8",
                    "0xe853c56864a2ebe4576a807d26fdc4a0ada51919",
                    "0x61edcdf5bb737adffe5043706e7c5bb1f1a56eea",
                ];
    
            }
        };
    </script>