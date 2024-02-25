import React from 'react'
import { GrSecure } from 'react-icons/gr'

function Cart() {
  const [tab, setTab] = React.useState('ShopNext')

  const handleTabSwitch = (e) => {
    setTab(e.target.innerText);
  }

  return (
    <div className='bg-gray-200 px-4 text-black w-[100%] pt-3 flex h-[100vh] gap-5'>
      <div className='left flex flex-col w-[73vw] gap-2'>
        <div role="tablist" className="tabs tabs-bordered bg-white">
          <a onClick={handleTabSwitch} role="tab" className={`tab ${tab == "ShopNext" ? "tab-active" : ""} text-black my-1`}>ShopNext</a>
          <a onClick={handleTabSwitch} role="tab" className={`tab ${tab == "ShopNext Prime" ? "tab-active" : ""} text-black my-1`}>ShopNext Prime</a>
        </div>
        <div className='h-[30vh]'>
          <div className='bg-white p-3'>
            <div className='flex justify-between'>
              <p>Delivery Address</p>
              <button className="text-indigo-500 cursor-pointer hover:underline font-semibold" onClick={() => document.getElementById('my_modal_3').showModal()}>Change</button>
              <dialog id="my_modal_3" className=" text-black bg-white py-4 px-2">
                <div className="">
                  <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                  </form>
                  <div className='flex flex-col'>
                    <p className='font-semibold text-md'>Select Delivery Address</p>
                    <div>
                      <input type="checkbox" name="Piyush Dwiwdi" id="add1" />
                      <label for="add1">Piyush Dwiwdi</label>
                    </div>
                    <div>
                      <input type="checkbox" name="Sagar Singh" id="add2" />
                      <label for="add2">Sagar Singh</label>
                    </div>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>

        {/* You can open the modal using document.getElementById('ID').showModal() method */}

      </div>
      <div className='right bg-white px-[13px] py-[14px] flex flex-col gap-4'>
        <p className='text-lg font-semibold text-gray-500'>Prize Details</p>
        <div className='flex justify-between'>
          <p>Prize 10 items</p>
          <p>$100</p>
        </div>
        <div className='flex justify-between'>
          <p>Discount</p>
          <p className='text-green-600 font-semibold'>-$30</p>
        </div>
        <div className='flex justify-between'>
          <p>Buy more & save more</p>
          <p className='text-green-600 font-semibold'>-$12</p>
        </div>
        <div className='flex justify-between'>
          <p className=''>Coupons for you</p>
          <p className='text-green-600 font-semibold'>-$4</p>
        </div>
        <div className='flex justify-between'>
          <p>Delivery Charges</p>
          <p className='text-green-600 font-semibold'>$4 Free</p>
        </div>
        <div className='flex justify-between'>
          <p className='font-bold text-lg'>Total Amount</p>
          <p className='font-bold text-lg'>$118</p>
        </div>
        <div className='flex justify-between'>
          <p className='text-green-600 font-semibold'>You will save ₹17,066 on this order</p>
        </div>
      <div>
        <p className='inline'> <GrSecure className='inline text-xl' />Safe and Secure Payments.Easy returns.100% Authentic products.</p>
      </div>
      </div>
    </div>
  )
}

export default Cart