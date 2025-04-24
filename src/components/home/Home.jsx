import Contacts from "../contacts/Contacts";
import AboutMe from "./about-me/AboutMe";
import RecentWork from "./recent-work/RecentWork";

export default function Home() {
  return (
    <div id="main">
      <AboutMe />
      <RecentWork />
      <Contacts />
    </div>
  );
}
