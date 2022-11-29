import Card from "./Card";
import "./Cards.css";

const Cards = ({animals, onCard}) => {
  return (
    <div className="row g-2 cards-container">
      {animals.map((animal) => {
        return <Card animal={animal} onClickHandler={onCard} key={animal.id} />;
      })}
    </div>
  );
};

export default Cards;
