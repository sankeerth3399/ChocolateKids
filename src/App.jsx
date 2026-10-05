import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import AboutPage from "./Pages/AboutPage.jsx";
import AcademicsPage from "./Pages/AcademicsPage.jsx";
import ActivitiesPage from "./Pages/ActivitiesPage.jsx";
import EventsPage from "./Pages/EventsPage.jsx";
import GalleryPage from "./Pages/GalleryPage.jsx";
import FacilitiesPage from "./Pages/FacilitiesPage.jsx";
import BranchesPage from "./Pages/BranchesPage.jsx";
import BranchDetails from "./Pages/BranchDetails.jsx";
import AdmissionsPage from "./Pages/AdmissionsPage.jsx";
import FranchisePage from "./Pages/FranchisePage.jsx";
import ContactPage from "./Pages/ContactPage.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import StickyBottomDualBar from "./components/StickyBottomDualBar.jsx";
import AdmissionModal from "./components/AdmissionModal.jsx";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/academics" element={<AcademicsPage />} />
        <Route path="/activities" element={<ActivitiesPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/facilities" element={<FacilitiesPage />} />
        <Route path="/branches" element={<BranchesPage />} />
        <Route path="/branches/:branchId" element={<BranchDetails />} />
        <Route path="/branch/:slug" element={<BranchDetails />} />
        <Route path="/admissions" element={<AdmissionsPage />} />
        <Route path="/franchise" element={<FranchisePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Home />} />
      </Routes>

      {/* EuroKids-Style Fixed Bottom-Center Action Bar */}
      <StickyBottomDualBar />

      {/* Global Enrol Your Child Admission Popup Modal */}
      <AdmissionModal />
    </>
  );
}

export default App;
