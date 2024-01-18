import HomePage from "./components/home";
import Navbar from "./components/navbar";
import About from "./components/about";
import Resume from "./components/resume";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
function App() {
  return (
    <div>
      <Navbar/>
      <HomePage/>
      <About/>
      <Resume/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default App;
