
import { useState } from 'react';
import InputForm from './InputForm'
import ItemListPage from './ItemListPage'

const HomePage = () => {

  const getLocalStorageData: any = localStorage.getItem("itemList")
  const [data, setData] = useState<string>(JSON.parse(getLocalStorageData) || [])

  return (

    <div className='w-full min-h-screen flex flex-col items-center md:pt-20'>
      <div className='w-[90%] md:w-[60%] lg:w-1/2 2xl:w-[30%] flex flex-col items-center rounded-2xl p-6 md:py-10 shadow-xl'>
          <h1 className='text-blue-600 font-bold text-[35px] md:text-[40px]  mb-5 md:mb-10'>Expense Tracker</h1>
        <InputForm setData={setData} />
        <ItemListPage data={data} />
      </div>
    </div>
  )
}

export default HomePage
