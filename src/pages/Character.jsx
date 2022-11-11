import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Character({ apiData }) {
  let { characterId } = useParams();
  const found = apiData.find(({ id }) => id === Number(characterId));

  const [toggleInfos, setToggleInfos] = useState(true);

  function showAnswer() {
    setToggleInfos(!toggleInfos);
  }

  const [toggleFavorite, setToggleFavorite] = useState(true);

  function setFavorite() {
    setToggleFavorite(!toggleFavorite);
  }

  return (
    <CardContainer toggleInfos={toggleInfos}>
      <h1>{found.name} </h1>
      <img src={found.image} alt={found.name} />
      <FavoriteButton onClick={setFavorite} toggleFavorite={toggleFavorite}>
        Save as Favorite
      </FavoriteButton>
      <ul>
        <li>Species: {found.species}</li>
        <li>Gender: {found.gender}</li>
        <li>Status: {found.status}</li>
      </ul>
      <button onClick={showAnswer}>Show more</button>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    ${(props) => props.toggleInfos && "visibility: hidden"}
  }
  li {
    list-style: none;
  }
`;

const FavoriteButton = styled.button`
  position: absolute;
  top: 10;

  ${(props) =>
    props.toggleFavorite
      ? "background-color: white"
      : "background-color: lightgreen;"}
`;
