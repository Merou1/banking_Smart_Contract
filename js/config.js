export const bank ={
    address:"0x4B37F6Cd57e805aa4366A095c48b2f7ec0089158",
    ABI:  [
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "_mindepo",
					"type": "uint256"
				}
			],
			"stateMutability": "nonpayable",
			"type": "constructor"
		},
		{
			"inputs": [],
			"name": "donnate",
			"outputs": [],
			"stateMutability": "payable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "returnMinDepo",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "withdraw",
			"outputs": [],
			"stateMutability": "payable",
			"type": "function"
		}
	]
}