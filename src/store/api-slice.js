import { createSlice } from "@reduxjs/toolkit";

const ApiSlice=createSlice({
    name:'api',
    initialState:{
        countries:[],
        isApiLoaded:false,
        showStatusMessage:{show:true,message:'',type:''},
    },
    reducers:{
        setData:(state,action)=>{
            if(state.showStatusMessage.show===false){
                state.isApiLoaded=true;
                state.countries=action.payload;
            }
        },
        setMessage:(state,action)=>{
            if(action.payload.type==='done'){
                state.showStatusMessage.show=false;
            }
            else{
                state.showStatusMessage.show=true;
            }
            state.showStatusMessage.message=action.payload.msg;
        }
    }
});

export const setInitialData=()=>{
    return async(dispatch)=>{
        const fetchApi=async()=>{
            dispatch(ApiSlice.actions.setMessage({msg:'Data is Fetching',type:'loading'}));
            const response =await  fetch("https://restcountries.com/v2/all");
            if(!response.ok){
                throw new Error('oops! May be Api has been Changed');
            }
            const data=await response.json();
            return data;
        }
        try{
            const data=await fetchApi();
            const arrangeData=data.map((item)=>{
                return {
                    id:item.alpha2Code,
                    capital:item.capital,
                    name:item.name,
                    flag:item.flags.svg,
                }
            })
            dispatch(ApiSlice.actions.setMessage({msg:'',type:'done'}));
            dispatch(ApiSlice.actions.setData(arrangeData));
        }
        catch(error){
            dispatch(ApiSlice.actions.setMessage({msg:error,type:'error'}));
        }
    }
}

export default ApiSlice;