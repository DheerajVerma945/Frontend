import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { AppLayout,Terms, Error,Home ,Game} from './components/index';



function App() {
  const router = createBrowserRouter(
    [{
      path:"/",
      element:<AppLayout />,
      children:[
        {
          path:"/",
          element:<Home />
        },
        {
          path:"/terms",
          element:<Terms />
        },
        {
          path:"/game",
          element:<Game />
        },
        {
          path:"*",
          element:<Error />
        }
      ]
    }]
  )
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
