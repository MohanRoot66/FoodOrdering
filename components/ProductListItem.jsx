import { View, StyleSheet,Text,Image, Pressable, Linking } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors';
import { Product } from '@/tpyes/types';
import { Link, useSegments } from 'expo-router';

export const defaultImage = "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png"

const ProductListItem = ({product}) => {

  const segments = useSegments();
  
  return (
    <Link href={`/${segments[0]}/menu/${product.id}`} asChild>
      <Pressable style={styles.container}>
          <Image source={{uri:product.image || defaultImage}} alt='Nothing' style={styles.image} resizeMode='contain'/>   
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.price}>${product.price}</Text>
      </Pressable>
    </Link>
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