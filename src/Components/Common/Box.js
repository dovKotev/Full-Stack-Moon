import "./Box.css";

function Box(props) {
  return (
    <>
      <div className="box" style={{borderRadius: "20px"}}>
        {props.data}
      </div>
    </>
  );
}

export default Box;
