import { Outlet } from "react-router-dom";
import { Footer } from "../layout/Footer.tsx";
import { Navbar } from "../layout/Navbar.tsx";

export const Layout = () => {
	return (
		<>
			<Navbar></Navbar>

			<main>
				<Outlet></Outlet>
			</main>

			<Footer></Footer>
		</>
	);
};
