import './App.css';
import {Work, Skills, Footer, About, Header, Testimonial} from "./container";

function App() {
  return (
    <div className="App">
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
