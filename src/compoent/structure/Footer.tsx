import React from "react";
import StarIcon from '@mui/icons-material/Star';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import MapTwoToneIcon from '@mui/icons-material/MapTwoTone';

function Footer() {
  return (
    <footer>
      <div className="footer_container">
        <div className="footer_box">
          <FmdGoodOutlinedIcon/>
          <p>내 지역보기</p>
        </div>
        <div className="footer_box">
          <MapTwoToneIcon/>
          <p>전체 시도보기</p>
        </div>
        <div className="footer_box">
          <StarIcon/>
          <p>즐겨찾기</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
