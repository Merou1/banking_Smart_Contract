// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Bank{

    address owner;
    uint256 mindepo;
    mapping(address=>uint256) totaldepot;

    constructor(uint256 _mindepo){//qui déploi houa l owner+kay7eded l mindeposit
        owner=msg.sender;
        mindepo=_mindepo;
    }

    function returnMinDepo() public view  returns (uint256){
        return mindepo;
    }


    function donnate() public payable {
        require(msg.value>=mindepo,"The deposit should be higher than the min deposit");
        totaldepot[msg.sender]+=msg.value;
    }

    function withdraw() public payable {
        require(msg.value<=totaldepot[msg.sender],"The amount should be less or equal to you deposits");
        totaldepot[msg.sender]-=msg.value;
        payable (msg.sender).transfer(msg.value);
    } 


}