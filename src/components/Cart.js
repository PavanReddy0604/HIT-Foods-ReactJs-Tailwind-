import { useDispatch, useSelector } from "react-redux"
import RestaurantCard from "./Restaurant"
import {clearCart} from "../utils/cartSlice"

export const Cart = () => {
    const cartItems = useSelector((store) => store.cartReducer.cartItems)
    const dispatch=useDispatch()

    const handleClearCart= ()=>{
        console.log("clearing all items from store")
        dispatch(clearCart())
    }
    return (
        <div>
            <div className="flex justify-between m-4 ">
            <h1 className="text-center font-bold text-2xl "> Cart Page</h1>
            <button className="bg-gray-100 px-4 py-3 mx-3 rounded-lg border  hover:cursor-pointer" 
            onClick={handleClearCart}>Clear Cart</button>
            </div>
            {console.log('loading cart items', cartItems)}
            <div className="flex flex-wrap">
            {
                cartItems.map((rest, index)=>{
                    return <RestaurantCard key={index} res={rest}/>
                })
            }
            </div>
        </div>
    )
}