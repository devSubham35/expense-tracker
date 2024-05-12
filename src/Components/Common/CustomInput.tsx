
const CustomInput = ({type, lable, placeHolder, value, onChange}: any) => {


  return (
    <div className="w-full">
    
      <h1 className="text-[14px] md:text-[16px] font-semibold text-blue-700 mb-1 w-fit">{lable}</h1>
      <input 
      type={type}
      placeholder={placeHolder}
      value={value}
      onChange={onChange}
      className="border-[2px] w-full h-8 px-4 py-5 md:py-6 rounded-lg outline-none font-semibold shadow-sm text-[12px] md:text-[16px]" />

    </div>
  )
}

export default CustomInput
