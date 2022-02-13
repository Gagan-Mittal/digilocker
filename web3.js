import Web3 from 'web3';
// const Web3 = require('web3')

// // window.ethereum.send('eth_requestAccounts');
// const web3 = new Web3(window.ethereum);

// export default web3;


let web3;
const ethEnabled = async () => {
    if (window.ethereum) {      
      web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    }
    
  }
ethEnabled();
export default web3;