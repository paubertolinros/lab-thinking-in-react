import React from 'react';
import ProductRow from './ProductRow';

function ProductTable({ allproducts, productL }) {
  console.log(allproducts)

  return (
    <tbody>
      {allproducts.filter(elem => elem.name.toLowerCase().includes(productL.toLowerCase()))
      .map((elem) => {
        return (
          <ProductRow info={elem} key={elem._id} />
        )
     })}
    </tbody>
  );
}

export default ProductTable;