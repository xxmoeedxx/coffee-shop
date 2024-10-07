import React from 'react';
import './assets/css/bootstrap.css';
import './assets/css/linearicons.css';
import './assets/css/font-awesome.min.css';
import './assets/css/magnific-popup.css';
import './assets/css/nice-select.css';
import './assets/css/animate.min.css';
import './assets/css/owl.carousel.css';
import './assets/css/main.css'; // Main stylesheet
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import Header from './components/Header';
import BannerArea from './components/BannerArea';
import VideoSection from './components/VideoSection';
import CoffeeMenu from './components/CoffeeMenu';
import GallerySection from './components/GallerySection';
import ReviewSection from './components/ReviewSection';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <BannerArea />
      <VideoSection />
      <CoffeeMenu />
      <GallerySection />
      <ReviewSection />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default App;
