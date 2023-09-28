import Slider from '../Slider/Slider';
import heroBgArr from '../../common/data/sliderBgArr';

const Hero = () => {
  return (
    <section>
      <Slider data={heroBgArr} />
    </section>
  );
};

export default Hero;
