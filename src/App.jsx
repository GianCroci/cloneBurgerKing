import "./App.css";
import { Nav } from "./components/Nav";
import { MySlider } from "./components/MySlider";
import { BuscaTuLocal } from "./components/BuscaTuLocal";
import { Novedades } from "./components/Novedades";
import { Delivery } from "./components/Delivery";
import { PlayStore } from "./components/PlayStore";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <MySlider />
        <BuscaTuLocal />
        <Novedades />
        <Delivery />
        <PlayStore />
        <Footer />
      </main>
    </>
  );
}

export default App;
