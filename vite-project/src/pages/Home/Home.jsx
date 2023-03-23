import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Carousel from '../../components/CarrosselPage/CarrosselPage';
import Filmes from '../../components/CarrosselPage/FilmesCarousel';
import Series from '../../components/CarrosselPage/SeriesCarousel';
import Musicas from '../../components/CarrosselPage/MusicasCarousel';
import { Container } from 'react-bootstrap';
import '../Home/Home.module.css'

export default function Home(){
  return(
    <>
    <Header/>
    <Container className="d-flex flex-column justify-content-center pb-5">
        <Carousel/>
        <Filmes/>
        <Series/>
        <Musicas/>
    </Container>
    <Footer/>
    </>
  )
}