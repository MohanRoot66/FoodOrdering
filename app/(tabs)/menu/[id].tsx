import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import products from '@/assets/data/products';
import { defaultImage } from '@/components/ProductListItem';
import Button from '@/components/Button';

const ProductDetails = () => {

  const {id} = useLocalSearchParams();

  const product  = products.find(x=>x.id.toString()===id);

  const sizes = ["S","M","L","XL"]

  const [selectedSize,setSelectedSize] = useState("M");

  function AddtoCart()
  {
    console.warn("Adding to cart ", selectedSize);
  }

  return (
    
    <View style={styles.container}>
      <Stack.Screen  options={{title:product?.name}}/>
      <Image source={{uri:product?.image || defaultImage}} style={styles.image}/>

      <Text>Select Size</Text>
      
        <View style={styles.sizes}>
            {sizes.map((x)=>
            <View style={[styles.size,{backgroundColor:selectedSize===x ? "gainsboro" : "white"}]} key={x}>
              <Text style={[styles.sizeText,{color:selectedSize===x ?"black" : "grey"}]} onPress={()=>setSelectedSize(x)}>{x}</Text>
            </View>)}
        </View>
      
      <Text style={styles.price}>${product?.price}</Text>

      <Button text='Add to cart'  onPress={AddtoCart}/>
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
    price:{
      fontWeight:"bold",
      fontSize:18,
      marginTop:"auto"
    },
    sizes:
    {
      flexDirection:"row",
      justifyContent:"space-around",
      marginVertical:10,
    },
    size:
    {
      width:50,
      aspectRatio:1,
      alignItems:"center",
      justifyContent:"center",
      borderRadius:25,
    },
    sizeText:
    {
      fontSize:20,
      fontWeight:"500"
    }
  }
)

export default ProductDetails