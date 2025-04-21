import { Home } from './components/home';
import { AboutMe } from './components/about-me';
import { WorkExperience } from './components/work-experience';

import './App.css';

function App() {

  return (
    <div className='grid place-items-center overflow-hidden'>
      <Home />
      <AboutMe />
      <WorkExperience />
    </div>
  )
}

export default App;
