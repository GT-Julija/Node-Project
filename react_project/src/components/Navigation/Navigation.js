//import "./Navigation.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
background-image: linear-gradient(0deg, rgba(235, 97, 35, 1) 10%, rgba(203, 70, 3, 1) 20%, rgba(171, 42, 0, 1) 35%, rgba(140, 3, 0, 1) 45%, rgba(109, 0, 0, 1) 55%, rgba(79, 0, 0, 1) 65%, rgba(53, 0, 2, 1) 80%, rgba(1, 0, 0, 1) 90%, rgba(0, 0, 0, 1) 100%);;
  padding: 14px 30px;
  display: flex;
  justify-content: flex-end;
  border-bottom: 1px solid #e2e2e2;
  display: flex;
  align-items: center;
  justify-content: space-around;

`;

const Logo = styled.div`
  color: #e2e2e2;
  font-size: 50px;
  font-weight: 500px;
  padding: 15px 50px;
  font-family: "Chiller";
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  margin: 0 18px;
  color: #e2e2e2;
  &:hover {
    color: black;
  }
`;

const RightContainer = styled.div`
  display: flex;
  color: gray;
  &:hover {
    color: black;
  }
`;
const Navigation = () => {
  
  return (
    <Container>
      <Logo>Helloveen party</Logo>
      <RightContainer>
        <nav>
          <StyledLink to="/">Members list</StyledLink>
          <StyledLink to="/add">Registration</StyledLink>
        </nav>
          
      </RightContainer>
    </Container>
  );
};

export default Navigation;

