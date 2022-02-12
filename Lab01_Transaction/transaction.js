const Web3 = require('web3');
const config = require('./config');

const provider = new Web3.providers.HttpProvider(
    "https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161");
const web3 = new Web3(provider);

const privateKey = config.privateKey;
const from = "0xFc18128347ddfD4CFC8c531CB2C7b35AF788BF01";
const to = "0xc53D6C0148ddC28Efe623Ab3aD54da5C7779b25C";

const deploy = async () => {
    console.log(
        `Attempting to make transaction from ${to} to ${from}`
    );

    const createTransaction = await web3.eth.accounts.signTransaction(
        {
            from: from,
            to: to,
            value: web3.utils.toWei('0.1', 'ether'),
            gas: '21336',
            data: web3.utils.toHex("Kateryna Yatskiv 2022")
        },
        privateKey
    );

    const createReceipt = await web3.eth.sendSignedTransaction(
        createTransaction.rawTransaction
    );

    console.log(
        `Transaction successful with hash: ${createReceipt.transactionHash}`
    );
}

deploy();