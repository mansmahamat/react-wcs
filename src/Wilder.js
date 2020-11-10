import React from "react";
import styled from "styled-components";

import blank_profile from "./lion.png";
import Skill from "./Skill";

const Card = styled.article`
  padding: 20px;
  border: 1px solid #c9c9c9;
  border-radius: 7px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);
  > img:first-child {
    border-radius: 7px 7px 0 0;
    margin-bottom: 20px;
    max-width: 100%;
    height: auto;
  }
  h3,
  h4 {
    color: #f76c6c;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: start;
    em {
      padding: 0.25em;
      background-color: #eddbff;
      border-radius: 4px;
    }
  }
  p,
  ul {
    color: #757575;
    line-height: 1.5;
  }
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  li {
    margin: 4px 0;
    display: flex;
    justify-content: space-around;
    border: #f76c6c 1px solid;
    border-radius: 4px;
    padding: 2px;
  }
`;


function Wilder(props) {
  return (
    <Card>
      <img src={blank_profile} alt="Jane Doe Profile" />
      <h3>{props.name}</h3>
      <h3>{props.city}</h3>
      
      <List>
      {props.skills.map( (skill) => (
        <Skill key={skill.title} name={skill.title} votes={skill.votes} />
      ))}
      </List>
    </Card>
  );
}

export default Wilder;
