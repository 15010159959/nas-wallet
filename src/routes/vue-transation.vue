<style>
    .vue-transation {
        background-color: gray;
        height: 600px;
        margin-top: 8px;
        padding-top: 20px;
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
        height: 250px;
        text-align: center;
    }


    .vue-transation .t-body ul {
        height: 90px;
    }

    .vue-transation .t-body ul>li {
        float: left;
        list-style: none;
        width: 150px;
        height: 80px;
        margin-left: 40px;
    }

    .vue-transation .t-body ul>li select {
        width: 120px;
        height: 30px;
    }

    .vue-transation .t-body ul>li input {
        width: 120px;
        height: 20px;
    }

    .vue-transation .t-body .swap {
        height: 100px;
        width: 400px;
        background-color: #fff;
        margin: auto;
        text-align: center;
    }

    .vue-transation .t-body .swap input {
        width: 50px;
    }

    .vue-transation .t-check {
        height: 100px;
    }

    .vue-transation .t-check button {
        width: 80px;
        height: 30px;
        font-size: 20px;
        border: 1px solid black;
        border-radius: 10px;
    }
</style>
<template>
    <div class=vue-transation>
        <div class=t-body>
            <ul>
                <li>
                    <select>
                        <option value="ETH">ETH</option>
                        <option value="NAS">NAS</option>
                    </select>
                    Currency
                </li>
                <li>
                    <input type="text">Quantity
                </li>
                <li>
                    <select>
                        <option value="ETH">40Gwei</option>
                        <option value="NAS">20Gwei</option>
                    </select>
                    Fees
                </li>
            </ul>
            <div class="swap">
                <h3> I want to swap my</h3>
                <input type=text value=Amount>
                <select>
                    <option value=ETH>ETH</option>
                    <option value=NAS>NAS</option>
                </select>
                for
                <input type=text value=0>
                <select>
                    <option value=NAS>NAS</option>
                    <option value=ETH>ETH</option>
                </select>
                <br>
                <br>
                <button>Let's do this</button>
            </div>
        </div>

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

        <div class=t-check>
            <button>确认</button>
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