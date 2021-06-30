import styled from "styled-components";

const Spacer = styled.View`
  margin: ${({ m = 0, mt = 0, mr = 0, mb = 0, ml = 0 }) =>
    `${mt || m}px ${mr || m}px ${mb || m}px ${ml || m}px`};
  padding: ${({ p = 0, pt = 0, pr = 0, pb = 0, pl = 0 }) =>
    `${pt || p}px ${pr || p}px ${pb || p}px ${pl || p}px`};
`;

export default Spacer;
