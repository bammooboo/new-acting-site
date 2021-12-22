import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, VideoWrap } from './ui';
import Title from '../Title';
import Footer from '../Footer';

const Showreel = () => {
  const [showReelId, setShowReelId] = useState("");

  useEffect(() => {
    axios.get('data/data.json')
      .then((res)=>{
        setShowReelId(res.data.videos[0].id);
      }).catch((err)=>{
        console.log(err);
      });
  }, []);

  return (
    <Container>
      <Title title="Showreel" />
      <VideoWrap>
        <iframe title="showreel" src={`https://www.youtube.com/embed/${showReelId}`} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowFullScreen" frameBorder="0"></iframe>
      </VideoWrap>
      <Footer />
    </Container>
  );
}

export default Showreel;