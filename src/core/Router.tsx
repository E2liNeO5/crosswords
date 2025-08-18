import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from "./MainLayout/MainLayout"
import Crosswords from "../modules/Crosswords/Crosswords"

function Router() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<Crosswords />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
