import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from 'react-bootstrap/Card';
import Avatar from '../../assets/img/Filmes/avatar.jpg';
import AsBranquelas from '../../assets/img/Filmes/asbranquelas.jpg';
import TudoEm from '../../assets/img/Filmes/TudoEm.jfif'
import Titanic from '../../assets/img/Filmes/titanic.jfif'
import Clube from '../../assets/img/Filmes/clubedaluta.jfif'
import Barbie from '../../assets/img/Filmes/barbie.jpg'

const items = [
    
    <div key={1}><Card style={{ width: '18rem', backgroundColor:"#101010"}} className="ms-5">
          <Card.Img  style={{height:'10rem'}} variant="top" src={Avatar}/>
           <Card.Body>
             <Card.Title style={{textAlign:'center', fontSize:25, color:"white"}}>Avatar 2</Card.Title>
          </Card.Body>
        </Card></div>,
    <div key={2}> <Card style={{ width: '18rem', backgroundColor:"#101010"}} className="ms-5">
          <Card.Img style={{height:'10rem'}} variant="top" src={AsBranquelas}/>
         <Card.Body>
            <Card.Title style={{textAlign:'center', fontSize:25, color:"white"}}>As Branquelas</Card.Title>
          </Card.Body>
        </Card></div>,
    <div key={3}><Card style={{ width: '18rem', backgroundColor:"#101010"}} className="ms-5">
         <Card.Img style={{height:'10rem'}} variant="top" src={TudoEm}/>
         <Card.Body>
           <Card.Title style={{textAlign:'center', fontSize:25, color:"white"}}>Tudo em Todo ... </Card.Title>
         </Card.Body>
      </Card></div>,
    <div key={4}><Card style={{ width: '18rem', backgroundColor:"#101010"}} className="ms-5">
    <Card.Img style={{height:'10rem'}} variant="top" src={Titanic}/>
         <Card.Body>
            <Card.Title style={{textAlign:'center', fontSize:25, color:"white"}}>Titanic</Card.Title>
          </Card.Body>
        </Card></div>,
    <div key={5}><Card style={{ width: '18rem', backgroundColor:"#101010"}} className="ms-5">
        <Card.Img style={{height:'10rem'}} variant="top" src={Clube}/>
          <Card.Body>
            <Card.Title style={{textAlign:'center', fontSize:25, color:"white"}}>Clube da Luta</Card.Title>
         </Card.Body>
       </Card></div>,
        <div key={6}><Card style={{ width: '18rem', backgroundColor:"#101010"}} className="ms-5">
        <Card.Img style={{height:'10rem'}} variant="top" src={Barbie}/>
          <Card.Body>
            <Card.Title style={{textAlign:'center', fontSize:25, color:"white"}}>Barbie Fairytopia</Card.Title>
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
    className: 'margin-left-20',
    dots: true,
    infinite: true,
    centerMode: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 500,
    responsive: responsive,
  };
  const FilmesCarousel = () => {
    return (
     <>
      <h4 className="text-white my-4 " style={{fontFamily:"Inter", fontSize:"30px"}}>Filmes</h4>
      <Carousel {...settings} >
        {items}
      </Carousel>
      </>
    );
  };
  

  export default FilmesCarousel;