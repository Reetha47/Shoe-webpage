

import { Routes, Route } from "react-router-dom"
import HomePage from './Pages/HomePage';
import About from './Pages/About';
import Shoes from './Pages/Shoes';
import PagenotFound from './Pages/PagenotFound';
import Layout from "./Components/Layout";
import ShoeDetails from "./Pages/ShoeDetails";
import AdminLayout from "./Components/AdminLayout";
import DashBoard from "./Pages/Admin/DashBoard";
import Income from "./Pages/Admin/Income";
import Review from "./Pages/Admin/Review";
import Shoe from "./Pages/Admin/Shoe";
import AdminShoeDetail from "./Pages/Admin/AdminShoeDetail";
import AdminShoeInfo from "./Pages/Admin/AdminShoeInfo";
import AdminShoePrcing from "./Pages/Admin/AdminShoePrcing";
import AdminShoePhotos from "./Pages/Admin/AdminShoePhotos";



function App() {


  return (


    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/shoes' element={<Shoes />} />
        <Route path='/shoes/:id' element={<ShoeDetails />} />
        <Route path='*' element={<PagenotFound />} />

        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<DashBoard />} />
          <Route path="income" element={<Income />} />
          <Route path="review" element={<Review />} />
          <Route path="shoe" element={<Shoe />} />

          <Route path="/admin/shoe/:id" element={<AdminShoeDetail />}>
            <Route index element={<AdminShoeInfo />} />
            <Route path='pricing' element={<AdminShoePrcing/>} />
            <Route path='photos' element={<AdminShoePhotos/>}/>

          </Route>
        </Route>



      </Route>


    </Routes>


  );
}

export default App;
