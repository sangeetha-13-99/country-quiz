import Question from "./Question";
import Result from "./Result";
import { Card,CardDiv,Heading } from "./CountryQuiz.styled";
import { useSelector } from "react-redux";

const CountryQuiz=()=>{
    const showResult=useSelector(state=>state.country.showResult.show)
    return (
        <CardDiv>
            <Heading>COUNTRY QUIZ</Heading>
            <Card>
                {!showResult && <Question/>}
                {showResult && <Result/>}
            </Card>
        </CardDiv>
    )
}

export default CountryQuiz;