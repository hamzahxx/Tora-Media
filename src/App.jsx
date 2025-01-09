import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-background absolute z-0 w-screen h-screen">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
