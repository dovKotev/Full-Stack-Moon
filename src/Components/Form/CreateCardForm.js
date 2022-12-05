import "./RegisterForm.css";

import Box from "../Common/Box";
import Input from "../Common/Input";
import useValidation from "../../Hooks/useValidation";
import schemaObject from "../../Helpers/schema";
import ButtonForm from "../Common/ButtonForm";
import {createCard} from "../../Services/cardService";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

function CreateCardForm() {
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
  if (waiting) return;

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!validationHandler(schemaObject.createCard)) return;

    try {
      setWaiting(true);
      await createCard({...form});
      toast.success("You have Created a new Card succussfuly!", {
        theme: "dark",
      });

      navigate("/moon-shop");
    } catch ({response}) {
      setErrors({email: response});
      setWaiting(false);
    }
  };

  return (
    <>
      <div className="container register-style mt-3">
        <Box
          data={
            <>
              <h1 className="text-center h1-form">Create Card</h1>
              <form
                noValidate
                style={{padding: "12px"}}
                onSubmit={submitHandler}
              >
                <Input
                  type="text"
                  label="Please enter bussines name"
                  name="name"
                  onChange={checkValidation}
                  schema={schemaObject.createCard}
                  error={errors.name}
                />
                <Input
                  type="text"
                  label="Please enter image url"
                  name="image"
                  onChange={checkValidation}
                  schema={schemaObject.createCard}
                  error={errors.image}
                />
                <Input
                  type="price"
                  label="Please enter product price"
                  name="price"
                  onChange={checkValidation}
                  schema={schemaObject.createCard}
                  error={errors.price}
                />
                <Input
                  type="description"
                  label="Please enter product description"
                  name="description"
                  onChange={checkValidation}
                  schema={schemaObject.createCard}
                  error={errors.description}
                />
                <div className="mt-4">
                  <ButtonForm name="Create Card" waiting={waiting} />
                </div>
              </form>
            </>
          }
        />
      </div>
    </>
  );
}

export default CreateCardForm;
