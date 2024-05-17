import { View, Text, StyleSheet, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import Button from '@/components/Button'
import { defaultImage } from '@/components/ProductListItem';
import Colors from '@/constants/Colors';
import * as ImagePicker from 'expo-image-picker';
import { Stack } from 'expo-router';

const CreateProductScreen = () => {

  const [name,setName] = useState("");
  const [price,setPrice] = useState("");
  const [image, setImage] = useState<string | null>(null);

  const [errors,setErrors] = useState("");

  const resetFields = () =>
  {
      setName("");
      setPrice("");
  }

  const validateInput = () =>
  {
      setErrors("")
      if(!name){
        setErrors("Name is required");
        return false;
      }
      if(!price){
        setErrors("Price is required");
        return false
      }
      if(isNaN(parseFloat(price))){
        setErrors("Price is not a number");
        return false
      }
      return true 
  }

  const onCreate = () =>
  {
    if(!validateInput())
      return
    resetFields()
  }

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });


    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>

      <Stack.Screen options={{title:"Create Product"}} />

      <Image source={{uri:image || defaultImage}} style={styles.image}/>

      <Text style={styles.textButton} onPress={pickImage}>Select Image</Text>
 
      <Text style={styles.label}>Name</Text>
      <TextInput value={name} onChangeText={(val)=>setName(val)} style={styles.input}  placeholder='Name'/>
      <Text style={styles.label}>Price ( $ )</Text>
      <TextInput value={price} onChangeText={(val)=>setPrice(val)} style={styles.input}  placeholder='9.99' keyboardType='numeric'/>
      {<Text style={styles.errors}>{errors}</Text>} 
      <Button text='Create' onPress={onCreate}/>
    </View>
  )
}

const styles = StyleSheet.create(
    {
        container:
        {
            flex:1,
            justifyContent:"center",
            padding:10,
        },
        label:
        {
            color:"grey"
        },
        input:{
          backgroundColor:"white",
          padding:10,
          marginTop:5,
          borderRadius:5,
          marginBottom:20,
        }, 
        errors:
        {
          color:"red"
        },
        image:
        {
          width:"50%",
          aspectRatio:1,
          alignSelf:"center",
        },
        textButton:
        {
          fontWeight:"bold",
          alignSelf:"center",
          marginVertical:10,
          color:Colors.light.tint
        }
    }
)

export default CreateProductScreen