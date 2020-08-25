import * as Joi from "joi";
export const firstNameSchema = Joi.string().required();
export const lastNameSchema = Joi.string().required();
export const birthDateSchema = Joi.string().required();
export const emailSchema = Joi.string()
  .email({ tlds: { allow: false } })
  .required();
export const passwordSchema = Joi.string().required();
export const confirmPasswordSchema = Joi.ref("password");
export const stateSchema = Joi.string().required();
export const citySchema = Joi.string().required();
export const signupValidationSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  birthDate: Joi.string().required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().required(),

  state: Joi.string().required(),
  city: Joi.string().required(),
});
