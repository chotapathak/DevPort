import './App.scss';
import {Work, Skills, Footer, About, Header} from "./container";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="app">
        <Navbar/>
        <Header />
        <About />
        <Work />
        <Skills />
        <Footer />
    </div>
  );
}

export default App;
