import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export const Store = () => {
    const [data, setData] = useState([])
    
    useEffect(() => {

        products();

        // return function cleanup() {

        // }
    }, [])

    const products = () => {
        fetch("http://localhost:5000/products")
        .then((response) => response.json())
        .then(d => {
            setData(d)
            
        })
    }

    
    return (
        <div className="container">
            <div id="productGrid">
                {data.map((elem) => {
                    // {console.log(elem)}
                return <div key={elem.id} className="product">
                    <Link to={`/store/${elem.id}`}>
                        <img src={elem.image} alt="" />
                        <h3>{elem.title}</h3>
                        <div>
                            <h4>{elem.price}</h4>
                            <h4>{elem.offerPrice}</h4>
                        </div>
                    </Link>
                </div>
            })}
            </div>
        </div>
    )
}

