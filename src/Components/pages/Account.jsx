import React from 'react'
import { Link } from 'react-router-dom'

function Account() {

    const data = [
        {
            imgUrl: 'https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/Box._CB485927553_.png',
            heading: 'Your Orders',
            text: 'Track, return, or buy things again',
            to: '/account/your_orders'
        },
        {
            imgUrl: 'https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/sign-in-lock._CB485931504_.png',
            heading: 'Login & Security',
            text: 'Edit login, name, and mobile number'
        },
        {
            imgUrl: 'https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/rc_prime._CB485926807_.png',
            heading: 'ShoNest Pro',
            text: 'View benefits and payment settings'
        },
        {
            imgUrl: 'https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/address-map-pin._CB485934183_.png',
            heading: 'Your Addresses',
            text: 'Edit addresses for orders and gifts'
        },
        {
            imgUrl: 'https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/Payments._CB485926359_.png',
            heading: 'Payment options',
            text: 'Edit or add payment methods'
        },
        {
            imgUrl: 'https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/amazon_pay._CB485946857_.png',
            heading: 'Balance in Your Wallet',
            text: 'Add money to your balance'
        },
        {
            imgUrl: 'https://m.media-amazon.com/images/G/31/x-locale/cs/help/images/gateway/self-service/contact_us._CB623781998_.png',
            heading: 'Contact Us',
            text: ''
        },
        {
            imgUrl: 'https://m.media-amazon.com/images/G/31/AmazonBusiness/YAPATF/amazon_business_yap_atf._CB588250268_.jpg',
            heading: 'Your business account',
            text: 'Sign up for free to save up to 28% with GST invoice and bulk discounts and purchase on credit.'
        },
    ]

    return (
        <div className='flex flex-col text-black px-20'>
            <div className='mt-5'>
                <p className='text-xl font-bold'>You Account</p>
            </div>
            <div className='cards mt-4 flex flex-wrap gap-5'>

                {
                    data.map((item, index) => {
                        return (
                            <Link to={`${item.to}`} key={index} className='shadow-md w-max  p-5 rounded-md hover:bg-gray-200 cursor-pointer gap-3 flex items-center border-[2px] border-gray-300'>
                                <div className='img'>
                                    <img className='' src={`${item.imgUrl}`} alt='Your Account' width={"60px"} loading='lazy' />
                                </div>
                                <div className='text'>
                                    <p>{item.heading}</p>
                                    <p className='text-sm text-gray-600 min-w-28 w-56 '>{item.text}</p>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Account