import React, { useEffect, useState } from "react";
import LocationCard from "./contents/LocationCard";
import Dropdown from "./contents/Dropdown";
import { Weather } from "./contents/LocationCard";
import { useSelector, useDispatch } from "react-redux";
import { infoAdd, infoChange } from "../modules/store";
import { RootState } from "../modules";
   
function Main() {
    const [form, setForm] = useState<String>('서울');
    const [subform, setSubform] = useState<String>('전체보기')
    const [weather, setWeather] = useState<Weather[]>([]);
   
    const onhandleChange = (e : React.ChangeEvent<HTMLSelectElement>)  => {
      setForm(e.target.value)
    
    }
    
    const onHandleChange = (e : React.ChangeEvent<HTMLSelectElement>)  => {
      change(e.target.value)
      setSubform(e.target.value)
  
    }
  
    const dispatch = useDispatch();
    const info = (data) => dispatch(infoAdd(data))
    const change = (data) => dispatch(infoChange(data))
  
    function getData(form, setWeather){
      const getParameters = {
        serviceKey:
          "LKsaWKoL8qc4WmJO1jRNr7Lv82xArTaVcC11FZB9YHHfkQei0XkFxPT%2BbOwXjNfuHus07m4Yye0nMw%2FlmoZqdw%3D%3D",
        returnType: "json",
        numOfRows: "100",
        pageNo: "1",
        sidoName: form,
        ver: "1.0",
      };
      fetch(
        `https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=${getParameters["serviceKey"]}&returnType=${getParameters["returnType"]}&numOfRows=${getParameters["numOfRows"]}&pageNo=${getParameters["pageNo"]}&sidoName=${getParameters["sidoName"]}&ver=${getParameters["ver"]}`
      )
      .then((res)=> res.json()) 
      .then(function (data) { 
          setWeather(data.response.body.items)
          info(data.response.body.items)
      }) 
    }
  
    const result = useSelector((state : RootState) => state.weatherReducer.location)
    const contents = useSelector((state : RootState) => state.weatherReducer.contents)
    console.log(result)
    useEffect(() =>{
      if(subform === "전체보기"){
        setWeather(result)
      } else {
        setWeather(contents)
      }
    },[subform])
    useEffect(()=>{
      getData(form, setWeather)
      },[form])
  
  
    return (
      <div className="App">
        <Dropdown change={onhandleChange} event={onHandleChange} data={result}/>
        <div className="inner">
          {weather.map((item,index)=>{
            return <LocationCard key={index} item={item}/>
          })}
        </div>
      </div>
    );
  }
  
export default Main;