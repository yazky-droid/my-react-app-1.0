import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const EditProduct = () => {
    const [title,setTitle] = useState('');
    const [price, setPrice] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();
    
    useEffect(() => {
        getProductById();
    }, []); 

    const getProductById = async() => {
        const response = await fetch(`http://localhost:8080/products/${id}`);
        const data = await response.json();
        setTitle(data.title);
        setPrice(data.price);
    }

    const updateProduct = async(e) => {
        e.preventDefault();
        const product = {title, price};
        // console.log(product);
        await fetch(`http://localhost:8080/products/${id}`, {
            method: "PUT",
            body: JSON.stringify(product),
            headers:{
                'Content-Type': 'application/json'
            }
        });
        navigate("/");

    }
    return (
        <div>
            <h2 className="title">Edit Product</h2>
            <form onSubmit={updateProduct}>
                <div className="field">
                    <label className="label">Title</label>
                </div>
                <div className="control">
                    <input className="input" value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Title" />
                </div>

                <div className="field">
                    <label className="label">Price</label>
                </div>
                <div className="control">
                    <input className="input" value={price} onChange={(e) => setPrice(e.target.value)} type="text" placeholder="Price" />
                </div>
                
                <div className="field">
                    <div className="control">
                        <button className="button is-primary mt-2" >Update</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EditProduct;