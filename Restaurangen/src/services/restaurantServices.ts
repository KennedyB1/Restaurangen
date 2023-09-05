import axios from "axios"

interface IRestaurant {
  name: string;
  address: {
    street: string;
    zip: string;
    city: string;
  };
}

export interface IBooking {
  restaurantId: string;
  date: string;
  time: string;
  numberOfGuests: number;
  customer: {
    name: string;
    lastname: string;
    email: string;
    phone: string;
  };
}

export interface IBookingUpdate {
  id: string;
  restaurantId: string;
  date: string;
  time: string;
  numberOfGuests: number;
  costumerId: string;
}

const BASE_URL = 'https://school-restaurant-api.azurewebsites.net';

// SKAPA RESTAURANG. GÖR ENDAST EN GÅNG!

export const createRestaurant = async(restaurant: IRestaurant) => {
  try{
    const response = await axios.post<IRestaurant>(`${BASE_URL}/restaurant/create`, restaurant)

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
    return response.data;
  }
  catch(error){
    console.log(error)
  }
}