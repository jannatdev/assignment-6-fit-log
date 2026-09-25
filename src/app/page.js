import Banner from "@/Component/Banner";
import ProductsPage from "@/Component/HomePage/Excercises";
import Navbar from "@/Component/Navbar";
import { ToastContainer } from "react-toastify";


export default function Home() {
  return(
    <div>
      <Banner/>
      <ProductsPage/>
      <ToastContainer />
    </div>
  ) 
   
;
}
