import styled from "styled-components";
import { SafeAreaView } from "react-native-safe-area-context";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;

export default SafeArea;
