import "./CarStyles1.css";
import Car1 from "./Car1";
function CarData1(props) {
  return (
    <div className="c-card">
      <div className="c-image">
        <img src={props.image} alt="image" />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  );
}
export default CarData1;
