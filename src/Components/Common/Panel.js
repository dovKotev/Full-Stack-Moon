<link
  href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@600&family=Permanent+Marker&family=Rubik+Distressed&display=swap"
  rel="stylesheet"
></link>;

function Panel({content}) {
  return (
    <>
      <div className="mt-5" style={{padding: "0 54px"}}>
        <h1 style={{fontFamily: "Permanent Marker", fontSize: "2.5rem"}}>
          {content}
        </h1>
      </div>
    </>
  );
}

export default Panel;
