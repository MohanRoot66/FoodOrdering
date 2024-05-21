import { View, Text, FlatList } from 'react-native'
import React from 'react'
import orders from '@/assets/data/orders'

const index = () => {
  return (
    <FlatList
    data={orders} 
    renderItem={({item})=><Text>{item.id}</Text>}/>
  )
}

export default index