import styled from "styled-components";
import {colors,fontFamily} from "../assets/constant";

const QuestionDiv=styled.div`
    position:relative;
    padding:0 10px;
    height:100%;

    & .qtnDiv{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        height:100%;

    }
    & .cardImage{
        position:absolute;
        width:120px;
        height:120px;
        right:0;
        top:-80px;
    }
    & .qtnImage{
        box-shadow:1px 1px 2px ${colors.blue1};
        align-self: flex-start;
        width:84px;
        height:54px;
        left:0;
        top:0;
    }
    & .question{
        font-family: ${fontFamily.font};
        color:${colors.blue1};
        font-weight:700;
        margin:15px auto;
    }
    & .nextButton{
        border:none;
        align-self:flex-end;
        background: ${colors.orange1};
        color:white;
    }

`;

export {QuestionDiv};