import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutScreen from "./screens/AboutScreen";
import ContactUsScreen from "./screens/ContactUsScreen";
import HomeScreen from "./screens/HomeScreen";
import ServicenScreen from "./screens/ServicenScreen";

const App = () => {
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<HomeScreen/>}/>
      <Route exact path="/about" element={<AboutScreen/>}/>
      <Route exact path="/services" element={<ServicenScreen/>}/>
      <Route exact path="/contact" element={<ContactUsScreen/>}/>
      </Routes>
    </Router>
  );
};

export default App;
