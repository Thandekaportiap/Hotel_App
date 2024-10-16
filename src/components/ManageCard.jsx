import React from 'react'

const ManageCard = ({list}) => {
  return (
    <div>
        <div
      class="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-lg overflow-hidden mx-auto font-[sans-serif] mt-4">
      <div class="min-h-[256px]">
        <img src={list.src} class="w-full" />
      </div>

      <div class="p-6">
        <h3 class="text-[#003060] text-2xl font-bold text-center">{list.label}</h3>
        <p class="mt-4 text-sm text-gray-500 leading-relaxed">
         
        </p>
     <div className='flex justify-center items-center'>
     <button type="button"
          class="mt-6 px-5 py-2.5 rounded-lg text-white text-sm tracking-wider border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600 mx-3">Edit</button>
          <button type="button"
          class="mt-6 px-5 py-2.5 rounded-lg text-white text-sm tracking-wider border-none outline-none bg-red-600 hover:bg-red-700 active:bg-blue-600">Delete</button>
     </div>
      </div>
    </div>
    </div>
  )
}

export default ManageCard
