import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import layer from "./assets/layered-peaks-haikei.svg";

function App() {
  return (
    <div className="bg-background absolute z-0 w-screen h-screen">
      <Navbar />
      <Hero />
      <img
        src={layer}
        className="w-[100vw] h-auto absolute top-[75vh] md:top-[40vh] lg:top-[12vh] z-[-1]"
      />
    </div>
  );
}

export default App;
