
import { RouterProvider } from 'react-router-dom'
import { createRestaurant, getRestaurant } from './services/restaurantServices'

import './App.css'
import { router } from './Router'

function App() {
  const restaurantId = '64f6d9c5264e4838c0d69d38';

  const restaurant = getRestaurant(restaurantId);

  console.log(restaurant);

  // createRestaurant({
  //   "name": "Hamburgerian",
  //   "address": {
  //     "street": "Hamngatan 1",
  //     "zip": "123 45",
  //     "city": "Dalsjöfors"
  //   }
  // })




  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
