import styled from "styled-components";

const SlyledHeading = styled.div`
  color: #777777;
  font-size: 40px;
  font-weigth: 500px;
  text-align: center;
  padding: 15px 20px;
  font-family: "Chiller";
`;
const Heading = ({ children }) => {
  return <SlyledHeading>{children}</SlyledHeading>;
};
export default Heading;
