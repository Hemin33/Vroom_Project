import tata1 from "../assets/7.jpg";
import tata2 from "../assets/8.jpg";
import tata3 from "../assets/10.jpg";
import tata4 from "../assets/12.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";
const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Cars</h1>
      <p>Cars that turned travel into a lifestyle</p>
      <DestinationData
        className="first-car"
        heading="Tata Motors"
        text="Tata Motors, a prominent Indian automaker, offers a diverse range of
            cars catering to various segments of the market. From the compact
            Tiago to the robust SUV Hexa, Tata vehicles combine affordability
            with reliability. Known for their sturdy build and innovative
            features, Tata cars have earned a loyal following among Indian
            consumers, reflecting the company's commitment to quality and
            innovation in the automotive industry."
        img1={tata1}
        img2={tata2}
      />
      <DestinationData
        className="first-car-reverse"
        heading="Hyundai"
        text="Hyundai cars are renowned in India for their sleek designs, advanced
         features, and reliable performance. With a diverse lineup spanning hatchbacks,
          sedans, and SUVs, Hyundai offers options to suit every need and preference.
           Models like the Hyundai i20, known for its premium interior and smooth ride,
            and the Hyundai Creta, celebrated for its modern styling and spacious cabin,
             have garnered widespread acclaim from Indian consumers. "
        img1={tata3}
        img2={tata4}
      />
    </div>
  );
};
export default Destination;
