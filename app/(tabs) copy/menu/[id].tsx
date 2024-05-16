import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Stack, useLocalSearchParams, useRouter } from 'expo-router'
import products from '@/assets/data/products';
import { defaultImage } from '@/components/ProductListItem';
import Button from '@/components/Button';
import { useCart } from '@/providers/CartProvider';
import { PizzaSize } from '@/tpyes/types';

const ProductDetails = () => {

  const {id} = useLocalSearchParams();

  const {onAddItem} = useCart();

  const router = useRouter();
 
  const product  = products.find(x=>x.id.toString()===id);

  return (
    
    <View style={styles.container}>
      <Stack.Screen  options={{title:product?.name}}/>
      <Image source={{uri:product?.image || defaultImage}} style={styles.image}/>
      <Text style={styles.title}>${product?.name}</Text>
      <Text style={styles.price}>${product?.price}</Text>
    
      {/* <Button text='Add to cart'  onPress={addItemToCart}/> */}
    </View>
  )
}

const styles = StyleSheet.create(
  {
    container:{
      backgroundColor:"white",
      flex:1,
      padding:10,
    },
    image:{
      width:"100%",
      aspectRatio:1
    },
    title:
    {
      fontSize:20,
      fontWeight:"bold",
    },
    price:{
      fontWeight:"bold",
      fontSize:18,
    },
  }
)

export default ProductDetails