import "./App.css";
import Header from "./components/common/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/about/About";
import CourseHome from "./components/allcourses/CourseHome";
import Team from "./components/team/Team";
import Pricing from "./components/home/pricing/Pricing"
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Footer from "./components/common/footer/Footer";
import Home from "./components/home/Home";
import LibraryInfo from "./components/library/library";
import Journals from "./components/publications/journals/journals";
import Ejournal from "./components/publications/ejournal/ejournal";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<CourseHome />} />
          <Route path="/team" element={<Team />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/library" element={<LibraryInfo />} />
        
          <Route path="/contact" element={<Contact />} />
          <Route path="/ejournal" element={<Ejournal />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
