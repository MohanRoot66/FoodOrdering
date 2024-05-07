import { View, StyleSheet,Text,Image } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors';
import { Product } from '@/tpyes/types';

export const defualtImage = "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png"

interface productProps 
{
    product :  Product
}

const ProductListItem = ({product} : productProps) => {
  return (
    <View style={styles.container}>
        <Image source={{uri:product.image || defualtImage}} alt='Nothing' style={styles.image} resizeMode='contain'/>   
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor:"white",
      padding:10,
      borderRadius:20,
      flex:1,
      maxWidth:"50%"
    },
    title: {
      fontSize: 18,
      fontWeight: '600',
      marginVertical:10,
    },
    image:
    {
      aspectRatio:1,
      width:"100%"
    },
    price:
    {
      color:Colors.light.tint,
      fontWeight:"bold"
    }
  });
  
export default ProductListItem