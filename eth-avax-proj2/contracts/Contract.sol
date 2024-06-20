// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract MyContract {
    uint count ; 

    function incCounter()  public {
        count += 1 ;
    }

    function decCounter() public {
        require(count > 0 ,"counter can not be -ve ");
        count -= 1 ;
    }

    function getCount() public view returns(uint){
        return count ; 
    }
}