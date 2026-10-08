import { Route, Routes } from "react-router-dom";
import { CarDetail } from "../features/cars/pages/CarDetail.tsx";
import { Cars } from "../features/cars/pages/Cars.tsx";
import { Contact } from "../features/contact/pages/Contact.tsx";
import { Home } from "../features/home/pages/Home.tsx";
import { NotFound } from "../features/shared/components/NotFound.tsx";
import { Layout } from "../features/shared/layout/Layout";

const App = () => {
	return (
		<Routes>
			<Route element={<Layout></Layout>}>
				<Route path="/" element={<Home></Home>}></Route>
				<Route path="/cars" element={<Cars></Cars>}></Route>
				<Route path="/cars/:id" element={<CarDetail></CarDetail>}></Route>
				<Route path="/contact" element={<Contact></Contact>}></Route>
				<Route path="*" element={<NotFound></NotFound>}></Route>
			</Route>
		</Routes>
	);
};

export default App;
