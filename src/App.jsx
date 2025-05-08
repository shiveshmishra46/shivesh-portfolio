import Testimonials from "./sections/Testimonials.jsx";
import Footer from "./sections/Footer.jsx";
import Contact from "./sections/Contact.jsx";
import TechStack from "./sections/TechStack.jsx";
import ExperienceSection from "./sections/ExperienceSection.jsx";
import Hero from "./sections/Hero.jsx";
import Showcase from "./sections/Showcase.jsx";
import LogoShowcase from "./sections/LogoShowcase.jsx";
import FeatureCards from "./sections/Featurecards.jsx";
import Navbar from "./components/Navbar.jsx";

const App = () => (
  <>
    <Navbar />
    <Hero />
    <Showcase />
    <LogoShowcase />
    <Featurecards />
    <ExperienceSection />
    <TechStack />
    <Testimonials />
    <Contact />
    <Footer />
  </>
);

export default App;
