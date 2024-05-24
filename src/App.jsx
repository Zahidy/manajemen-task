import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import Register from "./pages/Register"
import Login from "./pages/Login"

const router = createBrowserRouter([
  {
    path : '/',
    element : <Home/>
  },

  {
    path : '/login',
    element : <Login/>
  },

  {
    path : '/register',
    element : <Register/>
  },

  // {
  //   path : '/kanban',
  //   element : <Kanban/>
  // }
]) 

const App = () => {
  return <RouterProvider router = {router}/>
}

export default App
