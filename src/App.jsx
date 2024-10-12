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
import UserProfile from './components/UserProfile'; // New Sidebar component
import DashboardCards from './components/DashboardCards'; // New DashboardCards component
import RecentMovementChart from './components/RecentMovementChart'; // New RecentMovementChart component
import LatestProjects from './components/LatestProjects'; // New LatestProjects component
import UpgradePrompt from './components/UpgradePrompt'; // New UpgradePrompt component
const App = () => {
  return (
    <div className="main">
      {/* Existing components */}
      <Header />
      <BannerArea />
      <VideoSection />
      <CoffeeMenu />
      <GallerySection />
      <ReviewSection />
      <BlogSection />

      {/* New components: User Profile, Dashboard, and Latest Projects */}
      <main className="content">
        <div className="container-fluid p-0">
          <h1 className="h3 mb-3"><strong>Dashboard</strong> Overview</h1>
          
          {/* User Profile Component */}
          <UserProfile />

          {/* Dashboard Cards */}
          <DashboardCards />

          {/* Recent Movement Chart */}
          <div className="row">
            <div className="col-12 col-lg-8 d-flex">
              <RecentMovementChart />
            </div>
          </div>

          {/* Latest Projects Table */}
          <LatestProjects />
          
          {/* Upgrade Prompt */}
          <UpgradePrompt />
        </div>
      </main>

      {/* Existing Footer */}
      <Footer />
    </div>
  );
};

export default App;
