const Web3 = require('web3');

// Variables definition
const from = "0xFc18128347ddfD4CFC8c531CB2C7b35AF788BF01";
const to = "0xc53D6C0148ddC28Efe623Ab3aD54da5C7779b25C";

const provider = new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161");
const web3 = new Web3(provider);

// Balance call
const balances = async () => {
    const balanceFrom = web3.utils.fromWei(
        await web3.eth.getBalance(from),
        'ether'
    );
    const balanceTo = web3.utils.fromWei(
        await web3.eth.getBalance(to),
        'ether'
    );

    console.log(`The balance of ${from} is: ${balanceFrom} ETH.`);
    console.log(`The balance of ${to} is: ${balanceTo} ETH.`);
};

balances();