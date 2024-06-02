import React, { useEffect } from 'react'
import { GrSecure } from 'react-icons/gr'
import { useSelector, useDispatch } from 'react-redux'
import { storeProducts, removeProducts, deleteProduct } from '../../Store/cartSlice';
import { addAddress, removeAddress, selectedAddress } from '../../Store/addressSlice';
import { MdOutlineDeleteForever } from 'react-icons/md'

function Cart() {

  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.products)
  const getAddress = useSelector((state) => state.address.address)
  const [tab, setTab] = React.useState('smartphones')
  const [cartItem, setCartItem] = React.useState([]);


  useEffect(() => {
    setCartItem(cartItems)
  }, [cartItems])

  return (
    <div className='bg-gray-200 px-4 text-black w-[100%] pt-3 flex h-[100vh] gap-5'>
      <div className='left flex flex-col w-[73vw] gap-2'>
        <div className='max-h-full'>
          <div className='bg-white p-3'>
            <div className='flex justify-between'>
              <p>Delivery Address</p>
              <button className="text-indigo-500 cursor-pointer hover:underline font-semibold" onClick={() => document.getElementById('my_modal_3').showModal()}>Change</button>
              <dialog id="my_modal_3" className=" text-black bg-white shadow-lg rounded-lg py-10 px-5">
                <div className="">
                  <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                  </form>
                  <div className='flex gap-3'>
                    {
                      getAddress.map((item, index) => {
                        return (
                          <div key={index} className={`cursor-pointer flex justify-between border-4 p-3 rounded-2xl ${item.isSelected ? "bg-indigo-500 text-white" : ""}`}>
                            <div onClick={() => dispatch(selectedAddress({ id: item.id }))}>
                              <p>{item.name}</p>
                              <p>{item.address}</p>
                              <p>{item.city}</p>
                              <p>{item.state}</p>
                              <p>{item.zip}</p>
                              <p>{item.phone}</p>
                            </div>
                            <div>
                              <button onClick={() => dispatch(removeAddress({ id: item.id }))} className='text-indigo-500 cursor-pointer hover:underline font-semibold'><MdOutlineDeleteForever size={25} /></button>
                            </div>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>


        {/* Tab Panels */}
        <div className='bg-white overflow-scroll scrollbar'>
          {
            cartItem.length > 0 ? (
              <>
                {
                  cartItem.map((item, index) => {
                    return (
                      <div key={index} className='border-t-4 shadow-md flex justify-between p-2'>
                        <div>
                          <img src={`${item.thumbnail}`} width={"100px"} alt="" />
                          <p>{item.title}</p>
                          <p>{item.price}</p>
                        </div>
                        <div className='flex  items-center gap-2'>
                          <button onClick={() => dispatch(storeProducts(item))} className='bg-indigo-500 text-white p-2 rounded-md'>+</button>
                          <p>{item.quantity}</p>
                          <button onClick={() => dispatch(removeProducts({ id: item.id }))} className='bg-indigo-500 text-white p-2 rounded-md'>-</button>
                          <button onClick={() => dispatch(deleteProduct({ id: item.id }))} className='bg-indigo-500 text-white p-2 rounded-md'><MdOutlineDeleteForever size={27} /></button>
                        </div>
                      </div>
                    )
                  })
                }
              </>) : (<div className='flex items-center justify-center h-full'>
                <div className='font-bold text-xl text-gray-500'>No item in the Cart</div>
              </div>)
          }

        </div>

        {/* You can open the modal using document.getElementById('ID').showModal() method */}

      </div >
      <div className='right bg-white px-[13px] py-[14px] flex flex-col gap-4'>
        <p className='text-lg font-semibold text-gray-500'>Prize Details</p>
        <div className='flex justify-between'>
          <p>Prize {cartItem.length ? cartItem.length : "0"} items</p>
          <p>${cartItem.length > 0 ? cartItem.reduce((total, item) => total + (item.price * item.quantity), 0) : "0"}</p>
        </div>
        <div className='flex justify-between'>
          <p>Discount</p>
          <p className='text-green-600 font-semibold'>-$0</p>
        </div>
        <div className='flex justify-between'>
          <p>Buy more & save more</p>
          <p className='text-green-600 font-semibold'>-$0</p>
        </div>
        <div className='flex justify-between'>
          <p className=''>Coupons for you</p>
          <p className='text-green-600 font-semibold'>-$0</p>
        </div>
        <div className='flex justify-between'>
          <p>Delivery Charges</p>
          <p className='text-green-600 font-semibold'>$0 (Free)</p>
        </div>
        <div className='flex justify-between'>
          <p className='font-bold text-lg'>Total Amount</p>
          <p className='font-bold text-lg'>${cartItem.length > 0 ? cartItem.reduce((total, item) => total + (item.price * item.quantity), 0) : "0"}</p>
        </div>
        <div className='flex justify-between'>
          <p className='text-green-600 font-semibold'>You will save ₹0 on this order</p>
        </div>
        <div>
          <p className='inline'> <GrSecure className='inline text-xl' />Safe and Secure Payments.Easy returns.100% Authentic products.</p>
        </div>
      </div>
    </div >
  )
}

export default Cart