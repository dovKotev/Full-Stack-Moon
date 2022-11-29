import "./RegisterForm.css";
import Box from "../Common/Box";
import Input from "../Common/Input";
import useValidation from "../../Hooks/useValidation";
import schemaObject from "../../Helpers/schema";
import ButtonForm from "../Common/ButtonForm";
import {createUser, signinUser} from "../../Services/userService";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import _ from "lodash";

function RegisterForm({status, email, biz, name, statusChanged}) {
  const navigate = useNavigate();

  const {validationHandler, checkValidation, setErrors, form, errors} =
    useValidation();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!validationHandler(schemaObject.register)) return;

    try {
      await createUser({...form, biz: false});
      const {data} = await signinUser(_.pick(form, ["email", "password"]));

      localStorage.removeItem("token");
      localStorage.setItem("token", data);

      statusChanged();
      toast.success("You are registred succussfuly!", {
        theme: "dark",
      });

      navigate("/");
    } catch ({response}) {
      setErrors({email: response.data});
    }
  };

  return (
    <>
      <div className="container register-style mt-5">
        <Box
          data={
            <>
              <h1 className="text-center h1-form">Registration</h1>
              <form
                noValidate
                style={{padding: "12px"}}
                onSubmit={submitHandler}
              >
                <Input
                  type="text"
                  label="Please enter your name"
                  name="name"
                  onChange={checkValidation}
                  schema={schemaObject.register}
                  error={errors.name}
                />
                <Input
                  type="email"
                  label="Please enter your email"
                  name="email"
                  onChange={checkValidation}
                  schema={schemaObject.register}
                  error={errors.email}
                />
                <Input
                  type="password"
                  label="Please enter your password"
                  name="password"
                  onChange={checkValidation}
                  schema={schemaObject.register}
                  error={errors.password}
                />
                <div className="mt-4">
                  <ButtonForm name="register" />
                </div>
              </form>
            </>
          }
        />
      </div>
    </>
  );
}

export default RegisterForm;
