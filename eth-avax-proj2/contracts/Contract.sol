// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MySmallGarrrage {
    
    struct Items{
        string name;
        uint256 price;
        uint256 quantity; 
    }
    struct ItemExists{
        uint256 price;
        bool exists;
    }
    // Mapping from ItemName -> ItemExists 
    mapping(string => ItemExists) private ItemsMap ; 

    // Array of structure type Containing Items 
    Items [] private ItemsArray ;

    // 1) Add Unique Items in The Garrage :->
    function addUniqueItems(string memory _name , uint256 _price , uint256 _quantity) public{

        require(!ItemsMap[_name].exists , "Item Already in Garage! you should add Items button below");
        ItemsMap[_name] = ItemExists(_price  , true ) ;
        ItemsArray.push(Items(_name ,_price , _quantity)) ;
    } 

    // 2) addQuantity of Items for particular Item :->
    function addQuantity(uint256 _index) public {
        string memory item_name = ItemsArray[_index].name ; 
        require(ItemsMap[item_name].exists , "no such item exists"); 
        ItemsArray[_index].quantity  += 1 ; 
    }

    // 3) Decrease Quantity :->
    function decreaseQuantity(uint256 _index) public {
        require(_index < ItemsArray.length, "Index out of bounds");
        string memory item_name = ItemsArray[_index].name ;
        require(ItemsMap[item_name].exists , "no such item exists");
        ItemsArray[_index].quantity  -= 1 ;
    }

    // 4) Remove Items :->
    function removeItems(uint256 _index) public {
        require(_index < ItemsArray.length, "Index out of bounds");
        string memory item_name = ItemsArray[_index].name ;
        require(ItemsMap[item_name].exists , "no such item exists");
        delete ItemsMap[item_name] ;
         // Swap and pop to remove element efficiently
        ItemsArray[_index] = ItemsArray[ItemsArray.length - 1];
        ItemsArray.pop();
    }

    // 5) Total Items in the Garage :->
    function totalItems() public view returns(uint256){
       uint256 count = 0 ; 
        for(uint i = 0 ; i < ItemsArray.length ; i++){
            if(ItemsArray[i].quantity > 0){
                count += ItemsArray[i].quantity ;
            } 
        }
        return count ;
    }

// 6) tABLE OF Total Items in the Garage :->
    function getTable() public view returns (Items[] memory) {
        return ItemsArray;
    }
}
