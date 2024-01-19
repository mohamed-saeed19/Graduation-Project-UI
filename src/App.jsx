import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
// import '@fortawesome/fontawesome-free/css/all.min.css'
import {RouterProvider, createBrowserRouter } from 'react-router-dom'
import WelcomeThird from './Components/Welcome/WelcomeThird'
import WelcomeFirst from './Components/Welcome/WelcomeFirst'
import WelcomeSecond from './Components/Welcome/WelcomeSecond'
import Login from './Components/Auth/Login'
import Register from './Components/Auth/Register'
import FirstPage from './Components/FirstPage/FirstPage.jsx'
import { ForgetPassword } from './Components/ForgetPassword/ForgetPassword.jsx'
import { ForgetPasswordSecond } from './Components/ForgetPassword/forgetPasswordSecond.jsx'
import Homepage from './Components/HomePage/HomePage'
import Newrecord from "./Components/NestedRouter/NewRecord/Newrecord"
import Account from "./Components/NestedRouter/Account/Account"
import History from "./Components/NestedRouter/History/History"
import Suggestion from "./Components/NestedRouter/Suggestion/Suggestion"
import Language from "./Components/NestedRouter/Language/Language"
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <WelcomeFirst />
    },
    {
      path: "/welcomesecond",
      element: <WelcomeSecond />,
    },
    {
      path: "/homepage",
      element: <Homepage />,
      children: [
        {
          path: "",
          element: <Newrecord />,
        },
        {
          path: "account",
          element: <Account/>,
        },
        {
          path: "history",
          element: <History />,
        },
        {
          path: "suggestion",
          element: <Suggestion />,
        },
        {
          path: "language",
          element: <Language />,
        },
      ],
    },
    {
      path: "/welcomethird",
      element: <WelcomeThird />,
    },
    {
      path: "/firstpage",
      element: <FirstPage />,
    },
    {
      path: "/forgetpassword",
      element: <ForgetPassword />,
    },
    {
      path: "/forgetpasswordsecond",
      element: <ForgetPasswordSecond />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <>

      

      <RouterProvider router={router} />
    </>
  )
}

export default App
