import React from 'react'

const GoodsCard = (props) => {
  return (
        <div className="goods-card">
          <img src={props.image} alt={props.name} style={{maxHeight:200}}/>
          <h3>{props.name}</h3>
          <p>Ціна: {props.price} грн</p>
        </div>
    );
}

export default GoodsCard