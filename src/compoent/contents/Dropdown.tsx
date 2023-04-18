import React, { Dispatch, SetStateAction} from "react";
import { location } from "../../data/get";

export interface changeProps {
    change : (e : React.ChangeEvent<HTMLSelectElement>) => void;
} 

function Dropdown(props :changeProps) {
  return (
    <div className="dropdown">
      <select name="department" onChange={props.change}>
        {location.map((item, index) => {
          return <option key={index} value={item}>{item}</option>;
        })}
      </select>
      <select className="isactive" name="department" onChange={props.change}>
        {location.map((item, index) => {
          return <option key={index} value={item}>{item}</option>;
        })}
      </select>
    </div>
  );
}

export default Dropdown;

