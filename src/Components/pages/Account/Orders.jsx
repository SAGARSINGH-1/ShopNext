import React from 'react'
import { MdManageAccounts } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { GiCardboardBoxClosed } from 'react-icons/gi'
import { RiHome7Fill } from 'react-icons/ri'

function Orders() {

    const data = [
        {
            id: "1",
            imgUrl: "https://rukminim2.flixcart.com/image/xif0q/t-shirt/u/u/e/m-oversizetsrt-101-kajaru-original-imagwgndydxe48zs.jpeg",
            title: "Shirt 1",
            price: 100,
            rating: 5,
            qty: 1
        },
        {
            id: '2',
            imgUrl: "https://rukminim2.flixcart.com/image/xif0q/t-shirt/u/u/e/m-oversizetsrt-101-kajaru-original-imagwgndydxe48zs.jpeg",
            title: "Shirt 2",
            price: 200,
            rating: 4,
            qty: 2
        },
        {
            id: '3',
            imgUrl: "https://rukminim2.flixcart.com/image/xif0q/t-shirt/u/u/e/m-oversizetsrt-101-kajaru-original-imagwgndydxe48zs.jpeg",
            title: "Shirt 3",
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
        <div className='px-24 text-black'>
            <div className="text-md breadcrumbs font-bold">
                <ul>
                    <li>
                        <Link className='gap-1' to={'/account'} >
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

            <div className='flex'>
                <div className='left'>
                    <p>Order Status</p>
                    {
                        input1.map((item, index) => {
                            return (
                                <div key={index} className=''>
                                    <input type='radio' id={item.id} name='status' />
                                    <label htmlFor={item.id}>{item.text}</label>
                                </div>
                            )
                        })
                    }
                    <p>Order time</p>
                </div>
                <div className='right'>
                    <div className='search'>
                        <form>
                            <input type='search' placeholder='Search all orders' className='' />
                            <button type='submit'>Submit</button>
                        </form>
                    </div>

                    <div className='orders w-[100%] flex flex-col gap-3'>
                        {
                            data.map((item, index) => {
                                return (
                                    <div key={index} className='order flex gap-2'>
                                        <div className='order__img'>
                                            <img src={item.imgUrl} alt={item.title} width={"150px"} />
                                        </div>
                                        <div className='order__info flex justify-around items-center w-[100%]'>
                                            <p>{item.title}</p>
                                            <p>₹{item.price}</p>
                                            <p>Rating: {item.rating}</p>
                                            <p>Qty: {item.qty}</p>
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