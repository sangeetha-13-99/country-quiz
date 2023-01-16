import './App.css';
import CountryQuiz from './components/CountryQuiz';
import {useEffect} from "react";
import { useSelector,useDispatch } from 'react-redux';
import { setInitialData } from './store/api-slice';
import { setNewQuestion } from './store/country-slice';
import styled from "styled-components";
import { colors,fontFamily } from './assets/constant';
import hourGlass from "./assets/hourglass.svg";

function App() {
  const dispatch=useDispatch();
  const {isApiLoaded}=useSelector((state)=>state.api);
  const isQuestionSet=useSelector((state)=>state.country.isQuestionSet);
  const {show,message}=useSelector(state=>state.api.showStatusMessage);

  // to set the initial api data on page load
  useEffect(()=>{
    dispatch(setInitialData());
  },[dispatch]);
  
  // to set the question intially after api data loaded
  useEffect(()=>{
    if(isApiLoaded){
      dispatch(setNewQuestion());
    }
  },[isApiLoaded,dispatch]);

 
  return (
      <div className="App">
        {isApiLoaded && isQuestionSet && <CountryQuiz/>}
        {show && <Message>
            <img className='loading' src={hourGlass}/>
            <p>{message}</p>
          </Message>}
        <Footer>created by Sangeetha Jula - devChallenges.io</Footer>
      </div>
  );
}

const Message=styled.div`
  font-family:${fontFamily.font};
  position:absolute;
  top:40%;
  left:50%;
  transform:translate(-50%,-50%);
  color:${colors.orange1};
  font-weight:700;
  font-size:2rem;
  opacity:0.5;

  @keyframes hourGlass{
    from{
        transform:rotate(0deg);
    }
    to{
        transform:rotate(180deg);
    }
  }
  & .loading{
    animation-duration:0.5s;
    animation-iteration-count:infinite;
    animation-name:hourGlass;
  }
`;

const Footer=styled.p`
  font-family:${fontFamily.font};
  position:absolute;
  bottom:0;
  left:50%;
  transform:translate(-50%);
  color:${colors.white};
  font-weight:300;
  font-size:14px;
`;

export default App;
