import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Occassions from "./components/Occassions";
import PartyBoxes from "./components/PartyBoxes";
import Reviews from "./components/Reviews";
import Tiles from "./components/Tiles";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col text-black">
      <Hero />
      <Tiles />
      <Occassions />
      <PartyBoxes />
      <Reviews />
      <Footer />
    </main>
  );
}
