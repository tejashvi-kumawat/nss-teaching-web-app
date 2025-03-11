import { Route, Routes } from "react-router-dom";
import { useContext } from "react";
import "./App.css";
import ComingSoon from "./pages/ComingSoon/ComingSoon.jsx";
// import AboutUs from "./pages/AboutUs/AboutUs.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
// import Home from "./pages/Home/Home.jsx";
// import Teaching from "./pages/Teaching/Teaching.jsx";
// import Login from "./pages/Login/Login.jsx";
// import Register from "./pages/SignUp/page.jsx";
// import ForStudents from "./pages/ForStudents/ForStudents.jsx"
// import Trustees from "./pages/Trustees/Trustees.jsx";
// import GetInvolved from "./pages/GetInvolved/GetInvolved.jsx";
// import Downloads from "./pages/Downloads/Downloads.jsx";
import { DataContext } from "./store/Data";
// import ContactUs from "./pages/ContactUs/ContactUs.jsx"
// import Profile from "./pages/Profile/Profile.jsx";
// import Loader from "./components/Loader/Loader.jsx"
function App() {
  const { isAuth, workshops } = useContext(DataContext);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/*" element={<ComingSoon />} />
        {/* <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/" element={<Home />} />
        <Route path="/trustees" element={<Trustees />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/for-students" element={<ForStudents />} />
        <Route path="/loader" element={<Loader />} /> */}

        {/* {workshops &&
          workshops.map((workshop, index) => {
            return (
              <Route
                path={`events/workshops/${workshop.title}`}
                key={index}
                element={<Workshops details={workshop} />}
              />
            );
          })
        } */}

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
