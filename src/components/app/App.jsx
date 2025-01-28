import Header from "../widgets/header/header";
import AboutSection from "../widgets/about-section/about-section";
import CrossSectionLine from "../UI/lines/cross-section-line/cross-section-line";
import WorksSection from "../widgets/works-section/works-section";
import RegistrationSection from "../widgets/registration-section/registration-section";
import ContactSection from "../widgets/contact-section/contact-section";

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
