
import { RouterProvider } from 'react-router-dom'

import './App.css'
import { router } from './Router'
import { restaurantIdContext } from './contexts/restaurantIdContext'

function App() {
  const restaurantId = '64f6d9c5264e4838c0d69d38';

  return (
    <>
      <restaurantIdContext.Provider value={restaurantId}>
      <RouterProvider router={router}></RouterProvider>
      </restaurantIdContext.Provider>
    </>
  )
}

export default App
