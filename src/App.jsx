import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Navigation from "./components/navigation/Navigation";
import Footer from "./footer/Footer";
import Projects from "./components/projects/Projects";
import ProjectDetails from "./components/project-details/ProjectDetails";
import CVPage from "./components/cv-page/CVPage";
import Contacts from "./components/contacts/Contacts";

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <div id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route
            path="projects/:projectId/details"
            element={<ProjectDetails />}
          />
          <Route path="cv" element={<CVPage />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
