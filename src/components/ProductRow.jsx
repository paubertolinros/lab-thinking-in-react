import React from 'react';

function ProductRow({ info }) {
  console.log("info", info)

  return (
    <tr className="tr-tbody">
      <td className="td-tbody">{info.category}</td>
      {info.inStock ? <td className="td-tbody">{info.name}</td> : <td className="red td-tbody">{info.name}</td>}
      <td className="td-tbody">{info.price}</td>
    </tr>
  );
}

export default ProductRow;