import styled from "styled-components";
import {colors,fontFamily} from "../assets/constant";

const ResultDiv=styled.div`
    color:${colors.blue3};
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
    height:100%;
    font-family: ${fontFamily.font};
    & .resultImage{
        width:80%;
    }

    & .tryButton{
        background-color:${colors.white};
        border:2px solid ${colors.blue3};
        color:${colors.blue3};
    }
    h1{
        margin:0;
    }
    p{
        margin:0;
        font-size:18px;
        & span{
            font-size:24px;
            font-weight:700;
            color:${colors.green1};
        }
    }

`
export {ResultDiv}