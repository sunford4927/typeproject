import { Weather } from "../compoent/contents/LocationCard";



const ADD = "ADD" as const;
const CHANGE = "CHANGE" as const;
const FAVORITES = "FAVORITES" as const;

export const infoAdd = (data :{ [index: string]: string }[] ) => ({type : ADD, info : data})
export const infoChange = (data : string) => ({type : CHANGE, info : data})
export const infoFavorites = (cont : { [index: string]: string }[]) => ({type : FAVORITES, favorites : cont})

type ActionContainer =
| ReturnType<typeof infoAdd> 
| ReturnType<typeof infoChange> 
| ReturnType<typeof infoFavorites> 



type infoState= {
    location : { [key: string]: string }[],
    contents : { [key: string]: string }[] | Weather[];
    favorites : { [key: string]: string }[]| Weather[];
}
    // contents : { [index: string]:  Weather[] }[] | Weather[];


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
    favorites : [],
}
export const weatherReducer = (state : infoState =InitialState, action :ActionContainer) => {
    switch (action.type){
        case ADD:
            return {...state, location: action.info}
        case CHANGE:
            let newContents = state.location.filter((info)=> info.stationName === action.info)
            return {...state, contents: newContents}
        case FAVORITES:
            let newFavorites = state.favorites.concat(action.favorites)
            console.log("state :",state, "action :",action)
            return {...state, favorites: newFavorites}
        default:
            return state
    }
    
}



