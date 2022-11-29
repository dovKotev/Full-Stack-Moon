function Img({src, alt, width = 200}) {
  return (
    <>
      <img className="mt-3 mb-3" src={src} alt={alt} width={width} />
    </>
  );
}

export default Img;
