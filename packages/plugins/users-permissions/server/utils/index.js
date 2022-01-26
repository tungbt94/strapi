'use strict';

const getService = name => {
  return strapi.plugin('users-permissions').service(name);
};

const emailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const isEmail = value => emailRegExp.test(value);

module.exports = {
  getService,
  isEmail,
};
