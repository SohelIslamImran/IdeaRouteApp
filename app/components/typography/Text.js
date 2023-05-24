import styled from "styled-components";

/* Example:
* * You can use this component like,
! *  <Text w6 size={20} color="primary" center />
* The above component styles will be like,
{
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme, color }) => theme.colors.text.primary};
  text-align: center;
}
*/

const Text = styled.Text`
  font-weight: ${({ w5, w6, w7 }) =>
    w5 ? "500" : w6 ? "600" : w7 ? "700" : "400"};
  font-size: ${({ size = 14 }) => `${size}px`};
  color: ${({ theme, color = "black" }) => theme.colors.text[color] || color};
  text-align: ${({ center, right }) =>
    center ? "center" : right ? "right" : "left"};
`;

export default Text;
