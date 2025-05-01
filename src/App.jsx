import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Navigation from "./components/navigation/Navigation";
import Footer from "./footer/Footer";

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
