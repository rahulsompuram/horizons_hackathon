import React from 'react';
import "video-react/dist/video-react.css";
import { Player, BigPlayButton } from 'video-react';

class Video extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: '',
        };
    }

    render() {
        return (
          <div>
            <link rel="stylesheet" href="/css/video-react.css" />
            <Player
              playsInline
              poster="/assets/poster.png"
              src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
              id = "video"
            >
            <BigPlayButton position="center" />
          </Player>
          </div>
        );
    }
}

export default Video;
