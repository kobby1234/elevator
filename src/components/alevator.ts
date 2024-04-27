import styled from "styled-components";

export const Elevator = styled.img<{ $top: number ,speed :number}>`
  /* position: absolute; */
  top: ${(props) => props.$top}px;

  /* left: 15%; */
  position: relative;
  /* transform: translateX(-50%); */
  width: 100px;
  height: 100px;
  color: black;
  background-color: gray;
  transition: top ${(props) => props.speed}ms linear;
`;
