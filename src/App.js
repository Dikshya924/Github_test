import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Main from "./Components/layout/Main";
import Footer from "./Components/layout/Footer";
// import Navbar from "./Components/Navbar";
import Navbar from "./Components/layout/Navbar";
import Detailpage from "./Components/pages/Detailpage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:uname/:repo" element={<Detailpage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
