import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
    const [title,setTitle] = useState('');
    const [price, setPrice] = useState('');
    const navigate = useNavigate();
    
    const saveProduct = async(e) => {
        e.preventDefault();
        const product = {title, price};
        // console.log(product);
        await fetch('http://localhost:8080/products', {
            method: "POST",
            body: JSON.stringify(product),
            headers:{
                'Content-Type': 'application/json'
            }
        });
        navigate("/");

    }
    return (
        <div>
            <h2 className="title">Add Product</h2>
            <form onSubmit={saveProduct}>
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
                        <button className="button is-primary mt-2" >Save</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddProduct;