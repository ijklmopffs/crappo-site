import "./App.css";
import Cryptocurrencies from "./components/Cryptocurrencies";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Cryptocurrencies />
      <Features />
      <Footer />
    </>
  );
}

export default App;
