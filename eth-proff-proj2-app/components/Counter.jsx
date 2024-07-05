import { TransactionButton, useReadContract } from "thirdweb/react";
import { CONTRACT } from "../utils/constants";
import "/Users/navi/eth-proff-proj2-app/styles/counter.css"; 
import { prepareContractCall } from "thirdweb";
import { ChangeEvent, useState } from "react";

const Counter: React.FC = () => {
    
    const [item, setItem] = useState<string>('');
    const [price, setPrice] = useState<bigint>(BigInt(0));
    const [quantity , setQuantity] = useState<bigint>(BigInt(0));

    const { data: count, isLoading: loadingCount } = useReadContract({
        contract: CONTRACT,
        method: "totalItems"
    });

    const { data: list, isLoading: loadingList } = useReadContract({
        contract: CONTRACT,
        method: "getTable"
    });

    const handleItemChange = (e: ChangeEvent<HTMLInputElement>) => {
        setItem(e.target.value);
    };

    const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setPrice(value ? BigInt(value) : BigInt(0));
    };

    const handleQuantityChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuantity(value ? BigInt(value) : BigInt(0));
    };

    const handleSubmit = () => {
        console.log('Item Name:', item);
        console.log('Price:', price.toString());
        console.log('Quantity:', quantity.toString());

        setItem('');
        setPrice(BigInt(0));
        setQuantity(BigInt(0));
    };

    return (
        <div className="container">
            <div className="form-container">
                

                <label htmlFor="item">Item Name</label>
                <input id="item" type="text" name="item" onChange={handleItemChange} value={item} /><br />
                <label htmlFor="price">Item Price</label>
                <input id="price" type="number" name="price" value={price === undefined ? '' : price.toString()} onChange={handlePriceChange} /><br />
                <label htmlFor="quantity">Quantity</label>
                <input id="quantity" type="number" name="quantity" value={quantity === undefined ? '' : quantity.toString()} onChange={handleQuantityChange} /><br />
                  
                <TransactionButton
                    transaction={() => prepareContractCall({
                        contract: CONTRACT,
                        method: "addUniqueItems",
                        params: [item, price , quantity]
                    })}
                    onTransactionSent={() => console.log("Items Added!!")}
                    onTransactionConfirmed={() => handleSubmit()}
                    onError={(error) => console.error("Transaction error:", error)}
                >
                  Add 
                </TransactionButton>
            </div>
            <div className="table-container">
                {loadingList ? (
                    <h3>Loading Items of Garage...</h3>
                ) : (
                    <table>
                        <thead>
                            <tr>
                                <th>Item Name</th>
                                <th>Price $ </th>
                                <th>Quantity</th>
                                <th> Add </th>
                                <th> Decrease</th>
                                <th> Remove</th>

                            </tr>
                        </thead>
                        <tbody>
                            {list?.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.price.toString()}</td>
                                    <td>{item.quantity.toString()}</td>
                                    <td>
                                        <TransactionButton
                                            transaction={() => prepareContractCall({
                                                contract: CONTRACT,
                                                method: "addQuantity",
                                                params: [BigInt(index)]
                                            })}
                                            onTransactionSent={() => console.log(" 1 Item  Added")}
                                            onTransactionConfirmed={() => console.log("done")}
                                        >
                                           +
                                        </TransactionButton>
                                    </td>
                                    <td>
                                        <TransactionButton
                                            transaction={() => prepareContractCall({
                                                contract: CONTRACT,
                                                method: "decreaseQuantity",
                                                params: [BigInt(index)]
                                            })}
                                            onTransactionSent={() => console.log(" 1 item removed ")}
                                            onTransactionConfirmed={() => console.log("done")}
                                        >
                                            -
                                        </TransactionButton>
                                    </td>

                                    <td>
                                        <TransactionButton
                                            transaction={() => prepareContractCall({
                                                contract: CONTRACT,
                                                method: "removeItems",
                                                params: [BigInt(index)]
                                            })}
                                            onTransactionSent={() => console.log("Item Sold ")}
                                            onTransactionConfirmed={() => console.log("done")}
                                        >
                                            Remove 
                                        </TransactionButton>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>

            <div style={
        {
            height : "15vh" ,
            alignItems : "center",
            justifyContent : "center" ,
            
        }}>
            {loadingCount ? (
            
                    <h4>....</h4>
                ) : (
                    <h3>Total Items: {count?.toString()}</h3>
                )}
           </div>
        </div>
    );
};

export default Counter;
