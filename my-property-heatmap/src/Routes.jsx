import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PropertyDetails from './components/PropertyDetails'; 
import Map from './components/Map'; 

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Map />} />
      <Route path="/property-details/:id" element={<PropertyDetails />} />
    </Routes>
  </Router>
);

export default AppRoutes;
