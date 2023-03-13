// import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Header from "./components/Header";
// import About from "./components/About";
// import Contact from "./components/Contact";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import ProductList from "./components/ProductList";

function App() {
  //belajar bikin atau pakai useState
  // const [title, setTitle] = useState("Welcome to My App");
  // const [age, setAge] = useState(20);

  // const [products, setProducts] = useState([
  //   { id: 1, title: 'Product 1', price: 879 },
  //   { id: 2, title: 'Product 2', price: 767 },
  //   { id: 3, title: 'Product 3', price: 987 },
  //   { id: 4, title: 'Product 4', price: 345 },
  //   { id: 5, title: 'Product 5', price: 459 }
  // ]);

  //belajar bikin function arrow function
  // const changeTitle = () => {
  //   setTitle("Title Changed");
  //   setAge(40); 
  // }
  //parsing data dari komponen anak ke komponen induk menggunakan prop sebagai function
  // const deleteProduct = (productId) => {
  //   const newProducts = products.filter(product => product.id !== productId);
  //   setProducts(newProducts);
  // }
  // const [name,setName] = useState('Yazky');


  // useEffect(() => {
  //   console.log('Use Effect Running');
  // }, [name]);

  return (
    <div className="container">
      <Router>
        <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/edit/:id" element={<EditProduct />} />
            {/* <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Router>
      {/* <button onClick={ () => setName('Saputra') }>Change Name</button>
      <p>{ name }</p> */}
    </div>
  );
}

export default App;
