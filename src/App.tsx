import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
