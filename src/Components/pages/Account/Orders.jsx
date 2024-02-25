import React, { useEffect } from 'react'
import { MdManageAccounts } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { GiCardboardBoxClosed } from 'react-icons/gi'
import { RiHome7Fill } from 'react-icons/ri'
import { CiSearch } from 'react-icons/ci'
import { useSelector } from 'react-redux'

function Orders() {

    const products = useSelector(state => state.product.products);

    useEffect(() => {
        console.log(products)
    },[products])
    

    const data = [
        {
            id: "1",
            imgUrl: "https://rukminim2.flixcart.com/image/xif0q/t-shirt/u/u/e/m-oversizetsrt-101-kajaru-original-imagwgndydxe48zs.jpeg",
            title: "Men Printed Round Neck Poly Cotton Black T-Shirt",
            color: "black",
            status: "On the way",
            size: "M",
            price: 100,
            rating: 5,
            qty: 1
        },
        {
            id: '2',
            imgUrl: "https://rukminim2.flixcart.com/image/xif0q/t-shirt/u/u/e/m-oversizetsrt-101-kajaru-original-imagwgndydxe48zs.jpeg",
            title: "Men Printed Round Neck Poly Cotton Black T-Shirt",
            color: "black",
            status: "On the way",
            size: "M",
            price: 200,
            rating: 4,
            qty: 2
        },
        {
            id: '3',
            imgUrl: "https://rukminim2.flixcart.com/image/xif0q/t-shirt/u/u/e/m-oversizetsrt-101-kajaru-original-imagwgndydxe48zs.jpeg",
            title: "Men Printed Round Neck Poly Cotton Black T-Shirt",
            color: "black",
            status: "On the way",
            size: "M",
            price: 300,
            rating: 3,
            qty: 3
        }
    ]



    const input1 = [
        {
            id: "1",
            text: "On the way"
        },
        {
            id: "2",
            text: "Delivered"

        },
        {
            id: "3",
            text: "Cancelled"
        },
        {
            id: "4",
            text: "Returned"
        },
        {
            id: "5",
            text: "Refunded"
        },
    ]
    const input2 = [
        {
            id: "1",
            text: "Last 30 days"
        },
        {
            id: "2",
            text: "2023"
        },
        {
            id: "3",
            text: "2022"
        },
        {
            id: "4",
            text: "2021"
        }
    ]

    return (
        <div className='px-[16px] text-black bg-gray-100 '>
            <div className="text-sm py-3 pl-4 breadcrumbs font-semibold">
                <ul>
                    <li>
                        <Link className='gap-1' to={'/'} >
                            <RiHome7Fill className='mt-1 text-lg' />
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className='gap-1' to={'/account'} >
                            <MdManageAccounts className='mt-1 text-lg' />
                            Account
                        </Link>
                    </li>
                    <li>
                        <Link className='gap-1' to={'/account/your_order'}>
                            <GiCardboardBoxClosed className='mt-1 text-lg' />
                            Your Orders
                        </Link>
                    </li>
                </ul>
            </div>

            <div className='flex gap-5'>
                <div className='left px-[16px] w-[250px] bg-white shadow-md'>
                    <p className='px-[5px] py-[11px] font-bold text-xl'>Filters</p>
                    <p className='pb-[8px] font-semibold'>Order Status</p>
                    {
                        input1.map((item, index) => {
                            return (
                                <div key={index} className='mt-3 flex items-center gap-3 text-sm'>
                                    <input type="checkbox" id={item.id} className="checkbox bg-gray-100 [--chkbg:theme(colors.gray.100)] [--chkfg:#3F83F8]" />
                                    <label htmlFor={item.id} className=''>{item.text}</label>
                                </div>
                            )
                        })
                    }
                    <p className='py-[13px] font-semibold'>Order time</p>
                    {
                        input2.map((item, index) => {
                            return (
                                <div key={index} className='my-2 text-sm flex items-center gap-3'>
                                    <input type="checkbox" id={item.id} className="checkbox bg-gray-100 [--chkbg:theme(colors.gray.100)] [--chkfg:#3F83F8]" />
                                    <label htmlFor={item.id} className=''>{item.text}</label>
                                </div>
                            )
                        })
                    }
                    <div key={999} className='my-2 mb-4 text-sm flex items-center gap-3'>
                        <input type="checkbox" id={999} className="checkbox bg-gray-100 [--chkbg:theme(colors.gray.100)] [--chkfg:#3F83F8]" />
                        <label htmlFor="999" className=''>Other</label>
                    </div>
                </div>
                <div className='right w-[100%]'>
                    <div className='search  pb-4'>
                        <form className=''>
                            <input type='search' placeholder='Search your orders here' className='w-[80%] p-2 rounded-sm text-black hover:shadow-md' />
                            <button type='submit' className='inline ml-2 bg-indigo-500 py-2 text-white font-semibold px-2 rounded-md'><CiSearch className="mb-1 inline text-xl mr-1" />Search products</button>
                        </form>
                    </div>

                    <div className='orders w-[100%] flex flex-col gap-3'>
                        {
                            data.map((item, index) => {
                                return (
                                    <div key={index} className='order cursor-pointer flex mb-[8px] gap-2 p-[16px] hover:shadow-md border-2 bg-white'>
                                        <div className='order__img mx-[10px]'>
                                            <img src={item.imgUrl} alt={item.title} width={"60px"} />
                                        </div>
                                        <div className='order__info flex justify-around items-center w-[100%]'>
                                            <div className='flex flex-col'>
                                                <p className='font-semibold'>{item.title.slice(0,29 )}...</p>
                                                <div className='flex w-[100%] justify-around gap-4'>
                                                    <p className='text-xs'>Color: {item.color}</p>
                                                    <p className='text-xs'>Size: {item.size}</p>
                                                    <p className='text-xs'>Qty: {item.qty}</p>
                                                </div>
                                            </div>
                                            <div>
                                                <p className='text-md'>${item.price}</p>
                                                <p className='text-xs'>Rating: {item.rating}</p>
                                            </div>
                                            <div>
                                                <p className='text-md'>{item.status}</p>
                                                <Link to={'/account/your_order/' + item.id} className='text-blue-500'>View Details</Link>
                                            </div>
                                        </div>
                                    </div>
                                )

                            })
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Orders