import React from 'react';
import Item from './Item';

export default function Listing( { items = [] } ) {
  return (
    <div className='item-list'>
      {items.map(item => item.state ==='active' && <Item item={item} key={item.listing_id}></Item>)}
    </div>
  )
}