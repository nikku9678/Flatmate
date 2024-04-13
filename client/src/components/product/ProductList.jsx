import React, { useEffect, useState } from 'react';
import './Product.css';
import Product from './Product';
import axios from 'axios';
import { Base_url } from '../../config';

const ProductList = () => {
  const [prod, setProd] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${Base_url}/user/all-product`, {
          withCredentials: true,
        });
        setProd(response.data.product);
        console.log(prod)
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="product">
        {prod.map((prod) => (
          <Product key={prod._id} id={prod._id} prod={prod} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
