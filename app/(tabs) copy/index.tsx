import orders from "@/assets/data/orders";
import OrderListItem from "@/components/OrderListItem";
import { Redirect } from "expo-router";
import { FlatList, Text } from "react-native";

export default function OrdersScreen() 
{
    return( 
    <FlatList 
    data={orders}
    renderItem={({item})=><OrderListItem order={item}/>} 
    />)
}