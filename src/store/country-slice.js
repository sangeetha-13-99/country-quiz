import { createSlice } from "@reduxjs/toolkit";

const initialResultObject={show:false,count:0};
const initialAnswerObject={isCorrect:null,id:''};
let initialSet=true;
const countrySlice=createSlice({
    name:'countries',
    initialState:{
        correctAnswersCount:0,
        showResult:initialResultObject,
        data:{},
        isAnsweredCorrect:initialAnswerObject,
        isQuestionSet:false
    },
    reducers:{
        setNextQuestion:(state,action)=>{
            if(!state.showResult.show){
                state.data=action.payload;
                state.isQuestionSet=true;
            }
            state.isAnsweredCorrect=initialAnswerObject;
        },
        setResult:(state)=>{
            state.showResult.show=true;
            state.showResult.count=state.correctAnswersCount;
        },
        resetData:(state)=>{
            state.showResult=initialResultObject;
            state.correctAnswersCount=0;
            state.isAnsweredCorrect=initialAnswerObject;
            initialSet=true;
        },
        setShowQuestion:(state,action)=>{
            if(action.payload.id===state.data.question.id){
                state.correctAnswersCount++;
                state.isAnsweredCorrect={isCorrect:true,id:action.payload.id};
            }
            else{
                state.isAnsweredCorrect={isCorrect:false,id:action.payload.id};
            }
        },
    }
});

export const setNewQuestion=()=>{
    let  dataArray,options=[0,1,2,3],question={};

    function getRandom(dataArray){
        dataArray.sort(()=>Math.random()-0.5);
        question=dataArray[0];
        options=options.map(index=>dataArray[index]).sort(()=>Math.random()-0.5);
    }
    return (dispatch,getState)=>{
        let state=getState();
        dataArray=[...state.api.countries];
        getRandom(dataArray);
        if(initialSet && state.country.isAnsweredCorrect.isCorrect===null){
            dispatch(countrySlice.actions.setNextQuestion({question,options}));
            initialSet=false;
        }
        else if(state.country.isAnsweredCorrect.isCorrect===true){
            dispatch(countrySlice.actions.setNextQuestion({question,options}));
        }
        else if(state.country.isAnsweredCorrect.isCorrect===false){
            dispatch(countrySlice.actions.setResult());
        }
    }
}
export const countryActions = countrySlice.actions;
export default countrySlice;