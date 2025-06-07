import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { storeProducts } from '../Store/productSlice';
import FilterBar from '../Outlets/FilterBar';
import axios from '../../axios';

function Home() {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        axios.get('http://localhost:2000/api/product')
            .then((response) => {
                if (!response) {
                    throw new Error('Network response was not ok');
                }
                // return response.json();
                return response.data
            })
            .then((result) => {
                setProducts(result);
                dispatch(storeProducts(result));
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    }, []);

    return (
        <>
            <div>
                <div className="bg-white">
                    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

                        <div>
                            <FilterBar />
                        </div>

                        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-11">
                            {products.map((product) => (
                                <Link key={product._id} to={`/product/${product._id}`}>
                                    <div className="group relative">
                                        <div className="relative aspect-h-1 aspect-w-1 w-full rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                            <img
                                                src={product.thumbnail}
                                                alt="thumbnail"
                                                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                            />
                                            <div className='absolute top-3 left-[-10px] text-white bg-blue-600 p-2 rounded-e-md'>{Math.floor(product.discountPercentage ? product.discountPercentage : 2)}% discount</div>
                                        </div>
                                        <div className="mt-4 flex justify-between">
                                            <div>
                                                <h3 className="text-md font-semibold">
                                                    <a href="/">
                                                        <span aria-hidden="true" className="absolute inset-0" />
                                                        {product.title}
                                                        <p className={`text-sm font-medium my-1 ${product.stock > 0 ? "text-green-600" : "text-red-500"}`}>{product.stock > 0 ? "In Stock" : "Out of Stock"}</p>
                                                    </a>
                                                </h3>
                                                <h2 className='text-sm text-gray-700'>{product.description}</h2>
                                                <p className="mt-1 text-sm text-gray-500">Rating: {product.rating} ⭐</p>
                                            </div>
                                            <p className="text-sm font-medium text-gray-900">${product.price}</p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home