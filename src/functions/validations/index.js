import UserSchema from "./schemas/UserSchema";

const validateValue = async (key, value) => {
  return await UserSchema[key].validate(value)
    .then(() => true)
    .catch((error) => {
      return { error: error.message };
    });
};

export const isUserValid = async (inputs) => {
  const validatedData = {
    name: await validateValue('name', inputs[0].value),
    birthDate: await validateValue('birthDate', inputs[1].value),
    email: await validateValue('email', inputs[2].value),
    address: await validateValue('address', inputs[3].value),
    phone: await validateValue('phone', inputs[4].value),
  };

  const errors = {};

  if (validatedData) {
    if (validatedData.name && validatedData.name.error) {
      errors.name = validatedData.name.error
    }

    if (validatedData.birthDate && validatedData.birthDate.error) {
      errors.birthDate = validatedData.birthDate.error
    }

    if (validatedData.email && validatedData.email.error) {
      errors.email = validatedData.email.error
    }

    if (validatedData.address && validatedData.address.error) {
      errors.address = validatedData.address.error
    }

    if (validatedData.phone && validatedData.phone.error) {
      errors.phone = validatedData.phone.error
    }
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }
  
  return true;
};
