
import { Home } from './components/home';
import { Nav } from './components/nav';
import { AboutMe } from './components/about-me';
import { WorkExperience } from './components/work-experience';

import './App.css';

function App() {

  return (
      <div className='w-screen h-screen bg-[#F9FAFB] flex flex-col overflow-x-hidden'>
        <Nav />
        <Home />
        <AboutMe />
        <WorkExperience />
      </div>
     

  )
}

export default App;
