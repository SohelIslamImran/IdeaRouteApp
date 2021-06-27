import React from "react";
import { useFormikContext } from "formik";

import { ButtonContainer, SubmitBtnText } from "../styles/AuthStyles";

const SubmitButton = ({ title }) => {
  const { handleSubmit } = useFormikContext();
  return (
    <ButtonContainer onPress={handleSubmit}>
      <SubmitBtnText>{title}</SubmitBtnText>
    </ButtonContainer>
  );
};

export default SubmitButton;
