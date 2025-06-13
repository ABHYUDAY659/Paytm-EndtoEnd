import { BrowserRouter,Routes,Route } from "react-router-dom"
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"
import Dashboard from "./pages/Dashboard"
import {SendMoney} from "./pages/SendMoney"
import Pagenotfound from "./pages/pagenotfound"
import axios from "axios"

const App = () => {
  return (
  <>
   <BrowserRouter>
     <Routes>
      <Route path='/signup' element={<Signup/>} />
      <Route path='/signin' element={<Signin/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path = '/send' element={<SendMoney/>} />
      <Route path ="*" element={<Pagenotfound/>}/>
     </Routes>
   </BrowserRouter>
  </>
   
  )
}

export default App
