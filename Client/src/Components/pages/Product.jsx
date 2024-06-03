import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { MdOutlineNavigateNext } from 'react-icons/md';
import { GrFormPrevious } from 'react-icons/gr';
import { current } from '@reduxjs/toolkit';
import { useState } from 'react';
import Suggestion from '../Outlets/Suggestion';
import { useDispatch } from 'react-redux';
import { storeProducts } from '../Store/cartSlice';

function Product() {

    const dispatch = useDispatch();
    const [currentLength, setCurrentLength] = useState(0);
    const products = useSelector((state) => state.product.products);
    const { id } = useParams();
    const [selectedProduct,setSelectedProduct]=useState(null);

    // TODO: Add fetch fuction to fetch sleceted product

    useEffect(() => {
        // Fetch the selected product from the server
        if (products.length === 0) {
            setSelectedProduct(products.find((product) => product.id == id));
        }
        else{
            const res = fetch(`https://dummyjson.com/products/${id}`).then((res) => res.json()).then((data) => {
                setSelectedProduct(data);
            })
        }



    },[id])

    if (!selectedProduct) {
        // Handle the case where the product is not found
        return <div className="text-center mt-10">Product not found!</div>;
    }

    const NextHandler = () => {
        if (selectedProduct.images && currentLength < selectedProduct.images.length - 1) {
            setCurrentLength(currentLength + 1);
        } else {
            setCurrentLength(0);
        }
    };

    const prevhandler = () => {
        if (currentLength > 0) {
            setCurrentLength(currentLength - 1);
        } else {
            setCurrentLength(selectedProduct.images.length - 1);
        }
    };


    // Add to Cart Handler to handle the product addition to the cart
    const AddtoCartHandler = (product) => {
        dispatch(storeProducts(product));
    };

    return (
        <>
            <div className="flex justify-center items-center mt-[-60px] h-screen overflow-hidden">
                <div className="flex justify-between w-3/4">
                    <div className="w-1/2 relative overflow-hidden">
                        <img
                            src={selectedProduct.images[currentLength]}
                            alt="thumbnail"
                            className="rounded-lg shadow-md"
                        />
                        <GrFormPrevious onClick={prevhandler} className="cursor-pointer absolute top-[45%] text-blue-700 text-3xl left-5" />
                        <MdOutlineNavigateNext onClick={NextHandler} className="cursor-pointer absolute top-[45%] text-blue-700 text-3xl right-5" />
                    </div>
                    <div className="w-1/2 p-8">
                        <h1 className="text-3xl font-bold mb-2">{selectedProduct.title}</h1>
                        <p className="text-xl font-semibold text-gray-900">${selectedProduct.price}</p>
                        <p className="text-md text-gray-700 mt-2">{selectedProduct.description}</p>
                        <p className="text-sm text-gray-500 mt-2">Rating: {selectedProduct.rating} ⭐</p>
                        <p
                            className={`text-sm font-medium my-1 ${selectedProduct.stock > 0 ? 'text-green-600' : 'text-red-500'
                                }`}
                        >
                            {selectedProduct.stock > 0
                                ? `${selectedProduct.stock} In Stock`
                                : 'Out of Stock'}
                        </p>
                        <button onClick={()=>AddtoCartHandler(selectedProduct)}  className='px-3 float-end bg-blue-600 rounded-lg text-white font-semibold py-1' type="button">Add to cart</button>
                        <button className='px-3 float-end mx-3 bg-blue-600 rounded-lg text-white font-semibold py-1' type="button">Checkout</button>
                    </div>
                </div>
            </div>
            <h1 className='text-3xl text-center mb-10 font-bold my-2'>Suggestion for you</h1>
            <Suggestion product={selectedProduct} />
        </>
    );
}

export default Product;
