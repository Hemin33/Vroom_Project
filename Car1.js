import "./CarStyles1.css";
import CarData1 from "./CarData1";
import Car11 from "../assets/14.jpg";
import Car22 from "../assets/15.jpg";
import Car33 from "../assets/16.jpg";
function Car1() {
  return (
    <div className="car">
      <h1>Most Appreciated Cars</h1>
      <p>you can discover unique collections of cars</p>
      <div className="carcard">
        <CarData1
          image={Car11}
          heading="Honda Amaze"
          text="The Honda Amaze is a compact sedan that has gained popularity in the Indian market for
           its combination of style, comfort, and fuel efficiency. Offering a spacious interior and a
          range of modern features, the Amaze caters to the needs of both urban commuters and small 
          families. Its efficient petrol and diesel engine options provide a balance between performance
          and mileage, making it a practical choice for Indian consumers. With its sleek design, 
          reliable performance, and competitive pricing, the Honda Amaze continues to be a strong 
          contender in the compact sedan segment in India."
        />
        <CarData1
          image={Car22}
          heading="Maruti Suzuki Baleno"
          text="The Maruti Suzuki Baleno is a premium hatchback that has captured the attention of 
          Indian consumers with its blend of style, spaciousness, and fuel efficiency. Renowned for
          its contemporary design, the Baleno offers a sleek exterior coupled with a well-appointed 
          interior featuring premium materials and modern amenities. Its peppy yet fuel-efficient 
          engine options, including petrol and mild hybrid variants, ensure a smooth and enjoyable 
          driving experience. With Maruti Suzuki's reputation for reliability and a competitive price 
          point, the Baleno has emerged as a top choice in the hatchback segment, appealing to buyers 
          seeking a balance of performance, comfort, and value.
          "
        />
        <CarData1
          image={Car33}
          heading="Tata Nexon"
          text="The Tata Nexon stands out in the competitive compact SUV segment in India with its 
          distinctive design, robust build quality, and feature-packed offerings. Boasting a bold and 
          muscular exterior design, the Nexon exudes a sense of confidence on the road. Inside, it 
          offers a spacious and well-appointed cabin equipped with modern infotainment and safety 
          features, making it a compelling choice for urban commuters and small families alike. Its 
          efficient petrol and diesel engine options, along with the availability of both manual and 
          automatic transmissions, ensure a versatile driving experience suited to varied preferences. 
          With Tata's focus on safety and innovation, including a 5-star safety rating in crash tests,
          the Nexon continues to attract buyers seeking a combination of style, performance, and safety 
          in their compact SUV."
        />
      </div>
    </div>
  );
}
export default Car1;
