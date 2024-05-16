import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { useCart } from '@/providers/CartProvider'
import CartListItem from '@/components/cartListItem';


const Cart = () => {

  const {items} = useCart();

  return (
    <FlatList 
    data={items}
    renderItem={({item})=>
    <CartListItem key={item.id} cartItem={item}/>}
    contentContainerStyle={{padding:10,gap:10}}
    />
  )
}

export default Cart