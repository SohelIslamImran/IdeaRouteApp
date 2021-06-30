import styled from "styled-components/native";

const Text = styled.Text`
  font-weight: ${({ w5, w6, w7 }) =>
    w5 ? "500" : w6 ? "600" : w7 ? "700" : "400"};
  color: ${({ theme, color = "black" }) => theme.colors[color]};
`;

export default Text;
