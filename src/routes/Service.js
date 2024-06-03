import Hero from "../components/Hero";
import Navbarr from "../components/Navbarr";
import AboutImg from "../assets/4.jpg";
import Footer from "../components/Footer";
import Car1 from "../components/Car1";
function Service() {
  return (
    <>
      <Navbarr />
      <Hero
        cName="hero-end"
        heroImg={AboutImg}
        title="Service"
        url="/"
        btnClass="hide"
      />
      <Car1 />
      <Footer />
    </>
  );
}
export default Service;
