import { useSelector,useDispatch } from "react-redux";
import Options from "./Options";
import { setNewQuestion } from "../store/country-slice";
import { useEffect,useState } from "react";
import logoQuiz from "../assets/logoquiz.svg";
import {QuestionDiv} from "./Question.styled";

const Question=()=>{
    const dispatch=useDispatch();
    const {data,isAnsweredCorrect}=useSelector((state)=>state.country);
    const [question,setQuestion]=useState({});

    useEffect(()=>{
        let getRandom=Math.round(Math.random()*1);
        const {flagqtn,capitalqtn}={
            capitalqtn:`what is the capital of ${data.question.name}?.`,
            flagqtn:'which Country does this flag belong to ?.'
        }
        getRandom=data.question.capital===undefined ?0:getRandom;
        setQuestion({qtn:getRandom===0 ?flagqtn:capitalqtn,random:getRandom});
    },[data]);

    function nextBtnClickHandler(){
        if(isAnsweredCorrect.isCorrect!==null){ 
            dispatch(setNewQuestion());
        }
    }
    return (
        <QuestionDiv>
            <img src={logoQuiz} className="cardImage" alt="card image"/>
            <div className="qtnDiv">
                {question.random===0  && data.question.flag && <img className="qtnImage" src={data.question.flag}/>}
                <p className="question">{question.qtn}</p>
                <Options options={data.options} qtnid={data.question.id} type={question.random}/>
                {isAnsweredCorrect.isCorrect!==null && <button className="nextButton button" onClick={nextBtnClickHandler}>next</button>}
            </div>
        </QuestionDiv>

    )
}

export default Question;