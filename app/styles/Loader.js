import styled from "styled-components";
import { colors } from "../config/theme/colors";

export const Loader = styled.ActivityIndicator.attrs({
  size: "large",
  color: colors.primary,
})`
  position: absolute;
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  opacity: 0.8;
  z-index: 1;
`;
