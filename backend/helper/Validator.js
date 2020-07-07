const validator = require('validator');

//const Joi = require('joi');
 

exports.DateValidator =  (data) => {
  const { startDate, endDate } = data;
  const errors = {};

  if (isEmpty(startDate)) {
    errors.startDate = 'Start date is required.';
  }
  else {
    if (!validator.isISO8601(startDate)) {
      errors.startDate = 'Start date must be in YYYY-MM-DD format.';
    }
  }

  if (isEmpty(endDate)) {
    errors.endDate = 'End date is required.';
  }
  else {
    if (!validator.isISO8601(data.endDate)) {
      errors.endDate = 'End date must be in YYYY-MM-DD format.';
    }
  }
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

exports.contentValidation = (data) => {
  const { _id } = data;
  const errors = {};
  if (!_id || typeof _id !== 'string') {
    errors._id = '_id is wrong';
  }
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }

}

const isEmpty = (value) => {
  return (
    value === undefined ||
    value === null ||
    (typeof value === 'object') ||
    (typeof value === 'string' && value.trim().length === 0)
  );
}
