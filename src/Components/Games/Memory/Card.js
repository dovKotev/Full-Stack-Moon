import "./Card.css";

function Card({animal, onClickHandler}) {
  return (
    <>
      <div
        className={`one-card ${animal.isPushed ? " open-card" : "close-card"}`}
        onClick={() => {
          onClickHandler(animal);
        }}
      >
        <>
          {
            <>
              {animal.isPushed && (
                <>
                  <span className="card-span">{animal.name}</span>
                  <img
                    className="card-img"
                    src={animal.photo}
                    alt={animal.name}
                    style={
                      animal.flip
                        ? {transform: "rotate(180deg)"}
                        : {width: "100%"}
                    }
                  />
                </>
              )}
            </>
          }
        </>
      </div>
    </>
  );
}

export default Card;
