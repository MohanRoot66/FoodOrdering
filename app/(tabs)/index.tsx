import {FlatList } from 'react-native';
import products from '@/assets/data/products';
import ProductListItem from '@/components/ProductListItem';


export default function TabOneScreen() {
  return (
    <>
      <FlatList 
        data={products}
        renderItem={({item})=><ProductListItem  product={item}/>}
        numColumns={2}              
        contentContainerStyle={{gap:10,padding:10}}
        columnWrapperStyle={{gap:10}}
      />
    </>
  );
}

//Without some height and width to the image the Image component in React will not know how to display the Image