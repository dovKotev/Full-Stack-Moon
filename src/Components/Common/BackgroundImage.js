function BackgroundImage({url}) {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${url})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          maxWidth: "500px",
          height: "300px",
          margin: "0 auto",
        }}
      ></div>
    </>
  );
}

export default BackgroundImage;
