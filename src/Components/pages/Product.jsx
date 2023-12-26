import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Product() {
    const products = useSelector((state) => state.product.products); // Corrected the path to products
    const { id } = useParams();

    console.log(products);
    const selectedProduct = products?products.find((product) => product.id === id):null;
    if (!selectedProduct) {
        // Handle the case where the product is not found
        return <div>Product not found!</div>;
    }

    return (
        <>
            {selectedProduct && (
                <div key={selectedProduct.id} className="group relative">
                    <div className="relative aspect-h-1 aspect-w-1 w-full rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <img
                            src={selectedProduct.thumbnail}
                            alt="thumbnail"
                            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        />
                        <div className="absolute top-3 left-[-10px] bg-blue-600 p-2 rounded-e-md">
                            {Math.floor(selectedProduct.discountPercentage)}% discount
                        </div>
                    </div>
                    <div className="mt-4 flex justify-between">
                        <div>
                            <h3 className="text-md font-semibold">
                                <a href="/">
                                    <span aria-hidden="true" className="absolute inset-0" />
                                    {selectedProduct.title}
                                    <p
                                        className={`text-sm font-medium my-1 ${selectedProduct.stock > 0 ? 'text-green-600' : 'text-red-500'
                                            }`}
                                    >
                                        {selectedProduct.stock > 0 ? 'In Stock' : 'Out of Stock'}
                                    </p>
                                </a>
                            </h3>
                            <h2 className="text-sm text-gray-700">{selectedProduct.description}</h2>
                            <p className="mt-1 text-sm text-gray-500">Rating: {selectedProduct.rating} ⭐</p>
                        </div>
                        <p className="text-sm font-medium text-gray-900">${selectedProduct.price}</p>
                    </div>
                </div>
            )}
        </>
    );
}

export default Product;
