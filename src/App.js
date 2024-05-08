
import './App.css';
import Accordian from './components/accordian/index';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';

function App() {
  return (
    <div className="App">
      {/* Accordion Component */}
      {/* <Accordian /> */}
      {/* Random Color Component */}
      {/* <RandomColor /> */}
      {/* Star Rating Component */}
      {/* <StarRating /> */}
      {/* Image Slider Component */}
      <ImageSlider url={'https://picsum.photos/v2/list'} page={"1"} limit={"10"} />
    </div>
  );
}

export default App;
