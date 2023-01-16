import styled,{css} from "styled-components";
import wrongIcon from "../assets/wrong.svg"
import correctIcon from "../assets/correct.svg"
import {colors,fontFamily} from "../assets/constant";

const OptionsDiv=styled.div`
    width:100%;
`;
const Option=styled.div`
    width: 100%;
    margin:8px auto;
    padding: 10px;
    box-sizing: border-box;
    border: 2px solid ${colors.blue2};
    border-radius: 8px;
    position:relative;
    font-family: ${fontFamily.font};
    font-weight:500;
    font-size:14px;
    cursor:pointer;
    color: ${colors.blue2};
    ${(props)=>{
        return props.cssCorrectProp===null && css`
        &:hover{
            background-color:${colors.orange1};
            color:${colors.white};
        }
         `
        }}
    &.wrongAnswer{
        background-color:${colors.red};
        color:${colors.white};
        border:0;
        &::after{
            width:15px;
            position:absolute;
            top:12px;
            right:10px;
            content:url(${wrongIcon});
        }
    }
    &.correctAnswer{
        background-color:${colors.green};
        color:${colors.white};
        border:0;
        &::after{
            width:15px;
            top:12px;
            right:10px;
            position:absolute;
            content:url(${correctIcon});
        }
    }

`;
export {OptionsDiv,Option};