import axios from "axios"
import { IBooking, IBookingUpdate, IRestaurant } from "../interfaces/interfaces";


const BASE_URL = import.meta.env.VITE_BASE_URL
// SKAPA RESTAURANG. GÖR ENDAST EN GÅNG!

export const createRestaurant = async(restaurant: IRestaurant) => {
  try{
    const response = await axios.post<IRestaurant>(`${BASE_URL}/restaurant/create`, restaurant)

    console.log(response.data)

    return response.data;
  }
  catch(error){
    console.log(error)
  }
}

// INFO RESTAURANG

export const getRestaurant = async(restaurantId: string) => {
  try{
    const response = await axios.get(`${BASE_URL}/restaurant/${restaurantId}`)
    return response.data;
  }
  catch(error){
    console.log(error)
  }
}

// BOKA
export const createBooking = async(booking: IBooking) => {
  try{
    const response = await axios.post(`${BASE_URL}/booking/create`, booking)

    return response.data;
  }
  catch(error){
    console.log(error)
  }
}

// HÄMTA ALLA BOKNINGAR
export const getBookings = async(restaurantId: string) => {
  try{
    const response = await axios.get(`${BASE_URL}/booking/restaurant/${restaurantId}`)
    return response.data;
  }
  catch(error){
    console.log(error)
  }
} 

// TA BORT BOKNING

export const deleteBooking = async(bookingId: string) => {
  try{
    const response = await axios.delete(`${BASE_URL}/booking/delete/${bookingId}`)
    return response.data;
  }
  catch(error){
    console.log(error)
  }
}

// UPPDATERA BOKNING

export const updateBooking = async(booking: IBookingUpdate) => {
  try{
    const response = await axios.put(`${BASE_URL}/booking/update/${booking.id}`, booking)
    console.log(response)
    return response.data;
  }
  catch(error){
    console.log(error)
  }
}

// HÄMTA KUNDUPPGIFTER

export const getCustomer = async(customerId: string) => {
  try{
    const response = await axios.get(`${BASE_URL}/customer/${customerId}`)
    return response.data;
  }
  catch(error){
    console.log(error)
  }
}