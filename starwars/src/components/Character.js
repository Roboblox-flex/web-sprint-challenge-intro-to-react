// Write your Character component here
import React from "react";
import styled from "styled-components";

const Character = (props) => {
  const { characters } = props;

  const StyledCharacter = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .character {
      margin-top: 2rem;
      background-color: black;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: tomato;
      width: 50%;
      h2 {
        color: #98fb98;
      }
    }
  `;

  return (
    <StyledCharacter>
      {characters.map((character) => {
        return (
          <div key={character.created} className="character">
            <h2>Name: {character.name}</h2>
            <p>Hair: {character.hair_color}</p>
            <p>Eyes: {character.eye_color}</p>
            <p>Skin: {character.skin_color}</p>
            <p>Height: {character.height}</p>
            <p>gender: {character.gender}</p>
            <p>Born:{character.birth_year}</p>
            <p>Mass: {character.mass}</p>
          </div>
        );
      })}
    </StyledCharacter>
  );
};

export default Character;
