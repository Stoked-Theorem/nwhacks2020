/* eslint-disable */
import React from 'react';


import { Heartbeat } from './heartbeat.js';

const OPENCV_URI = "https://docs.opencv.org/master/opencv.js";
const HAARCASCADE_URI = "haarcascade_frontalface_alt.xml"

// Load opencv when needed
async function loadOpenCv(uri) {
    return new Promise(function(resolve, reject) {
      console.log("starting to load opencv");
      var tag = document.createElement('script');
      tag.src = uri;
      tag.async = true;
      tag.type = 'text/javascript'
      tag.onload = () => {
        cv['onRuntimeInitialized'] = () => {
          console.log("opencv ready");
          resolve();
        }
      };
      tag.onerror = () => {
        throw new URIError("opencv didn't load correctly.");
      };
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    });
  }
  
 

export class CameraUI extends React.Component {
  render() {
    return (
      <>
        <div>PulseAlert</div>
        <Display/>
        <div>
          <span>bpm</span>
          <span>lOoK aT tHiS gRaPh</span>
        </div>
        {/* <CamStart/> */}
      </>
    );
  }

}

class Display extends React.Component {
  render() {
    return (
      <>
      <video hidden id="webcam" width="640" height="480"></video>
      <canvas id="canvas" width="640" height="480"></canvas>
      </>
    )
  }

  componentDidMount() {
    let demo = new Heartbeat("webcam", "canvas", HAARCASCADE_URI, 30, 6, 250);
    var ready = loadOpenCv(OPENCV_URI);
    ready.then(function() {
      demo.init();
    });
  
  }
}