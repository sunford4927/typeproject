import { Weather } from "../compoent/contents/LocationCard";



const ADD = "ADD" as const;
const CHANGE = "CHANGE" as const;

export const infoAdd = (data :{ [index: string]: string }[] ) => ({type : ADD, info : data})
export const infoChange = (data : string) => ({type : CHANGE, info : data})

type ActionContainer =
| ReturnType<typeof infoAdd> 
| ReturnType<typeof infoChange> 



type infoState= {
    location : { [index: string]: string }[],
    contents : { [index: string]: string }[] | Weather
}

const InitialState :infoState = {
    location : [{
        dataTime : '',
        sidoName : '',
        pm10Grade : '',
        stationName : '',
        pm10Value : '',
}],
    contents : [{
        dataTime : '',
        sidoName : '',
        pm10Grade : '',
        stationName : '',
        pm10Value : '',
}],
}
export const weatherReducer = (state : infoState =InitialState, action :ActionContainer) => {
    switch (action.type){
        case ADD:
            return {...state, location: action.info, contents: action.info}
        case CHANGE:
            let newContents = state.location.filter((info)=> info.stationName === action.info)
            return {...state, contents: newContents}
        default:
            return state
    }
    
}



