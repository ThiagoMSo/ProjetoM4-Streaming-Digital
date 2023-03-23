import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from 'react-bootstrap/Card';
import Pericles from '../../assets/img/Musicas/pericles.jfif';
import Queen from '../../assets/img/Musicas/queen.jpg';
import Rihanna from '../../assets/img/Musicas/rihanna.webp';
import Baco from '../../assets/img/Musicas/baco.webp';
import Gaga from '../../assets/img/Musicas/ladygaga.jpg';
import TheW from '../../assets/img/Musicas/theweekend.jpg';

const items = [
  
    <div key={1}><Card style={{ width: '18rem', backgroundColor:"#101010"}} className="ms-5">
          <Card.Img style={{height:'10rem'}} variant="top" src={Pericles}/>
           <Card.Body>
             <Card.Title style={{textAlign:'center', fontSize:25, color:"white"}}>Péricles</Card.Title>
          </Card.Body>
        </Card></div>,
    <div key={2}> <Card style={{ width: '18rem', backgroundColor:"#101010"}} className="ms-5">
          <Card.Img style={{height:'10rem'}} variant="top" src={Queen}/>
         <Card.Body>
            <Card.Title style={{textAlign:'center',  fontSize:25, color:"white"}}>Queen</Card.Title>
          </Card.Body>
        </Card></div>,
    <div key={3}><Card style={{ width: '18rem', backgroundColor:"#101010"}} className="ms-5">
         <Card.Img style={{height:'10rem'}} variant="top" src={Rihanna}/>
         <Card.Body>
           <Card.Title style={{textAlign:'center', fontSize:25, color:"white"}}>Rihanna</Card.Title>
         </Card.Body>
      </Card></div>,
    <div key={4}><Card style={{ width: '18rem', backgroundColor:"#101010"}} className="ms-5">
    <Card.Img style={{height:'10rem'}} variant="top" src={Baco}/>
         <Card.Body>
            <Card.Title style={{textAlign:'center', fontSize:25, color:"white"}}>Baco Exu do Blues</Card.Title>
          </Card.Body>
        </Card></div>,
    <div key={5}><Card style={{ width: '18rem', backgroundColor:"#101010"}} className="ms-5">
        <Card.Img style={{height:'10rem'}} variant="top" src={Gaga}/>
          <Card.Body>
            <Card.Title style={{textAlign:'center', fontSize:25, color:"white"}}>Lady Gaga</Card.Title>
         </Card.Body>
       </Card></div>,
        <div key={6}><Card style={{ width: '18rem', backgroundColor:"#101010"}} className="ms-5">
        <Card.Img style={{height:'10rem'}} variant="top" src={TheW}/>
          <Card.Body>
            <Card.Title style={{textAlign:'center', fontSize:25, color:"white"}}>The Weeknd</Card.Title>
         </Card.Body>
       </Card></div>,
  ];
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
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
    responsive: responsive,
  };
  const MusicasCarousel = () => {
    return (
      <>
      <h4 className="text-white my-4" style={{fontFamily:"Inter", fontSize:"30px"}}>Músicas</h4>
      <Carousel {...settings} className="mb-5">
        {items}
      </Carousel>
      </>
    );
  };
  

  export default MusicasCarousel;