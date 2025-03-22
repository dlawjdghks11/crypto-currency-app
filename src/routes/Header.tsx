import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { isDarkAtom } from "../atom";

const Container = styled.header`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const ToggleButton = styled.button`
  background-color: ${(props) => props.theme.subBackground};
  color: ${(props) => props.theme.text};
  border: none;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  padding: 10px 10px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;

const Home = styled.nav`
  font-size: 16px;
  cursor: pointer;
  padding: 10px 10px;
  border-radius: 5px;
  color: ${(props) => props.theme.text};

  &:hover {
    opacity: 0.8;
  }
`;

const Header = () => {
  const isDark = useRecoilValue(isDarkAtom);
  const setDarkAtom = useSetRecoilState(isDarkAtom);
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
      <ToggleButton onClick={() => setDarkAtom((prev) => !prev)}>
        {isDark ? "Light" : "Dark"}
      </ToggleButton>
    </Container>
  );
};

export default Header;
