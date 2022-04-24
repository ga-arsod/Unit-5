import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export const ProductDetails = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({})

    useEffect(() => {
        products();

    }, []);

    const products = () => {
        fetch(`http://localhost:5000/products/${id}`)
        .then((response) => response.json())
        .then(d => {
            setProduct(d)
            
        })
    }

    console.log(product)

    return (
        <div className="container">
            
            <div className="productDetail">
                <img src={product.image} alt="" />
                <h2>{product.title}</h2>
                <div>
                    <h3>{product.price}</h3>
                    <h3>{product.offerPrice}</h3>
                </div>
                <button id="addCart">Add To Cart</button>
                <p>{product.desc}</p>
            </div>
            
        </div>
    )
}