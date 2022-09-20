import { Route, Routes } from "react-router-dom";
import Page from "./components/Layouts/Page";
import ContactsAndLeads from "./pages/ContactsAndLeads";
import DescriptionAndAmenities from "./pages/DescriptionAndAmenities";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Page
              bgColor="bg-grey-50"
              title="TOWER RESIDENCES AT THE RITZ-CARLTON"
              description="User our tools to connect with building residents and others to grow listings and sales in your building"
              tipText="Key key establishing relationships is fast response time and frequent follow-up. Buyers and sellers want local knowledge from their agent and your building provides a hyper-local target market for you to prospect."
            >
              <ContactsAndLeads />
            </Page>
          }
        />
        <Route
          path="/description"
          element={
            <Page
              bgColor="bg-white"
              title="An enchanced description and amenity list accurately shawcases your building to buyers and sellers"
              tipText="A unique building description will bring more search traffic and leads to your page. We recommend a minimum of 300 words, but the longer the better for best results."
            >
              <DescriptionAndAmenities />
            </Page>
          }
        />
      </Routes>
    </div>
  )
}

export default App;
