import React, { useState,useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import AllProduct from './AllProduct';
//import useFirebase from '../Hook/useFirebase';
const AllProducts = () => {
    const [products,setproducts]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>setproducts(data))
    },[])

    return (
        <>
        <table className="table">
               <thead className="thead-light">
                 <tr>
                   {/* <th>Product ID</th> */}
                   <th>Product Name</th>
                   <th>Category</th>
                   <th>Price</th>
                   {/* <th>Actions</th> */}
                 </tr>
       
               </thead>
               <tbody>
                 {
                   products.map((product)=>{
                       return <AllProduct  key={product._id} product={product}/>
                   })
                 }
       
               </tbody>
             </table>
              </>
    );
};

export default AllProducts;