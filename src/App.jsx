import Header from "./components/widgets/header/header";
import AboutSection from "./components/widgets/about-section/about-section";
import CrossSectionLine from "./components/UI/lines/cross-section-line/cross-section-line";
import WorksSection from "./components/widgets/works-section/works-section";
import RegistrationSection from "./components/widgets/registration-section/registration-section";
import ContactSection from "./components/widgets/contact-section/contact-section";

import "./App.css";

function App() {
  return (
    <>
      <div class="wrapper">
        <Header />
        <CrossSectionLine />
        <AboutSection />
        <CrossSectionLine />
        <WorksSection />
        <CrossSectionLine />
        <RegistrationSection />
        <CrossSectionLine />
        <ContactSection />
      </div>
    </>
  );
}

export default App;
