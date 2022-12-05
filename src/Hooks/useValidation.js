import {useState} from "react";
import Joi from "joi";

function useValidation() {
  const [waiting, setWaiting] = useState(false);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  function validationHandler(schema) {
    const {error} = Joi.object(schema).validate(form, {abortEarly: false});
    if (!error) return true;

    let errorsOb = {};
    for (let i of error.details) {
      errorsOb[i.path[0]] = i.message;
    }
    setErrors({...errorsOb});
    return null;
  }

  function checkValidation({target: {name, value}}, schema) {
    setForm({...form, [name]: value});

    const {error} = schema[name].validate(value);
    if (!error) return setErrors({...errors, [name]: ""});
    setErrors({...errors, [name]: error.details[0].message});
  }

  return {
    validationHandler,
    checkValidation,
    setErrors,
    setForm,
    setWaiting,
    form,
    errors,
    waiting,
  };
}

export default useValidation;
