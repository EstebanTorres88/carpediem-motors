import { Routes, Route } from "react-router-dom"
import { Layout } from "../features/shared/layout/Layout"
import { Home } from "../features/home/pages/Home.tsx"
import { Cars } from "../features/cars/pages/Cars.tsx"

const App = () => {
  return (

    <Routes>
      <Route element={<Layout></Layout>}>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/cars" element={<Cars></Cars>}></Route>
        <Route path="/"></Route>
        <Route path=""></Route>
        <Route path=""></Route>

      </Route>

    </Routes>







  )
}

export default App
