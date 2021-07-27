require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope arctic surge short bitter birth snow come hockey knife fortune twenty'; 
let testAccounts = [
"0x4e42cb0b779adf07b577fb883970c2aede1847c27c1278b42e0cf12b609ee0d8",
"0x65eb392077c2f58110120bbd170e6e685081217a7868a369dc38a41389ed11cb",
"0xc37c427e25a8e17c6d809a5404a29913f2b258076725173d485f3039fd674313",
"0xa673747de779d12b9d003b067129980f74b16f3618ce136a2d4c5d2552ecbcde",
"0x416668532a03dfb50861f96ef206260dda02ddc65494156d65d25f2c5df04501",
"0x6f98d8a5691a9561febf06aabeb956322bbdb14f4c1d7d29ae843973b0940688",
"0xf1d128378c339376b3f255887468848abb49227f313d57321263c5c82985a66e",
"0xd1845212d46eecd0da9907ffd36db9032f9043f1467fdca730853b4cda8dcb86",
"0x21e4828d276fdecfb53ff5638b8bbd8da9be84696f2d8c54e5a0a0014605cb61",
"0xbf0cd4d30b44cd5709e176fbf762a8bec68f860cf9148931cbbc923b338c41e0"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

