import { About } from './About';
import './App.scss';
import { Landing } from './Landing';
import { Navbar } from './Navbar';
import { Projects } from './Projects';
import { Contact } from './Contact';
import {Footer} from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
