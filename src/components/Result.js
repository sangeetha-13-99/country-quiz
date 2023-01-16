import { setNewQuestion } from "../store/country-slice";
import { useDispatch ,useSelector} from "react-redux";
import {countryActions} from "../store/country-slice";
import {ResultDiv} from "./Result.styled";
import logoresult from "../assets/logoresult.svg";
import {Heading} from "./CountryQuiz.styled";

const Result=()=>{
    const dispatch=useDispatch();
    const apiData=useSelector(state=>state.api.countries);
    const {count}=useSelector(state=>state.country.showResult)
    function tryAgainHandler(){
        dispatch(countryActions.resetData());
        dispatch(setNewQuestion(apiData));
    }
    return (
        <ResultDiv>
             <img className='resultImage' src={logoresult} alt="result image"/>
             <h1>Results</h1>
             <p>You got <span>{count}</span> correct answers</p>
             
            <button className="tryButton button" onClick={tryAgainHandler}>Try again</button>
        </ResultDiv>
    )
}

export default Result;