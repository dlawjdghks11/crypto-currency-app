import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.header`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Home = styled.nav`
  cursor: pointer;
  color: ${(props) => props.theme.text};
`;

const Header = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Home
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </Home>
    </Container>
  );
};

export default Header;
