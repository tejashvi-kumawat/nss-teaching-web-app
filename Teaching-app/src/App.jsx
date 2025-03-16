import { Route, Routes } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import "./App.css";
import ComingSoon from "./pages/ComingSoon/ComingSoon.jsx";
import AboutUs from "./pages/AboutUs/AboutUs.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Loader from "./pages/Loader/Loader.jsx";
// Other imports...
import ForStudents from "./pages/ForStudents/ForStudents.jsx";
import AnnouncementDetails from './components/AnnouncementDetails/AnnouncementDetails.jsx';
import DownloadsInsideAnyCampGallery from './components/DownloadsInsideAnyCampGallery/DownloadsInsideAnyCampGallery.jsx';
import Trustees from "./pages/Trustees/Trustees.jsx";
import GetInvolved from "./pages/GetInvolved/GetInvolved.jsx";
import Downloads from "./pages/Downloads/Downloads.jsx";
import { DataContext } from "./store/Data";
import ContactUs from "./pages/ContactUs/ContactUs.jsx";

function App() {
  // const { isAuth, workshops } = useContext(DataContext);
  const [showLoader, setShowLoader] = useState(true);

  // Force loader to show on every page load for testing
  // Remove the sessionStorage logic for now

  const handleLoadComplete = () => {
    setShowLoader(false);
  };

  return (
    <div className="App">
      {showLoader ? (
        <Loader onLoadComplete={handleLoadComplete} />
      ) : (
        <>
          <Navbar />
          <Routes className="App-routes-container">
            <Route path="/*" element={<ComingSoon />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/for-students" element={<ForStudents />} />
            <Route path="/announcement/:id" element={<AnnouncementDetails />} />
            <Route path="/gallery/:location" element={<DownloadsInsideAnyCampGallery />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/trustees" element={<Trustees />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/get-involved" element={<GetInvolved />} />
          </Routes>
          <Footer className="app-footer" />
        </>
      )}
    </div>
  );
}

export default App;