<style>
    .wallet {
        position: relative;
    }

    .container {
        width: 100%;
        height: 800px;
        background-color: #fff;
        position: absolute;
    }

    .msg {
        width: 24%;
        height: 750px;
        background-color: #fff;
        position: absolute;
        left: 0%;
        
        overflow: hidden;
    }

    .msg .msg_1 {
        width: 100%;
        height: 140px;
        background-color: gray;
        margin: 12px auto;
        text-align: center;
        line-height: 45px;
    }

    .wallet_banner {
        width: 74%;
        height: 750px;
        background-color: gray;
        position: absolute;
        left: 26%;
        top: 2%;
    }

    .tab ul li {
        float: left;
        width: 33%;
        list-style: none;
    }

    .wallet_container {
        width: 100%;
        height: 600px;
        position: absolute;
        top: 10%;
    }

    .wallet_container .daoru {
        width: 30%;
        height: 100px;
        background-color: #fff;
        margin: 5% 5%;
    }

    .wallet_container .chuangjian {
        width: 30%;
        height: 100px;
        background-color: #fff;
        margin: 5% 5%;
    }
</style>
<template>
    <div class="wallet">
        <div class="container">
            <div class="tab"></div>
            <div class="msg">
                <div class="msg_1">Information hints
                    <br> (Operational guidelines, and transfer）
                    <br>
                </div>
                <div class="msg_1">Information hints
                    <br> (Operational guidelines,and transfer）
                    <br>
                </div>
                <div class="msg_1">Information hints
                    <br> (Operational guidelines,and transfer）
                    <br>
                </div>
                <div class="msg_1">Information hints
                    <br> (Operational guidelines,and transfer）
                    <br>
                </div>
                <div class="msg_1">Information hints
                    <br> (Operational guidelines,and transfer）
                    <br>
                </div>
            </div>
            <div class="wallet_banner">
                <div class="tab">
                    <ul>
                        <li>
                            <a href="generate.html">wallet</a>
                        </li>
                        <li>
                            <a href="send-traansation.html">transation</a>
                        </li>
                        <li>
                            <a href="">contracts</a>
                        </li>
                    </ul>
                </div>
                <div class="wallet_container">
                    <div class="daoru"></div>
                    <div class="chuangjian"></div>
                </div>
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