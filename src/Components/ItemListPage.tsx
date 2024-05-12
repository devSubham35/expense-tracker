const ItemListPage = ({ data }: any) => {

    // Calculate total spend
    const totalSpend = data.reduce((acc: number, item: any) => acc + parseFloat(item.amount), 0)


    return (
        <div className="w-full h-full flex flex-col justify-center items-center mt-2 md:mt-6">
            <div className={`w-full gap-2 md:gap-4 ${data.length>3? "grid grid-cols-2" : "flex flex-col"}`}>
                {data?.map((item: any, index: any) => (
                    <div key={index} className="w-full bg-[#f1f1f1] text-[10px] md:text-[15px] font-semibold flex items-center gap-2 md:gap-4 py-3 px-4 rounded-xl">
                        <h1 className="font-bold">{item?.name}</h1>
                        <h1>₹{item?.amount}</h1>
                    </div>
                ))}
                {data.length<1 && <h1 className="w-full text-center font-medium text-[14px] md:text-[18px] text-slate-400">No Items Added</h1>}
            </div>
            <div className="text-[40px] font-bold text-blue-600 mt-6 text-center flex flex-col justify-center items-center">
                <h1>₹{totalSpend}</h1>
                <h1 className="text-[15px] ml-2">Total Spend</h1>
            </div>
        </div>
    );
};

export default ItemListPage;
