import { bank } from "./config.js";
let myAdress=document.getElementById("myAdress")
let connect=document.getElementById("connect")
let mindep=document.getElementById("mindep")
let dep=document.getElementById("dep")
let amoutInput=document.getElementById("amoutInput")
let loadingimg=document.getElementById("loading-img")
let walletSolde=document.getElementById("walletSolde")
let depoButton=document.getElementById("depoButton")
let withdrawButton=document.getElementById("withdrawButton")
let contract;
let web3;
connect.addEventListener("click",async ()=>{
    try{
        await window.ethereum.request({ method: "eth_requestAccounts" })        
        console.log("user accepted")
        let addr=await(await window.ethereum.request({ method: "eth_accounts" }))[0]

        let balance=await window.ethereum.request({
            method: 'eth_getBalance',
            params: [addr, "latest"]
        })
        myAdress.innerText=addr
        walletSolde.innerText=balance

        web3=new Web3(window.ethereum)  
        contract= new web3.eth.Contract(bank.ABI,bank.address)

        let mintodep= await contract.methods.returnMinDepo().call().then(
            data=>{
                mindep.innerText=data;
            }
        ).catch(e=>console.log(e))

        let depp =await contract.methods.totaldepot(addr).then(
            data=> {
                dep.innerText=data
            }
        ).catch(e=>console.log(e))

        let deposite=await contract.methods.donate().send(
            {   from:addr,
                to:bank.address,
                value:amoutInput.value
            }
        ).then(data=>console.log(data)).catch(e=>console.log(e)).finally(hideLoading)

        depoButton.addEventListener("click",donate())

        let withdraw=await contract.methods.withdraw().send(
            {
                from:bank.address,
                to:addr,
                value:amoutInput.value
            }
        ).then(data=>console.log(data)).catch(e=>console.log(e)).finally(hideLoading)

        withdrawButton.addEventListener("click",withdraw) //na9ssa show loading


    }
    catch(e){
        console.log(e)
    }
})


const hideLoading = () => {
    loadingimg.classList.add("hidden")
}
const showLoading = () => {
    loadingimg.classList.remove("hidden")
}