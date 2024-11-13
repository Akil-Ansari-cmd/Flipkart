// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Flipkart from "./Flipkart";
import Offers from "./Flipkart/Offers";
import Mobile from "./Flipkart/Mobile";
import Electronic from "./Flipkart/Electronic";
import Laptop from "./Flipkart/Laptop";
import Error from "./Flipkart/Error";
import Appliances from "./Flipkart/Appliances";
import Fashion from "./Flipkart/Fashion";
import Kids from "./Flipkart/Kids";
import Furniture from "./Flipkart/Furniture";
import Bookings from "./Flipkart/Bookings";
import Grocery from "./Flipkart/Grocery";
import Flipkartlogin from "./Flipkart/Flipkartlogin";
import Notification from "./Flipkart/Notification";
import Flipkartheader from "./Flipkart/Flipkartheader";
import Product from "./Flipkart/Product";
import Detail from "./Flipkart/Detail";
function App() {
  return (
   <>
   <BrowserRouter>
   
    <Routes>
    
      <Route path="/" element={<Flipkart/>}/>
      <Route path="/Offers" element={<Offers/>}/>
      <Route path="/Mobile" element={<Mobile/>}/>
      <Route path="/Electronic" element={<Electronic/>}/>
      <Route path="/Laptop" element={<Laptop/>}/>
      <Route path="/Fashion" element={<Fashion/>}/>
      <Route path="/Kids" element={<Kids/>}/>
      <Route path="/Appliances" element={<Appliances/>}/>
      <Route path="/Furniture" element={<Furniture/>}/>
      <Route path="/Bookings" element={<Bookings/>}/>
      <Route path="/Grocery" element={<Grocery/>}/>
      <Route path="*" element={<Error/>}/>
      <Route path="/login" element={<Flipkartlogin/>}/>
      <Route path="/notification" element={<Notification/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path="/detail/:id" element={<Detail/>}/>
    </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
