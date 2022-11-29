function ButtonForm({name}) {
  return (
    <>
      <div className="text-center">
        <button
          type="submit"
          className="btn"
          style={{
            background: "rgb(89, 44, 37)",
            color: "white",
            padding: "8px 12px",
            fontSize: "1.2rem",
            fontWeight: "600",
          }}
        >
          {name}
        </button>
      </div>
    </>
  );
}

export default ButtonForm;
