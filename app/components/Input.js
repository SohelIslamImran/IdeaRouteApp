import React, { useContext, useEffect } from "react";
import { useFormikContext } from "formik";

import { InputField } from "../styles/AuthStyles";
import { AuthContext } from "../auth/AuthContextProvider";

const Input = ({ name, ...otherProps }) => {
  const { setFieldTouched, setFieldValue, values, errors, touched } =
    useFormikContext();
  const { setError } = useContext(AuthContext);

  useEffect(() => {
    if (touched.name && errors.name) {
      setError(errors.name);
    } else if (touched.email && errors.email) {
      setError(errors.email);
    } else if (touched.password && errors.password) {
      setError(errors.password);
    } else {
      setError(null);
    }
  }, [errors, touched, name, setError]);

  return (
    <InputField
      onBlur={() => setFieldTouched(name)}
      onChangeText={(text) => setFieldValue(name, text)}
      value={values[name]}
      {...otherProps}
    />
  );
};

export default Input;
