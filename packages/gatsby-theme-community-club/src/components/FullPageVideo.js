import React from "react"
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const FixedBackground = styled.div`
  position: fixed;
  width: 100vw;
  height: 100%;
  z-index: -1;
`;

const FullScreenVideo = styled.video`
  opacity: 0.2;
  position: absolute;
  min-height: 100%;
  min-width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Container = styled.div`
  min-height: 100vh;
  display: flex;
`

const VideoSource = ({src, type}) => {
    return (
        <source src={src} type={type} />
    )
}

VideoSource.propTypes = {
    src: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
}

const FullPageVideo = ({children, sources}) => {
  return (
    <Container>
      <FixedBackground>
        <FullScreenVideo preload="auto" autoPlay loop muted>
            {
                (sources || []).map(({src, type}) => (<VideoSource src={src} type={type} />))
            }
          {/*<source src={backgroundMp4} type="video/mp4" />*/}
          {/*<source src={backgroundWebm} type="video/webm" />*/}
        </FullScreenVideo>
      </FixedBackground>
      {children}
    </Container>
  )
}

FullPageVideo.propTypes = {
    children: PropTypes.node,
    sources: PropTypes.arrayOf(PropTypes.shape(VideoSource.propTypes)).isRequired
}

export default FullPageVideo