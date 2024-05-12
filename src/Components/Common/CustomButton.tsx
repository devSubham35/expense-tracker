
const CustomButton = ({ btnName, onClick, disabled }: any) => {
    return (
        <div className="w-full">
            <button 
            disabled={disabled}
            onClick={onClick} 
            className={`duration-500 text-[14px] md:text-[18px] 
            w-full h-fit px-8 py-2 text-white font-semibold rounded-md ${disabled? "bg-blue-300" : "bg-blue-700 hover:bg-blue-600 active:scale-[0.8] "}`}>
                {btnName}
            </button>
        </div>
    )
}

export default CustomButton
