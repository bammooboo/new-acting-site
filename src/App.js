import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import { Home, ImageGallery, Showreel, Stats, VideoGallery } from './pages';

import styled from 'styled-components';
import { breakpoints } from './ui';

const Page = styled.main`
  background: rgb(25,26,30);
  background: linear-gradient(90deg, rgba(25,26,30,1) 0%, rgba(25,26,30,1) 54%, rgba(33,33,33,1) 100%);
  overflow: hidden;
  padding: 0 16px;

  @media (min-width: ${breakpoints.md}px) {
    padding: 0 32px;
  }


  @media (min-width: ${breakpoints.lg}px) {
    padding: 0 64px;
  }
`;

function App() {
  const [siteData, setSiteData] = useState({});
  const [heroImages, setHeroImages] = useState([]);
  const [siteLinks, setSiteLinks] = useState([]);

  useEffect(() => {
    axios.get('data/data.json')
      .then((res)=>{
        setSiteData(res.data);
        setHeroImages(res.data.heroImages);
        setSiteLinks(res.data.links);
      }).catch((err)=>{
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header data={siteData} links={siteLinks} />
        <Page>
          <Routes>
            <Route path='/' exact={`${true}`} element={<Home data={siteData} images={heroImages} />} />
            <Route path='/image-gallery' exact={`${true}`} element={<ImageGallery data={siteData} />} />
            <Route path='/showreel' exact={`${true}`} element={<Showreel data={siteData} />} />
            <Route path='/stats' exact={`${true}`} element={<Stats data={siteData} />} />
            <Route path='/video-gallery' exact={`${true}`} element={<VideoGallery data={siteData} />} />
          </Routes>
        </Page>
      </BrowserRouter>
    </div>
  );
}

export default App;
