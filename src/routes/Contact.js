import Hero from "../components/Hero";
import Navbarr from "../components/Navbarr";
import AboutImg from "../assets/6.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
function Contact() {
  return (
    <>
      <Navbarr />
      <Hero
        cName="hero-start"
        heroImg={AboutImg}
        title="Contact"
        url="/"
        btnClass="hide"
      />
      <ContactForm />
      <Footer />
    </>
  );
}
export default Contact;
