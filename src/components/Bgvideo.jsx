import React, { Component } from "react";
import vid from "../assets/video.mp4";

class Bgvideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
    this.videoRef = React.createRef();
  }

  componentDidMount() {
    const video = this.videoRef.current;

    if (video) {
      video.addEventListener("loadeddata", () => {
        this.setState({ loading: false });
      });
    }
  }

  render() {
    return (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
        }}
      >
        {this.state.loading && <div>Loading...</div>}
        <video
          autoPlay
          muted
          loop
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            left: 0,
            top: 0,
            objectFit: "cover",
            zIndex: -1,
            opacity: this.state.loading ? 0 : 1,
            transition: "opacity 2s ease-in-out",
          }}
          ref={this.videoRef}
        >
          <source src={vid} type="video/mp4" />
        </video>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1, // Place the content above the video
          }}
        >
          {this.props.children} {/* Render child components */}
        </div>
      </div>
    );
  }
}

export default Bgvideo;
