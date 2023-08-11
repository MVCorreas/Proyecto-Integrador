import React from 'react';

export const Validation = (userData, setErrors, errors) => {
  if (!userData.email) {
    setErrors({ ...errors, email: "Email vacío" });
  } else if (userData.email.length > 35) {
    setErrors({ ...errors, email: "Email no puede exceder los 35 caracteres" });
  } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userData.email)) {
    setErrors({ ...errors, email: "Email inválido" });
  } else if (userData.password.length < 6 || userData.password.length > 10 || (!/\d/.test(userData.password))) {
    setErrors({ ...errors, password: "La contraseña debe contener entre 6 y 10 caracteres, y al menos un número" });
  } else {
    setErrors({ ...errors, email: "", password: "" });
  }
};

// /\d/ metacharacter in regex for matching digits between 0 and 9