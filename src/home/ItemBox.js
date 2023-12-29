import React from 'react';
import './ItemBox.css';
import './ItemBox.css';


const ItemBox = ({ itemName, imageUrl }) => {
  return (
    <div className="item-box">
      <img src={imageUrl} alt={itemName} style={{
          width: 80,
          height: 80
        }} />
    </div>
  );
};

export default ItemBox;