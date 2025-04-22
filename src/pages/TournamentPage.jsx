import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Match from "../components/Match";
import { loadFromLocalStorage, saveToLocalStorage } from "../utils/storage";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow-y: hidden;
  background-color: #f8f9fa;
  margin: auto 0;
`;

const TournamentPage = () => {
  const [remainingImages, setRemainingImages] = useState([]);
  const [currentMatch, setCurrentMatch] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const images = loadFromLocalStorage("tournamentImages");
    if (images) {
      const shuffledImages = [...images].sort(() => Math.random() - 0.5);
      setRemainingImages(shuffledImages);
    }
  }, []);

  useEffect(() => {
    if (remainingImages.length >= 2) {
      setCurrentMatch([remainingImages[0], remainingImages[1]]);
    } else if (remainingImages.length === 1) {
      saveToLocalStorage("tournamentWinner", remainingImages[0]);
      navigate("/results");
    }
  }, [remainingImages, navigate]);

  const handleMatchResult = (winner) => {
    setRemainingImages((prev) => [...prev.slice(2), winner]);
  };

  if (!currentMatch) return <p>Loading...</p>;

  return (
    <Container>
      <Match
        player1={currentMatch[0]}
        player2={currentMatch[1]}
        onSelectWinner={handleMatchResult}
      />
    </Container>
  );
};

export default TournamentPage;
