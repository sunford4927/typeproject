import React, { useEffect, useState } from "react";
import "./App.css";
import Footer from "./compoent/structure/Footer";
import LocationCard from "./compoent/contents/LocationCard";
import Header from "./compoent/structure/Header";
import Dropdown from "./compoent/contents/Dropdown";
import { Weather } from "./compoent/contents/LocationCard";
import { useSelector, useDispatch } from "react-redux";
import { infoAdd } from "./modules/store";
import { RootState } from "./modules";


function App() : JSX.Element {
  const [form, setForm] = useState<String>('서울');
  const [weather, setWeather] = useState<Weather[]>([]);
  const onhandleChange = (e : React.ChangeEvent<HTMLSelectElement>)  => {
    setForm(e.target.value)
  }
   
  const dispatch = useDispatch();
  const info = (data) => dispatch(infoAdd(data))

  const result = useSelector((state : RootState) => state.weatherReducer.contents)
  console.log(result[0])
  useEffect(() =>{
    info(weather)
  },[])
  useEffect(()=>{
    getData(form, setWeather)
    info(weather)
    },[form])


  return (
    <div className="App">
      <Header />
      <Dropdown change={onhandleChange} data={weather}/>
      <div className="inner">
        {result.lenght > 0 ? result.map((item:Weather,index)=>{
          return <LocationCard key={index} item={item}/>
        }) : null}
      </div>
      <Footer />
    </div>
  );
}

export default App;


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
  }) 
}
