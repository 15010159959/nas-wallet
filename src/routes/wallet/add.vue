<style>
    .vue-wallet .vue-add {
        line-height: 42px;
    }

    .vue-wallet .vue-add .tab-buttons {
        display: flex;
    }

    .vue-wallet .vue-add .tab-buttons>div {
        background-color: hsl(219, 79%, 66%);
        cursor: pointer;
        transition: background-color .2s ease;
    }

    .vue-wallet .vue-add .tab-buttons .checked {
        background-color: hsl(219, 79%, 57%);
    }

    .vue-wallet .vue-add .tab.new input {
        width: 100%;
    }
</style>
<template>
    <div class=vue-add>
        <div class=tab-buttons>
            <div class=new v-bind:class="{ checked: tab == 1 }" v-on:click="tab = 1">new wallet</div>
            <div class=load v-bind:class="{ checked: tab == 2 }" v-on:click="tab = 2">load wallet file</div>
        </div>
        <div class="new tab" v-show="tab == 1">

            enter a password

            <input placeholder="DO NOT forget this!" maxlength=6 v-model=password>
            <input type=button v-on:click=onClickNew value="Create New Wallet">
        </div>
        <div class="load tab" v-show="tab == 2">

            pick json file
        </div>
    </div>
</template>
<script>
    module.exports = {

        data() {
            return {
                password: "",
                tab: 1
            };
        },
        methods: {
            onClickNew() {

                var result;

                if (this.password.length) {

                    // https://www.npmjs.com/package/safe-buffer
                    // https://www.npmjs.com/package/jssha
                    // https://www.npmjs.com/package/keccak
                    // https://www.npmjs.com/package/secp256k1
                    // https://github.com/indutny/elliptic
                    // nasWallet - index.html
                    //  line 135 - address = account.getAddressString();
                    // nasWallet - wallet.js
                    //  line  17 - return new Account(cryptoUtils.crypto.randomBytes(32));
                    //  line  82 - var pubKey = this.getPublicKey();
                    //  line 974 - privateToPublic

                    // new Account(t)
                    // - this.privKey = cryptoUtils.crypto.randomBytes(32) // generate once
                    // - this.pubKey = secp256k1.publicKeyCreate(privateKey, false).slice(1)
                    // address
                    // = account.getAddressString()
                    // = 
                    // privateKeyToPublicKey
                    // - secp256k1.publicKeyCreate(privateKey, false).slice(1)
                    // - Uint8Array(64)
                    // getPublicKey




                    // getPublicKeyFromPrivateKey

                    result = cryptoPipe("random-bytes ", 32)



                    console.log("onClickNew: result =", result);
                }
            }
        }
    };

    function cryptoPipe(s, seed) {
        var actions, i, len;

        if (typeof s == "string") {
            actions = s.match(/\S+/g) || [];

            for (i = 0, len = actions.length; i < len; ++i) {

                console.log(actions[i]);

                switch (actions[i].toLowerCase()) {
                    case "random-bytes":
                        seed = randomBytes(seed);
                }
            }
        }

        return seed;
    }

    // crypto.getRandomValues(Uint8Array(length))
    function randomBytes(length) {
        var arr;

        if (length > 0) {
            if (length > 30000) {
                console.log("randomBytes: length big than 30000, truncated:", length);
                length = 30000;
            }

            arr = new Uint8Array(length);
            crypto.getRandomValues(arr);
        } else
            arr = new Uint8Array(0);

        return arr;
    }
</script>