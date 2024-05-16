import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { useCart } from '@/providers/CartProvider'
import CartListItem from '@/components/cartListItem';
import Button from '@/components/Button';


const Cart = () => {

  const {items,total} = useCart();

  return (
    <View style={{padding:10}}>
    <FlatList 
    data={items}
    renderItem={({item})=>
    <CartListItem key={item.id} cartItem={item}/>}
    contentContainerStyle={{padding:10,gap:10}}
    />
    <Text style={{marginTop:20,fontSize:20,fontWeight:"500"}}>Total : ${total}</Text>
    <Button text='Checkout'/>
    </View>
  )
}

export default Cart