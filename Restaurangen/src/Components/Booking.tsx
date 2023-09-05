import { useContext } from "react"
import { restaurantIdContext } from "../contexts/restaurantIdContext"

export const Booking = () => {
    const restaurantId = useContext(restaurantIdContext);
    console.log(restaurantId);
    return <>Booking</>
}