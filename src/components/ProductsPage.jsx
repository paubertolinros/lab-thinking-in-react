import data from './../data.json'
import React, { useState } from 'react';
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

function ProductsPage() {
  const [products, setProducts] = useState(data);
  const [searchProduct, setSarchProduct] = useState("");
  const [isChecked, setIsChecked] = useState(true);

  const handleSearch = (query) => { 
    setSarchProduct(query)
  }
  const handleCheckbox = (checked) => {
    if (checked) {
      const filterProductsByStock = [...products].filter(elem => elem.inStock)
      setProducts(filterProductsByStock)
      setIsChecked(!isChecked)
    } else {
      setProducts(data)
    }
  };

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar searchFunc={handleSearch} productL={searchProduct} isChecked={isChecked} handleCheckbox={handleCheckbox} />
      <table>
        <thead>
          <tr>
            <th> Category </th>
            <th> Name </th>
            <th> Price </th>
          </tr>
        </thead>
        <ProductTable allproducts={products} productL={searchProduct} />
      </table>
    </div>
  );
}

export default ProductsPage;