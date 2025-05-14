import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Navigation from "./components/navigation/Navigation";
import Footer from "./footer/Footer";
import Projects from "./components/projects/Projects";
import ProjectDetails from "./components/project-details/ProjectDetails";
import Contacts from "./components/contacts/Contacts";
import SkillsAndTechnologies from "./components/skills-and-technologies/SkillsAndTechnologies";
import Certificates from "./components/courses/Certificates";

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
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/skills" element={<SkillsAndTechnologies />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
