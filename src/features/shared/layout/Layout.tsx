import { Outlet } from "react-router-dom"
import { Navbar } from "../layout/Navbar.tsx"
import { Footer } from "../layout/Footer.tsx"

export const Layout = () => {
  return (
    <>
      <Navbar></Navbar>

      <main>
        <Outlet></Outlet>

      </main>

      <Footer></Footer>
    </>
  )
}

