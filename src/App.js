
import './App.css';
import Accordian from './components/accordian/index';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-data';
import TreeView from './components/tree-view';
import { menus } from './components/tree-view/data';

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
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} page={"1"} limit={"10"} /> */}

      {/* Load more products component */}
      {/* <LoadMoreData /> */}

      {/* Tree view component */}
      <TreeView menus={menus} />
    </div>
  );
}

export default App;
