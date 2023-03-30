import { Component } from "react";
import {
  FacebookIcon,
  FacebookShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import "./App.css";

class App extends Component {
  render() {
    const shareUrl = "https://www.youtube.com/watch?v=9WzIACv_mxs";
    return (
      <div>
        <h1>Shiva</h1>
        <FacebookShareButton url={shareUrl} quote="share link">
          <FacebookIcon />
        </FacebookShareButton>
        <WhatsappShareButton url={shareUrl} quote="share link">
          <WhatsappIcon />
        </WhatsappShareButton>
      </div>
    );
  }
}

export default App;
