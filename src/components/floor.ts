import styled from "styled-components";

export const FloorWrapper = styled.div`
  display: flex;

  /* justify-content: space-around; */
  /* left: 1x; */

`
export const Floor =styled.div`
  background-color: silver;
  background-image: linear-gradient(335deg, #b00 23px, transparent 23px), 
                    linear-gradient(155deg, #d00 23px, transparent 23px), 
                    linear-gradient(335deg, #b00 23px, transparent 23px), 
                    linear-gradient(155deg, #d00 23px, transparent 23px);
  background-size: 58px 58px;
  background-position: 0px 2px, 4px 35px, 29px 31px, 34px 6px;
  height: 103px;
  width: 200px;
  /* border: 5px solid black; */

  /* position: fixed; */
  
  /* border:70px black; */

`
export const TopOfTheFloor = styled.div`
  background-color: #000000;
  height: 7px;
  width: 200px;
  /* left: 20px; */
`

export const CallControl = styled.button<{isColor: boolean}>`
  /* display: flex; */
  margin-left: 52px;
  margin-top: 15px;
  width: 100px;
  font-size: 4em;
  height: 80px;
  border-radius: .5em;
  background-image: -webkit-repeating-linear-gradient(left, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,0) 6%, hsla(0,0%,100%, .1) 7.5%), 
                    -webkit-repeating-linear-gradient(left, hsla(0,0%, 0%,0) 0%, hsla(0,0%, 0%,0) 4%, hsla(0,0%, 0%,.03) 4.5%), 
                    -webkit-repeating-linear-gradient(left, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,0) 1.2%, hsla(0,0%,100%,.15) 2.2%), 
                    linear-gradient(180deg, hsl(0,0%,78%) 0%, hsl(0,0%,90%) 47%, hsl(0,0%,78%) 53%, hsl(0,0%,70%)100%);
  color: ${props => (props.isColor ? 'green' : 'black')};
  justify-content: center;
  cursor: pointer;
`

export const Timer = styled.div`
    display: flex;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: black;
    /* border: 1px solid black; */
    margin-top: 35px;
    justify-content: center;
`