import React, { useEffect } from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { useState } from 'react';

function Suggestion(props) {
    const selectedProduct = props;
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`https://dummyjson.com/products/category/${selectedProduct.product.category}/`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((result) => {
                setProducts(result.products);
                console.log(result);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    }, [])
    return (
        <>
            <Slide className="">
                {
                    products.map((product) => {
                        return (
                            <div className="each-slide flex justify-center">
                                <div className="flex justify-between w-3/4">
                                    <div className="w-1/2 relative overflow-hidden">
                                        <img
                                            src={product.images[0]}
                                            alt="thumbnail"
                                            className="rounded-lg shadow-md"
                                        />
                                    </div>
                                    <div className="w-1/2 p-8">
                                        <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
                                        <p className="text-xl font-semibold text-gray-900">${product.price}</p>
                                        <p className="text-md text-gray-700 mt-2">{product.description}</p>
                                        <p className="text-sm text-gray-500 mt-2">Rating: {product.rating} ⭐</p>
                                        <p
                                            className={`text-sm font-medium my-1 ${product.stock > 0 ? 'text-green-600' : 'text-red-500'
                                                }`}
                                        >
                                            {product.stock > 0
                                                ? `${product.stock} In Stock`
                                                : 'Out of Stock'}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </Slide>
            <h1 className='mb-10'></h1>
        </>
    )
}

export default Suggestion