import styled from "styled-components";
import { useEffect, useState } from "react";

export default function Card() {
  // Fetching Data

  const urlToFetch = "https://rickandmortyapi.com/api/character";

  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(urlToFetch);
      const data = await response.json();
      setApiData(data.results);
    }
    fetchData();
  }, []);

  return (
    <CardContainer>
      <ul>
        {apiData.map(function (character) {
          return (
            <li>
              <img src={character.image} alt={character.name} />;
            </li>
          );
        })}
      </ul>
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
  }
  li {
    list-style: none;
  }
`;
