import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from "./MainLayout/MainLayout"
import Crosswords from "../modules/Crosswords/Crosswords"
import SignUp from "../modules/Auth/SignUp/SignUp"

function Router() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<Crosswords />} />
          <Route path='/sign_up' element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
