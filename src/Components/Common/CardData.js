import "./CardData.css";

function CardData({data, header, myStyle}) {
  return (
    <>
      <div className="d-flex flex-column card-style">
        <div className="card-header" style={{background: myStyle}}>
          <h2 className="p-0">{header}</h2>
        </div>
        {data}
      </div>
    </>
  );
}

export default CardData;
