import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #5094fa;
  color: #fff;
  padding: 0;
`;

const Title = styled.h1`
  width: fit-content;
  padding: 20px;
  cursor: pointer;
  transition: color 0.3s ease-in-out;
  font-size: 24px;
`;

const Header = ({ tournamentTitle }) => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <Title onClick={() => navigate("/")}>
        {tournamentTitle || "Tournament App"}
      </Title>
    </HeaderContainer>
  );
};

export default Header;
