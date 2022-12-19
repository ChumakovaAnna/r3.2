import React from 'react';

export default function Item( { item } ) {
  console.log(item);

  const getTitle = (title) => {
    return title.length > 50 ? title.slice(0,50) + '...' : title;
  }

  const getPrice = (currency_code, price) => {
    const currency = {
      USD: '$',
      EUR: '€',
    }
    return currency[currency_code] ? `${currency[currency_code]}${price}` : `${price} GBP`;
  }

  const getClassQuantity = (quantity) => {
    let className = 'item-quantity level-';
    if (quantity < 10) {
      return className += 'low';
    }
    if (quantity <= 20) {
      return className += 'medium';
    }
    if (quantity > 20) {
      return className += 'high';
    }
  }

  return (
    <div className='item'>
      <div className='item-image'>
        <a href={item.url}>
          <img src={item.MainImage.url_570xN} alt={item.title}></img>
        </a>
      </div>
      <div className='item-details'>
        <p className='item-title'>{getTitle(item.title)}</p>
        <p className='item-price'>{getPrice(item.currency_code, item.price)}</p>
        <p className={getClassQuantity(item.quantity)}>{item.quantity} left</p>
      </div>
    </div>
  )
}