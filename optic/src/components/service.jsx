import "./comp.css";
const ServiceCard = ({ image, title, buttonText, altText }) => {
  return (
    <div className="othpg service-card">
      <img src={image} className="cardimages" alt={altText} />
      <div className="overlay-content">
        <p className="text tp">{title}</p>
        <button className="learnmore srvc">{buttonText}</button>
      </div>
    </div>
  );
};

export default ServiceCard;
