import styled from "styled-components";

const Text = styled.Text`
  font-weight: ${({ w5, w6, w7 }) =>
    w5 ? "500" : w6 ? "600" : w7 ? "700" : "400"};
  color: ${({ theme, color = "black" }) => theme.colors[color]};
  text-align: ${({ center }) => (center ? "center" : "left")};
`;

export default Text;
