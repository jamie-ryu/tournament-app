import styled from "styled-components";
import vsImage from "../assets/img-vs.png";

const MatchContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  max-width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const Player = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const PlayerImage = styled.img`
  min-width: 50%;
  min-height: 50%;
  max-width: 80%;
  max-height: 80%;
  object-fit: contain;
`;

const VSImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 15%;
  z-index: 10;
`;

const Match = ({ player1, player2, onSelectWinner }) => {
  return (
    <MatchContainer>
      <Player onClick={() => onSelectWinner(player1)}>
        <PlayerImage src={player1} alt="Player 1" />
      </Player>
      <VSImage src={vsImage} alt="VS" />
      <Player onClick={() => onSelectWinner(player2)}>
        <PlayerImage src={player2} alt="Player 2" />
      </Player>
    </MatchContainer>
  );
};

export default Match;
