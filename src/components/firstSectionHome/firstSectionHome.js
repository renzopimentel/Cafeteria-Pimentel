import React from 'react'
import styled from 'styled-components';
import Video from '../../videos/video_coffee.mp4';

const firstSectionHome = () => {
  return (
    <SectionContainer>
        <Bg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </Bg>
    </SectionContainer>
  )
}

export default firstSectionHome

const SectionContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0  30px;
    height: 800px;
    position: relative;
    z-index: 1;
`

const Bg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
    filter: opacity(80%);

`