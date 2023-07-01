import React from 'react';
import '../app.scss';
import PopularMenu from '../components/PopularMenu/PopularMenu';
import HomeSlider from '../components/HomeSlider';
import ChooseUs from '../components/ChooseUs/ChooseUs';
import MenuPack from '../components/MenuPack/MenuPack';
import Testimonial from '../components/Testimonial/Testimonial';
import Download from '../components/Download/Download';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <>
      <HomeSlider />
      <PopularMenu />
      <ChooseUs />
      <MenuPack />
      <Testimonial />
      <Download />
      <Footer />
    </>
  )
}

export default Home;