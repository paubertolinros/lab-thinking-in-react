import React from 'react';

function SearchBar({searchFunc, productL, isChecked, handleCheckbox}) {

  return (
    <div>
     <input type="text" value={productL} onChange={(e)=> searchFunc(e.target.value)}/>
     <label><input type="checkbox" onChange={()=> handleCheckbox(isChecked)}/> Only show product in stock </label>
    </div>
  );
}

export default SearchBar;