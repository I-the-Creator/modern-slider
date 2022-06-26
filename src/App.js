import Slider from 'react-slick'
import './App.css';

import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'
import img4 from './images/img4.jpg'


const images = [img1, img2, img3, img4]

function App() {

  const settings = {
    dots: true,
    infinite: true,
    speed:500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000
  }

  return (
    <div className="container">
      <h2 className="header">Modern React Carousel</h2>
      <div className="slider">
        <Slider {...settings}>
          {
            images.map((img, i) => (
              <div className="slide" key={i}>
                <img src={img} alt="" />
              </div>
            ))
          }
        </Slider>
      </div>
    </div>
  );
}

export default App;
