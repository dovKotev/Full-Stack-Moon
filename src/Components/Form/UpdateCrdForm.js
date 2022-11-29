import "./RegisterForm.css";

import Box from "../Common/Box";
import Input from "../Common/Input";
import useValidation from "../../Hooks/useValidation";
import schemaObject from "../../Helpers/schema";
import ButtonForm from "../Common/ButtonForm";
import {updateCard} from "../../Services/cardService";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

function UpdateCardForm({card}) {
  const {validationHandler, checkValidation, setErrors, setForm, form, errors} =
    useValidation();

  useEffect(() => {
    function getCardDetails() {
      setForm({
        name: card.name,
        description: card.description,
        image: card.image,
        price: card.price,
      });
    }
    getCardDetails();
  }, [card, setForm]);

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!validationHandler(schemaObject.createCard)) return;
    const newData = {
      ...card,
      name: form.name,
      description: form.description,
      image: form.image,
      price: form.price,
    };

    try {
      const {data} = await updateCard(newData);
      console.log(data);
      toast.success("You are Update  Card succussfuly!", {
        theme: "dark",
      });

      navigate("/moon-shop");
    } catch ({response}) {
      setErrors({email: response});
    }
  };
  const nameShort = card.name.split(" ").slice(0, 2).join(" ");
  return (
    <>
      <div className="container register-style mt-3">
        <Box
          data={
            <>
              <h1 className="text-center h1-form">Update Card {nameShort}</h1>
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
                  value={form.name}
                />
                <Input
                  type="text"
                  label="Please enter image url"
                  name="image"
                  onChange={checkValidation}
                  schema={schemaObject.createCard}
                  error={errors.image}
                  value={form.image}
                />
                <Input
                  type="price"
                  label="Please enter product price"
                  name="price"
                  onChange={checkValidation}
                  schema={schemaObject.createCard}
                  error={errors.price}
                  value={form.price}
                />
                <Input
                  type="description"
                  label="Please enter product description"
                  name="description"
                  onChange={checkValidation}
                  schema={schemaObject.createCard}
                  error={errors.description}
                  value={form.description}
                />
                <div className="mt-4">
                  <ButtonForm name="Update Card" />
                </div>
              </form>
            </>
          }
        />
      </div>
    </>
  );
}

export default UpdateCardForm;
