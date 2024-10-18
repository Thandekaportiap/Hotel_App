import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import RegisterPage from './UserPages/RegisterPage';
import RegisterAdmin from './AdminPages/RegisterAdmin';
import LogInPage from './UserPages/LogInPage';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import LogInAdmin from './AdminPages/LogInAdmin';
import ContactUsPage from './AdminPages/ContactUsPage';
import AboutUs from './AdminPages/AboutUs';
import LandingPage from './UserPages/LandingPage';
import AdminProfile from './AdminPages/AdminProfile';
import ManageAccommodations from './AdminPages/ManageAccommodations';
import AccommodationsPage from './UserPages/AccommodationsPage';
import FavoritesPage from './UserPages/FavoritesPage';
import NoPage from './UserPages/NoPage';
import Bookings from './AdminPages/Bookings';
import BookingsHistory from './UserPages/BookingsHistory';
import ReadMore from './UserPages/ReadMoreAccommodation';
import UserProfile from './UserPages/UserProfile';
import AddAccommodationForm from './AdminPages/AddAccommodationForm';
import EditAccommodation from './AdminPages/EditAccommodation';
import { useDispatch } from 'react-redux';
import { setUserId, clearUserId } from './features/UsersSlice';

const App = () => {
  const [id, setId] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedUserId = localStorage.getItem('loggedInUserId');
    const savedUserRole = localStorage.getItem('userRole');

    if (savedUserId) {
      setId(savedUserId);
      dispatch(setUserId(savedUserId));
    }
    if (savedUserRole) {
      setUserRole(savedUserRole);
    }
  }, [dispatch]);

  const handleLogin = (userId, role) => {
    setId(userId);
    setUserRole(role);
    localStorage.setItem('loggedInUserId', userId);
    localStorage.setItem('userRole', role);
    dispatch(setUserId(userId));
  };

  const handleLogout = () => {
    setId(null);
    setUserRole(null);
    localStorage.removeItem('loggedInUserId');
    localStorage.removeItem('userRole');
    dispatch(clearUserId());
    navigate('/'); // This line will cause an error if not in a component that has useNavigate
  };

  return (
    <BrowserRouter>
      <Navbar id={id} onLogout={handleLogout} role={userRole} />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login/customer" element={<LogInPage role="Customer" handleLogin={handleLogin} />} />
        <Route path="/login/admin" element={<LogInAdmin role="Admin" handleLogin={handleLogin} />} />
        <Route path="/register/admin" element={<RegisterAdmin />} />
        <Route path="/register/customer" element={<RegisterPage />} />
        <Route path="/contactus" element={<ContactUsPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/adminProfile" element={<AdminProfile userId={id} />} />
        <Route path="/bookings" element={<Bookings selectUserId={id} />} />
        <Route path="/manageaccommodations" element={<ManageAccommodations userId={id} />} />
        <Route path="/editaccommodation/:id" element={<EditAccommodation userId={id} />} />
        <Route path="/accommodations" element={<AccommodationsPage customerId={id} />} />
        <Route path="/:id" element={<ReadMore customerId={id} />} />
        <Route path="/favorites" element={<FavoritesPage customerId={id} />} />
        <Route path="/bookinghistory" element={<BookingsHistory />} />
        <Route path="/userprofile" element={<UserProfile userId={id} />} />
        <Route path="/addaccommodation" element={<AddAccommodationForm userId={id} />} />
        <Route path="*" element={<NoPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
