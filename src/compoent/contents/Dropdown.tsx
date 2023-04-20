import React, { Dispatch, SetStateAction} from "react";
import { location } from "../../data/get";
import { Weather } from "./LocationCard";

export interface changeProps {
    change : (e : React.ChangeEvent<HTMLSelectElement>) => void;
    event : (e : React.ChangeEvent<HTMLSelectElement>) => void;
    data : Weather[] ;
  }  

function Dropdown({ change, data, event} :changeProps): JSX.Element {
  
  return (
    <div className="dropdown">
      <select className="board_name" name="department" onChange={change}>
        {location.map((item, index) => {
          return <option key={index} value={item}>{item}</option>;
        })}
      </select>
      <select className="isactive" name="department" onChange={event} >
        <option selected value="전체보기">전체보기</option>
        {data.map((item, index) => {
          return <option key={index} value={item.stationName}>{item.stationName}</option>;
        })}
      </select>
    </div>
  );
}

export default Dropdown;

