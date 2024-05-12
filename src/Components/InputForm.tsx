import { useState } from 'react';
import CustomInput from './Common/CustomInput'
import CustomButton from './Common/CustomButton';

const InputForm = ({setData}: any) => {

    const [itemName, setItemName] = useState("")
    const [itemAmount, setItemAmount] = useState("")

    const handleAdd = () => {

        const getItemsData: any = localStorage.getItem("itemList")
        const existingItems = JSON.parse(getItemsData) || [];
        const newItem = {
            name: itemName,
            amount: itemAmount,
        };
        const updatedItems = [...existingItems, newItem];
        setData(updatedItems)

        localStorage.setItem("itemList", JSON.stringify(updatedItems));
        setItemName("");
        setItemAmount("");
    }

    const handleClearAll = () => {
        setData([])
        localStorage.clear();
    }

    return (

        <div className='w-full flex flex-col gap-1.5 md:gap-5 mb-6'>
            <CustomInput
                type="text"
                lable="Item Name"
                placeHolder="Item Name..."
                value={itemName}
                onChange={(e: any) => setItemName(e.target.value)}
            />

            <CustomInput
                type="number"
                lable="Item Amount"
                placeHolder="₹ Item Amount..."
                value={itemAmount}
                onChange={(e: any) => setItemAmount(e.target.value)}
            />

            <div className='w-full flex items-center gap-4 md:gap-6 mt-2'>
                <CustomButton disabled={itemName.trim() !== "" && itemAmount.trim() !== ""? false : true} btnName="Add Item" onClick={handleAdd} />
                <CustomButton btnName="Clear All"   onClick={handleClearAll} />
            </div>

        </div>
    )
}

export default InputForm
