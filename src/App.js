import { Route, Routes } from "react-router-dom";
import ContactsAndLeads from "./pages/ContactsAndLeads";
import DescriptionAndAmenities from "./pages/DescriptionAndAmenities";
import PhotosAndPlans from "./pages/PhotosAndPlans";
import WelcomeVideo from "./pages/WelcomeVideo";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ContactsAndLeads />} />
        <Route path="/description" element={<DescriptionAndAmenities />} />
        <Route path="/photos" element={<PhotosAndPlans />} />
        <Route path="/welcomevideo" element={<WelcomeVideo />}/>
      </Routes>
    </div>
  )
}

export default App;