import { OptionsDiv,Option } from "./Options.styled"
import { useDispatch, useSelector } from "react-redux";
import {countryActions} from "../store/country-slice";

const Options=({options,qtnid,type})=>{
    const dispatch=useDispatch();
    const {isCorrect,id:clickedId}=useSelector(state=>state.country.isAnsweredCorrect)
    function optionClickHandler(id){
        if(isCorrect===null){
            dispatch(countryActions.setShowQuestion({
                id
            }));
        }
    }
    return (
        <OptionsDiv>
            {
             options.map(item=>{
                 return (
                 <Option key={item.id} className={
                    `${isCorrect!==null && qtnid===item.id?'correctAnswer':''}${isCorrect===false && clickedId===item.id?'wrongAnswer':''}`} cssCorrectProp={isCorrect} onClick={()=>optionClickHandler(item.id)}>
                    {type===0 ?item.name:
                    item.capital===undefined?item.name:item.capital
                    }
                 </Option>
                 )
             })   
            }
        </OptionsDiv>
    )
}
export default Options;