<style>
    .wallet_banner {
        height: 600px;
        background-color: gray;
        left: 26%;
        top: 2%;
    }

    .wallet_container {
        height: 600px;
        top: 10%;
    }

    .wallet_container .daoru {
        width: 30%;
        height: 100px;
        margin: 5% 5%;
    }

    .wallet_container .daoru .img {
        width: 50%;
        height: 96%;
    }

    .wallet_container .chuangjian {
        width: 30%;
        height: 100px;
        background-color: #fff;
        margin: 5% 5%;
    }
</style>
<template>
    <div class=vue-wallet>
        <div class="wallet_banner">
            <div class="wallet_container">
                <div class="daoru">
                    <div class="img">
                        <img src="static/img/add.jpg" width=60>
                    </div>
                </div>
                <div class="chuangjian"></div>
            </div>
        </div>
    </div>
</template>

<script>
    module.exports = {
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    };
</script>