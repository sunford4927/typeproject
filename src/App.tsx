import React, { useEffect, useState } from "react";
import "./App.css";
import Footer from "./compoent/structure/Footer";
import LocationCard from "./compoent/contents/LocationCard";
import Header from "./compoent/structure/Header";
import Dropdown from "./compoent/contents/Dropdown";
import { Weather } from "./compoent/contents/LocationCard";

function App() : JSX.Element {
  const [form, setForm] = useState<String>('서울');
  const [weather, setWeather] = useState<Weather[]>([]);
  const onhandleChange = (e : React.ChangeEvent<HTMLSelectElement>)  => {
    setForm(e.target.value)
  }

  useEffect(()=>{
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

    },[form])

  return (
    <div className="App">
      <Header />
      <Dropdown change={onhandleChange} />
      <div className="inner">
        {weather.map((item,index)=>{
          return <LocationCard key={index} item={item}/>
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
