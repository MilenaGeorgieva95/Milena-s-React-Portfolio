import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./components/home/Home";
import Navigation from "./components/navigation/Navigation";
import Footer from "./footer/Footer";
import ProjectDetails from "./components/project-details/ProjectDetails";
import CVPage from "./components/cv-page/CvPage";

function App() {
  return (
    <>
      <Navigation />
      <div id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="projects/:projectId/details"
            element={<ProjectDetails />}
          />
          <Route path="/cv" element={<CVPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
