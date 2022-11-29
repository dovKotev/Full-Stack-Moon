import "./Input.css";

function Input({type, label, name, error, onChange, schema, ...rest}) {
  const errorMesseage = <small className="error_message">{error}</small>;

  return (
    <>
      <div className="mb-3 input">
        <label className="form-label">{label}</label>
        <input
          type={type}
          className={"form-control " + (error && "input-style")}
          name={name}
          aria-describedby="emailHelp"
          onChange={(e) => {
            onChange(e, schema);
          }}
          {...rest}
        />
        {error && errorMesseage}
      </div>
    </>
  );
}

export default Input;
