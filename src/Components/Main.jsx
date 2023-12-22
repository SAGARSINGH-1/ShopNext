import React, { useEffect, useState } from 'react';

function Main() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
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
    }, []);

    return (
        <>
            <h1 className='text-5xl text-center my-7'>All Products</h1>
            <div className='flex flex-wrap justify-center items-center'>
                {products.map((product) => (
                    <div className="col-3 w-[45%] flex items-center justify-center" key={product.id}>
                        <div className="card">
                            <img
                                src={product.thumbnail}
                                className="card-img-top"
                                alt={product.name}
                            />
                            <div className="card-body">
                                <h5 className="card-title font-bold">{product.category}</h5>
                                <p className="card-text">{product.description}</p>
                                <p className="card-text">Prize: ${product.price}</p>
                                <p className="card-text">rating:{product.rating}</p>
                                <p className="card-text">Brand name:{product.brand}</p>
                                <p className="card-text">Stock: {product.stock}</p>
                                <a href="#" className="btn btn-primary">
                                    Add to cart
                                </a>
                            </div>
                        </div>
                    </div>
                ))}: (
                <h1>Loading...</h1>
                )
            </div>
        </>
    );
}

export default Main;
