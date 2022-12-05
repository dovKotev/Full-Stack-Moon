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

function AdminForm({statusChanged}) {
  const navigate = useNavigate();

  const {
    validationHandler,
    checkValidation,
    setErrors,
    setWaiting,
    form,
    errors,
    waiting,
  } = useValidation();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (waiting) return;
    if (!validationHandler(schemaObject.registerAdmin)) return;

    try {
      setWaiting(true);
      await createUser({...form, biz: true});
      const {data} = await signinUser(_.pick(form, ["email", "password"]));

      localStorage.removeItem("token");
      localStorage.setItem("token", data);

      statusChanged();

      toast.success("You are Admin registred succussfuly!", {
        theme: "dark",
      });
      navigate("/");
    } catch ({response}) {
      setErrors({email: response.data});
      setWaiting(false);
    }
  };

  return (
    <>
      <div className="container register-style mt-5">
        <Box
          data={
            <>
              <h1 className="text-center h1-form">Admin Registration</h1>
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
                  schema={schemaObject.registerAdmin}
                  error={errors.name}
                />
                <Input
                  type="email"
                  label="Please enter your email"
                  s
                  name="email"
                  onChange={checkValidation}
                  schema={schemaObject.registerAdmin}
                  error={errors.email}
                />
                <Input
                  type="password"
                  label="Please enter your password"
                  name="password"
                  onChange={checkValidation}
                  schema={schemaObject.registerAdmin}
                  error={errors.password}
                />
                <Input
                  type="password"
                  label="Please enter your Admin Access - Only on time"
                  name="admin"
                  onChange={checkValidation}
                  schema={schemaObject.registerAdmin}
                  error={errors.admin}
                />
                <div className="mt-4">
                  <ButtonForm name="register" waiting={waiting} />
                </div>
              </form>
            </>
          }
        />
      </div>
    </>
  );
}

export default AdminForm;
