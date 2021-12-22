import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Image, ImgContain, Inner } from './ui';
import Details from '../Details';
import Title from '../Title';
import Footer from '../Footer';

const Stats = () => {
  const [stats, setStats] = useState({});
  const [statsImage, setStatsImage] = useState({});

  useEffect(() => {
    axios.get('data/data.json')
      .then((res)=>{
        setStats(res.data.stats);
        setStatsImage(res.data.heroImages[0]);
      }).catch((err)=>{
        console.log(err);
      });
  }, []);

  return (
    <Container>
      <Title title="Stats" />
      <Inner>
        <Details stats={stats} />
        <Image>
          <ImgContain>
            <img src={statsImage.src} alt={statsImage.alt} />
          </ImgContain>
        </Image>
      </Inner>
      <Footer />
    </Container>
  );
}

export default Stats;