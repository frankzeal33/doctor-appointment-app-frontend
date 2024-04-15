import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/home/Home';
import FindDoctor from './pages/findDoctor/FindDoctor';
import Booking from './pages/booking/Booking';
import BookingInfo from './pages/bookinginfo/BookingInfo';
import Blog from './pages/blog/Blog';
import BlogItem from './pages/blogitem/BlogItem';
import DoctorInfo from './pages/doctorinfo/DoctorInfo';
import Notify from './pages/notification/Notify';
import Login from './pages/login/Login';
import Profile from './pages/profile/Profile';
import { NotFound } from './pages/notfound/NotFound';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" index element={<Home/>}/>
          <Route path="/find-a-doctor" element={<FindDoctor/>}/>
          <Route path="/appointments" element={<Booking/>}/>
          <Route path="/appointments/:book_id" element={<BookingInfo/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/blog/:id" element={<BlogItem/>}/>
          <Route path="/doctor/:id" element={<DoctorInfo/>}/>
          <Route path="/notifications" element={<Notify/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/*" element={<NotFound/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
