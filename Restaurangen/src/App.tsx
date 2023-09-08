
import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './Router'
import { restaurantIdContext } from './contexts/restaurantIdContext'



function App() {

  // use ENV for restaurang id. 
  const restaurantId = import.meta.env.VITE_RESTAURANTID;


  return (
    <>
      <restaurantIdContext.Provider value={restaurantId}>
      <RouterProvider router={router}></RouterProvider>
      </restaurantIdContext.Provider>
    </>
  )
}

export default App
