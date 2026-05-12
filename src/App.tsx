
import { Home } from './components/home';
import { Nav } from './components/nav';
import { AboutMe } from './components/about-me';
import { WorkExperience } from './components/work-experience';
import { ContactUs } from './components/contact-us';
import { useScrollReveal } from './hooks/useScrollReveal';

import './App.css';

function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#eef4fb] text-[#0b1f3a]">
      <Nav />
      <main>
        <Home />
        <AboutMe />
        <WorkExperience />
        <ContactUs />
      </main>
    </div>
  )
}

export default App;
