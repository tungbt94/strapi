'use strict';

const { yup, validateYupSchema } = require('@strapi/utils');
const { isEmail } = require('../../utils');

const callbackBodySchema = yup.object().shape({
  identifier: yup.string().required(),
  password: yup.string().required(),
});

const registerBodySchema = yup.object().shape({
  username: yup
    .string()
    .nullable()
    .test({
      name: 'notEmail',
      message: 'The username cannot be an email',
      test: value => !isEmail(value),
    }),
  email: yup
    .string()
    .email()
    .required(),
  password: yup.string().required(),
});

const sendEmailConfirmationBodySchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required(),
});

module.exports = {
  validateCallbackBody: validateYupSchema(callbackBodySchema),
  validateRegisterBody: validateYupSchema(registerBodySchema),
  validateSendEmailConfirmationBody: validateYupSchema(sendEmailConfirmationBodySchema),
};
