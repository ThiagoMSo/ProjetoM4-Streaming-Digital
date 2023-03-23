import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from 'react-bootstrap/Card';
import Fleabag from '../../assets/img/Series/flebag.jpg';
import Naruto from '../../assets/img/Series/naruto.jpg';
import NewGirl from '../../assets/img/Series/newgirl.jpg';
import American from '../../assets/img/Series/americanhorror.jfif';
import Greys from '../../assets/img/Series/greys.jpeg';
import Breaking from '../../assets/img/Series/breakingbad.jfif';

const items = [
  <div key={1}>
    <Card style={{ width: '18rem', backgroundColor: '#101010' }} className="ms-5">
      <Card.Img style={{ height: '10rem' }} variant="top" src={Fleabag} />
      <Card.Body>
        <Card.Title
          style={{ textAlign: 'center', fontSize: 25, color: 'white' }}>
          Fleabag
        </Card.Title>
      </Card.Body>
    </Card>
  </div>,
  <div key={2}>
    {' '}
    <Card style={{ width: '18rem', backgroundColor: '#101010' }} className="ms-5">
      <Card.Img style={{ height: '10rem' }} variant="top" src={Naruto} />
      <Card.Body>
        <Card.Title
          style={{ textAlign: 'center',  fontSize: 25, color: 'white' }}>
          Naruto
        </Card.Title>
      </Card.Body>
    </Card>
  </div>,
  <div key={3}>
    <Card style={{ width: '18rem', backgroundColor: '#101010' }} className="ms-5">
      <Card.Img style={{ height: '10rem' }} variant="top" src={NewGirl} />
      <Card.Body>
        <Card.Title
          style={{ textAlign: 'center',  fontSize: 25, color: 'white' }}>
          New Girl
        </Card.Title>
      </Card.Body>
    </Card>
  </div>,
  <div key={4}>
    <Card style={{ width: '18rem', backgroundColor: '#101010' }} className="ms-5">
      <Card.Img style={{ height: '10rem' }} variant="top" src={American} />
      <Card.Body>
        <Card.Title
          style={{ textAlign: 'center',  fontSize: 25, color: 'white' }}>
          American
        </Card.Title>
      </Card.Body>
    </Card>
  </div>,
  <div key={5}>
    <Card style={{ width: '18rem', backgroundColor: '#101010' }} className="ms-5">
      <Card.Img style={{ height: '10rem' }} variant="top" src={Greys} />
      <Card.Body>
        <Card.Title
          style={{ textAlign: 'center',  fontSize: 25, color: 'white' }}>
          Grey's Anatomy
        </Card.Title>
      </Card.Body>
    </Card>
  </div>,
  <div key={6}>
    <Card style={{ width: '18rem', backgroundColor: '#101010' }} className="ms-5">
      <Card.Img style={{ height: '10rem' }} variant="top" src={Breaking} />
      <Card.Body>
        <Card.Title
          style={{ textAlign: 'center',  fontSize: 25, color: 'white' }}>
          Breaking Bad
        </Card.Title>
      </Card.Body>
    </Card>
  </div>
];
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

const settings = {
  arrows: true,
  className: '',
  dots: true,
  infinite: true,
  centerMode: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  speed: 500,
  responsive: responsive
};
const SeriesCarousel = () => {
  return (
    <>
      <h4 className="text-white my-4" style={{ fontFamily: 'Inter', fontSize: '30px' }}>
        Séries
      </h4>
      <Carousel {...settings}>{items}</Carousel>
    </>
  );
};
export default SeriesCarousel;
