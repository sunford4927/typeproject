import React, {useState, useEffect} from 'react';
import "./LocationCard.css"
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useSelector, useDispatch } from "react-redux";
import { infoFavorites } from '../../modules/store';

export interface Weather {
    [key : string] : string;
    // dataTime : string;
    // sidoName : string;
    // pm10Grade : string;
    // stationName : string;
    // pm10Value : string;
}

function LocationCard({item} : {item :  Weather}) : JSX.Element {
    const [isClick, setIsClick] = useState(false)

    const dispatch = useDispatch()
    const onhandleADD=(data)=>dispatch( infoFavorites(data))

    const favoritesCheck = (e:React.ChangeEvent<HTMLElement>) =>{
        e.preventDefault();
        setIsClick(!isClick)

    }

    useEffect(()=>{
        onhandleADD(item)

    }, [isClick])
    return (
        <div className='LocationCard' style={item.pm10Grade === '1'? {backgroundColor: '#2E2EFE'} : item.pm10Grade === '2' ? {backgroundColor: '#81F781'} : item.pm10Grade === '3' ? {backgroundColor: '#FFFF00'} : item.pm10Grade === '4' ? {backgroundColor: '#FF8000'} : {backgroundColor: '#DF0101'} }>
            <div className="top_box">
                <p className='text main' style={{fontSize : '18px'}}>{item.stationName}</p>
                <p className='text sub' style={{fontSize : '14px'}}>{item.sidoName}</p>
                <p className='check' onClick={(e) =>favoritesCheck}>{isClick ? <StarIcon/>:<StarBorderIcon/>}</p>
            </div>
            <div className="body_box">
                <div className="state_value">{item.pm10Grade === '1'? '좋음' : item.pm10Grade === '2' ? '보통' : item.pm10Grade === '3' ? '한때나쁨' : item.pm10Grade === '4' ? '나쁨' : item.pm10Grade === '5' ? '매우나쁨' : '알수없음' }</div>
                <p>미세먼지 수치 : {item.pm10Value}</p>
                <p>({item.dataTime} 기준)</p>
            </div>
        </div>
    );
}

export default LocationCard;

// dataTime : 측정일시
// sidoName : 시도명
// pm10Grade : 1-좋음, 2-qhxhd, 3-한때나쁨, 4-나쁨, 5-매우나쁨
// stationName : 측정소명
// pm10Value : 미세먼지 농도