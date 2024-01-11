const CONTRACT_ADDRESS = "0xf6583E1A71fD52fbd3e63fb1Add7a0BF2DB637B4";
const contractABI = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_duration",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "duration",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getNoVotes",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getRemainingTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getYesVotes",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "no",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "voteNo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "voteYes",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "voted_voters",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "yes",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

var contractInstance = null;

if (window.ethereum) {
  const statusElement = document.getElementById("status");
  statusElement.innerHTML = "MetaMask Account Available";
  init();
}

async function voteYes() {
  await contractInstance.voteYes();
  console.log("Yes Voted");
}

async function voteNo() {
  await contractInstance.voteNo();
  console.log("No Voted");
}

async function init() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();
  const address = await signer.getAddress();
  console.log("MetaMask Connected : " + address);
  const statusElement = document.getElementById("status");
  statusElement.innerHTML = "MetaMask Account Connected";

  contractInstance = new ethers.Contract(CONTRACT_ADDRESS, contractABI, signer);
  const yesVotes = await contractInstance.getYesVotes();
  const noVotes = await contractInstance.getNoVotes();
  const time = await contractInstance.getRemainingTime();

  console.log("Yes Votes : ", parseInt(yesVotes, 16));
  console.log("No Votes : ", parseInt(noVotes, 16));
  const yesElement = document.getElementById("yesCount");
  yesElement.innerHTML = "Yes Count : " + parseInt(yesVotes, 16);
  const noElement = document.getElementById("noCount");
  noElement.innerHTML = "No Count : " + parseInt(noVotes, 16);
  const timeElement = document.getElementById("time");
  timeElement.innerHTML = "Time remaining : " + parseInt(time, 16);
}
