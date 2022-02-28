
import './App.css';
import { AboutMe } from './Components/AboutMe';
import { ContactMe } from './Components/ContactMe';
import { Home } from './Components/Home';
import { Myworks } from './Components/Myworks';
import { Skills } from './Components/Skills';

function App() {
  return (
     <>
      <Home/>
      <AboutMe/>
      <Skills/>
      <Myworks/>
      <ContactMe/>
     </>

  );
}

export default App;
