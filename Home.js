import Car1 from "../components/Car1";
import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbarr from "../components/Navbarr";
function Home() {
  return (
    <>
      <Navbarr />
      <Hero
        cName="hero"
        heroImg="https://unsplash.com/photos/mjnO4ipSBy0/download?force=true&w=1920"
        title="Your Journey Your Car"
        text="choose your favourite car"
        buttonText="Buy Car"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Car1 />
      <Footer />
    </>
  );
}
export default Home;
