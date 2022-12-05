import Joi from "joi";

const schemaObject = {
  register: {
    name: Joi.string().required().label("Name").min(2).max(255),
    email: Joi.string()
      .required()
      .email({tlds: {allow: false}})
      .label("Email"),
    password: Joi.string()
      .required()
      .min(8)
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      )
      .message({
        "string.pattern.base":
          "password must contain at least 1 digit, upperCase, lowerCase and special character - (@$!%*?&)",
      })
      .label("Password"),
  },
  registerAdmin: {
    name: Joi.string().required().label("Name").min(2).max(255),
    email: Joi.string()
      .required()
      .email({tlds: {allow: false}})
      .label("Email"),
    password: Joi.string()
      .required()
      .min(8)
      .label("Password")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      )
      .message({
        "string.pattern.base":
          "password must contain at least 1 digit, upperCase, lowerCase and special character - (@$!%*?&)",
      }),
    admin: Joi.string().required().min(4).max(10),
  },
  signin: {
    email: Joi.string()
      .required()
      .email({tlds: {allow: false}})
      .label("Email"),
    password: Joi.string().required().min(6).label("Password"),
  },
  createCard: {
    name: Joi.string().required().min(3).max(25).label("Name"),
    description: Joi.string().required().min(10).max(700).label("Description"),
    image: Joi.string().label("Image").allow(""),
    price: Joi.number().required().min(10).max(10000).label("price"),
  },
};

export default schemaObject;
