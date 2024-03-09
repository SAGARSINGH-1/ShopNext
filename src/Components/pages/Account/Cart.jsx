import React, { useEffect } from 'react'
import { GrSecure } from 'react-icons/gr'
import { useSelector, useDispatch } from 'react-redux'
import { storeProducts, removeProducts, deleteProduct } from '../../Store/cartSlice';

function Cart() {

  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.products)
  const [tab, setTab] = React.useState('smartphones')
  const [cartItem, setCartItem] = React.useState([]);


  useEffect(() => {
    setCartItem(cartItems)
  }, [cartItems])

  const handleTabSwitch = (e) => {
    setTab(e)
  }

  // Cart itrem filter wih respect to tab
  const FilterCart = (tab) => {
    const filteredItems = cartItem.filter((item) => item.category == tab);
    console.log(filteredItems);
    if (filteredItems.length <= 0) {
      return <div className='h-full flex items-center justify-center '>
        <div className='font-bold text-xl'>
          No item in the category of {tab}
        </div>
      </div>
    }
    return (
      <div>
        {
          filteredItems.map((item, index) => {
            return (
              <div key={index} className='flex justify-between p-2'>
                <div>
                  <img src={`${item.thumbnail}`} width={"100px"} alt="" />
                  <p>{item.title}</p>
                  <p>{item.price}</p>
                </div>
                <div className='flex  items-center gap-2'>
                  <button onClick={() => dispatch(storeProducts(item))} className='bg-indigo-500 text-white p-2 rounded-md'>+</button>
                  <p>{item.quantity}</p>
                  <button onClick={() => dispatch(removeProducts({ id: item.id }))} className='bg-indigo-500 text-white p-2 rounded-md'>-</button>
                  <button onClick={() => dispatch(deleteProduct({ id: item.id }))} className='bg-indigo-500 text-white p-2 rounded-md'>Delete</button>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }

  return (
    <div className='bg-gray-200 px-4 text-black w-[100%] pt-3 flex h-[100vh] gap-5'>
      <div className='left flex flex-col w-[73vw] gap-2'>
        <div className='max-h-full'>
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
                      <label htmlFor="add1">Piyush Dwiwdi</label>
                    </div>
                    <div>
                      <input type="checkbox" name="Sagar Singh" id="add2" />
                      <label htmlFor="add2">Sagar Singh</label>
                    </div>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>

        {/* Switcher */}
        <div className="w-full">
          <div role="tablist" className='switcher tabs tabs-bordered text-black'>
            <input onClick={() => handleTabSwitch('smartphones')} type="radio" name="my_tabs_1" role="tab" className="tab text-black font-semibold" aria-label="Electronics" checked />
            <input onClick={() => handleTabSwitch('groceries')} type="radio" name="my_tabs_1" role="tab" className="tab text-black font-semibold" aria-label="groceries" />
            <input onClick={() => handleTabSwitch('Clothing')} type="radio" name="my_tabs_1" role="tab" className="tab text-black font-semibold" aria-label="Clothing" />
          </div>
        </div>


        {/* Tab Panels */}

        {
          cartItem.length > 0 ? (
            <>
              {
                tab === "smartphones" && (
                  <div className='overflow-y-scroll card-compact'>
                    <div className='bg-white p-3'>
                      <div className='flex justify-between'>
                        <p>smartphones</p>
                      </div>
                      {
                        FilterCart(tab)
                      }
                    </div>
                  </div>
                )
              }
              {
                tab === "groceries" && (
                  <div className='overflow-y-scroll card-compact'>
                    <div className='bg-white p-3'>
                      <div className='flex justify-between'>
                        <p>groceries</p>
                      </div>
                      {
                        FilterCart(tab)
                      }
                    </div>
                  </div>
                )
              }
              {
                tab === "Clothing" && (
                  <div className='overflow-y-scroll card-compact'>
                    <div className='bg-white p-3'>
                      <div className='flex justify-between'>
                        <p>Clothing</p>
                      </div>
                      {
                        FilterCart(tab)
                      }
                    </div>
                  </div>
                )
              }
            </>) : (<div className='flex items-center justify-center h-full'>
              <div className='font-bold text-xl text-gray-500'>No item in the Cart</div>
            </div>)
        }

        {/* You can open the modal using document.getElementById('ID').showModal() method */}

      </div>
      <div className='right bg-white px-[13px] py-[14px] flex flex-col gap-4'>
        <p className='text-lg font-semibold text-gray-500'>Prize Details</p>
        <div className='flex justify-between'>
          <p>Prize {cartItem.lenght ? cartItem.lenght : "0"} items</p>
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
    </div>
  )
}

export default Cart