import React from 'react'

const Barchart = () => {

  return (
    <div className='p-1'>
        <div className='border-l-3 border-b-2 border-l-blue-600 border-b-blue-600 h-[200px] flex justify-around items-end bg-blue-50'>
            <div className='w-8 border-b-2 border-b-blue-600 bg-blue-600 h-[80px] rounded-tl-xl rounded-tr-xl'></div>
            <div className='w-8 border-b-2 border-b-blue-600 bg-blue-600 h-[10px] rounded-tl-xl rounded-tr-xl'></div>
            <div className='w-8 border-b-2 border-b-blue-600 bg-blue-600 h-[140px] rounded-tl-xl rounded-tr-xl'></div>
            <div className='w-8 border-b-2 border-b-blue-600 bg-blue-600 h-[40px] rounded-tl-xl rounded-tr-xl'></div>
        </div>
        <div className='flex justify-around text-xs'>
            <div className='text-center'>Complied</div>
            <div>Not Complied</div>
            <div>Partially Complied</div>
            <div>None of the Above</div>
        </div>
    </div>
  )
}

export default Barchart