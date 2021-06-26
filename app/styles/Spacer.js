import styled from "styled-components";

const Spacer = styled.View`
  margin: ${({ m, mt = 0, mr = 0, mb = 0, ml = 0 }) =>
    `${mt}px ${mr}px ${mb}px ${ml}px`};
  padding: ${({ pt = 0, pr = 0, pb = 0, pl = 0 }) =>
    `${pt}px ${pr}px ${pb}px ${pl}px`};
`;

export default Spacer;
