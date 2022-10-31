import './App.scss';
import {Work, Skills, Footer, About, Header, Testimonial} from "./container";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="app">
        {/*<Navbar/>*/}
        <Header />
        <About />
        <Work />
        <Skills />
        <Testimonial />
        <Footer />
    </div>
  );
}

export default App;
