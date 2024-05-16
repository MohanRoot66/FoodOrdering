import { CartItem, Product } from "@/tpyes/types";
import { randomUUID } from "expo-crypto";
import { PropsWithChildren, createContext, useContext, useState } from "react";

interface CartTypes 
{
    items:CartItem[],
    onAddItem : (product:Product,size:CartItem["size"]) =>void;
    updateQuantity : (id:string,quantity:number) => void;
}

export const CartContext = createContext<CartTypes>({
    items:[],
    onAddItem:()=>{},
    updateQuantity:()=>{}
}
);

const CartProvider = ({children}:PropsWithChildren) => {

    const [items,setItems] =  useState<CartItem[]>([])

    const onAddItem = (product:Product,size:CartItem["size"]) =>
    {
        const existingItem = items.find(x=>x.product===product && x.size===size);

        if(existingItem){
            updateQuantity(existingItem.id,1)
            return
        }

        const newItem : CartItem = {
            id:randomUUID(),
            product,
            product_id:product.id,
            quantity:1,
            size
        }

        setItems([...items,newItem])
    }

    const updateQuantity = (id:string, quantity: number) => {
        
        // Create a new array with the updated product
        const updatedItems = items.map((item) => {
            if(item.id===id){
                return {...item,quantity:item.quantity+quantity}
            }
            return item
        }).filter(item=>item.quantity>0);
    
        // Set the state with the new items array
        setItems(updatedItems);
    }
    

    return(
        <CartContext.Provider value={{items,onAddItem,updateQuantity}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart=() => useContext(CartContext);

export default CartProvider

