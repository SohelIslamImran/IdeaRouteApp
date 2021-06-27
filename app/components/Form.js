import React from "react";
import { Formik } from "formik";

const Form = ({ children, ...otherProps }) => {
  return <Formik {...otherProps}>{() => <>{children}</>}</Formik>;
};

export default Form;
