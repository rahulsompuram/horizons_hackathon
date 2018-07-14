import React from 'react';
import "video-react/dist/video-react.css";
import { Player, BigPlayButton, seek } from 'video-react';

class Video extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: '',
        };
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.seekTime && this.props.seekTime !== nextProps.seekTime) {
        this.refs.player.seek(nextProps.seekTime);
        this.refs.player.play();
        setTimeout(() => this.props.clearSeekTime(), 100)
      }
    }

    render() {
        return (
          <div>
            <link rel="stylesheet" href="/css/video-react.css" />
            <Player
              ref='player'
              playsInline
              poster="/assets/poster.png"
              src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
              id = "video"
            >
              <BigPlayButton position='center' />
            </Player>
          </div>
        );
    }
}

export default Video;
