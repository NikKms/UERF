import {
  HeroBtnSvg1,
  HeroBtnSvg2,
  HeroBtnSvg3,
  HeroBtnSvg4,
  HeroBtnSvg5,
} from '../../common/icons/HeroBtnLeafIcons';
import './HeroBtn.css';

const HeroBtn = ({ icon = null, onClick }) => {
  return (
    <button className="HeroBtn" onClick={onClick}>
      {icon}
      <div className="icon-1">
        <HeroBtnSvg1 />
      </div>
      <div className="icon-2">
        <HeroBtnSvg2 />
      </div>
      <div className="icon-3">
        <HeroBtnSvg3 />
      </div>
      <div className="icon-4">
        <HeroBtnSvg4 />
      </div>
      <div className="icon-5">
        <HeroBtnSvg5 />
      </div>
    </button>
  );
};

export default HeroBtn;
