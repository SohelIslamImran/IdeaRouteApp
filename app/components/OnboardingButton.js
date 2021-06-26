import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.TouchableOpacity`
  margin: 0 10px;
`;

const TextButton = styled.Text`
  font-size: 16px;
`;

const OnboardingButton = (props) => {
  let title;

  const isTitle = (name) => Object.values(props).includes(name);

  isTitle("Next")
    ? (title = "Next")
    : isTitle("Skip")
    ? (title = "Skip")
    : (title = "Done");

  return (
    <ButtonContainer {...props}>
      <TextButton>{title}</TextButton>
    </ButtonContainer>
  );
};

export default OnboardingButton;
