import styled from "styled-components";
import {colors,fontFamily} from "../assets/constant";

const CardDiv=styled.div`
    width:25%;
    height:100%;
    margin:0 auto;
    padding:0;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 1199px) {
        width:80%;
    }
`;

const Heading=styled.h3`
    align-self:flex-start;
    font-family: ${fontFamily.font};
    color:${colors.white};
    
`;

const Card=styled.div`
    width:100%;
    min-height:65%;
    margin:0 auto;
    padding:10px 5px;
    border-radius:30px;
    background-color:${colors.white};
    font-family: ${fontFamily.font};
    font-size:18px;
    box-shadow:2px 2px 10px #2F527B;
    box-sizing: border-box;
    & .button{
        font-family: ${fontFamily.font};
        font-size:14px;
        font-weight:700;
        border-radius:12px;
        padding:16px 32px;
        cursor:pointer;
    }
`;

export {CardDiv,Card,Heading};