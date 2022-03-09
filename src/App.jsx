import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";
import AuthProvider from "./context/Context";
import Appointments from "./pages/Appointments";
import Contect from "./pages/Contect";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Service from "./pages/Service";
import ServiceDeatails from "./pages/ServiceDeatails";

function App() {
  return (
    <div className="App">
    <AuthProvider>
    <BrowserRouter>
    <Header />
    <div className="px-5 xl:px-16">
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/apointments" element={<PrivateRoute><Appointments /></PrivateRoute>} />
          <Route path="/service/:_id" element={<PrivateRoute><ServiceDeatails /></PrivateRoute>} />
          <Route path="/contect" element={<PrivateRoute><Contect /></PrivateRoute>} />
          <Route path="*" element={<PageNotFound />} />
       </Routes>
    </div>
    <Footer />
    </BrowserRouter>
    </AuthProvider>
    </div>
  ); 
}

export default App;
