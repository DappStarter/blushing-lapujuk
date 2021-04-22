require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give glove fresh speak notice crime remember method idea prize outer strike'; 
let testAccounts = [
"0x99bb36d4cfcfc653170e24caa2957e39c3020869aee0b8238f2d09e34416126f",
"0x466e2cafe17bf7c928a3106777036a2f362d1322e53ab9295749cf9f70e29967",
"0x219f5dfe5dc8a63373c10b1b73d8c949c82fefe44d62893ea3aba2a3b4237a91",
"0x8e50e575ad7a4613b2f1966aeae5bfe6568bf0dc0ab6bdf0304bcd25dacdda3d",
"0x942e43ed2bda10c41c3d3dc3d30ca19377cb0b75a023c1c78b067e8c8edfad9c",
"0xf1ac9af6bd29062a7bf1caa47eced3db04391e549b6cbdabc86d318b7ca55dd0",
"0x14e761658da3baa7ad292341d61d2a31f089bbf0edf65670975376939c8bfacb",
"0x93ab7d42de08b3fd6d803a0e72037bc150d2f039ae970711f396d66f8757a2c7",
"0xaaa0b31f24f1dc72b8e6ab53edd9faf5de206990243f9c4c2e9eb1901441c357",
"0xf82b7368dd2f57e3199b39c18bde92b0a3e4bae68e2618a4fd719a8c338b6c71"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
