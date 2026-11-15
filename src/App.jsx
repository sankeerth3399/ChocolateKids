import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout.jsx";
import Home from "./Pages/Home.jsx";
import { lazyPages as Page } from "./routes.js";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Page.about />} />
        <Route path="/academics" element={<Page.academics />} />
        <Route path="/activities" element={<Page.activities />} />
        <Route path="/gallery" element={<Page.gallery />} />
        <Route path="/events" element={<Page.events />} />
        <Route path="/facilities" element={<Page.facilities />} />
        <Route path="/branches" element={<Page.branches />} />
        <Route path="/branches/:branchId" element={<Page.branchDetails />} />
        <Route path="/branch/:slug" element={<Page.branchDetails />} />
        <Route path="/admissions" element={<Page.admissions />} />
        <Route path="/franchise" element={<Page.franchise />} />
        <Route path="/contact" element={<Page.contact />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
