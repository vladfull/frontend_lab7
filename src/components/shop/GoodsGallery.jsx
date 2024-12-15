import React from 'react'
import GoodsCard from './GoodsCard';

const GoodsGallery = () => {
    const goods = [
        { name: 'Хмара щастя', price: 7500, image: 'https://buketland.ua/image/cache/catalog/flowers/buket-tsvetov-oblako-schastya-030210-1-800x800.jpg' },
        { name: 'Місті Бабблз', price: 5250, image: 'https://camellia-market.com.ua/image/cache/catalog/03.01/35mis-auto_width_1333.jpg' },
        { name: 'Рожевий зефір', price: 700, image: 'https://flower-power.com.ua/wp-content/uploads/2023/12/1-rozovaya-gortenziya-1-1.jpg' },
        { name: 'Асорті', price: 1500, image: 'https://elitbuket.com/wp-content/uploads/2020/07/img_4771.jpg' },
        { name: 'Весільний', price: 990, image: 'https://camellia-market.com.ua/image/cache/catalog/5.08/25558-auto_width_1333.jpg' },
        { name: 'Буремне море', price: 13500, image: 'https://static.insalescdn.com/images/products/1/5899/743569163/3446-1-15-gortenziy-u-buketi-buremne-more.jpg' },
    ];
    
    return (
      <div className="goods-gallery">
        {goods.map((item, index) => (
          <GoodsCard key={index} name={item.name} price={item.price} image={item.image} />
        ))}
      </div>
    );
}

export default GoodsGallery