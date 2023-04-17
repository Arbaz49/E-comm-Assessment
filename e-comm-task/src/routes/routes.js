import Feature from "../components/Feature/Feature";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import NewArrivals from "../components/newArrivals/NewArrivals";
import Products from "../components/products/Products";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Signup/SignUp";
import SingleProductPage from "../pages/SingleProductPage/SingleProductPage";
import CartPage from "../pages/cartPage/CartPage";

export const routes = [
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Hero />
        <Products />
        <Feature />

        <NewArrivals/>
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <a href="#products" className="shopbtn">SHOP Now</a>
        </div>
        <Footer />
      </>
    ),
  },
  {
    path:"/products/:id",
    element:<SingleProductPage/>
  },
  {
    path:"/cart",
    element:<CartPage/>
  },{
    path:"/login",
    element:<Login/>
  },{
    path:"/signup",
    element:<SignUp/>
  }
];
