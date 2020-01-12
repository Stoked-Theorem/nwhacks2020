import {Heartbeat} from './heartbeat.js';

const OPENCV_URI = "https://docs.opencv.org/master/opencv.js";
const HAARCASCADE_URI = "haarcascade_frontalface_alt.xml"

const express = require('express');
const app = express();

app.set('trust proxy', true);

app.get('/', (req, res) => {
  console.log('Hello world received a request.');

  const target = process.env.TARGET || 'World';
  res.send(`Hello ${target}!`);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Hello world listening on port', port);
});

module.exports = app;

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

let demo = new Heartbeat("webcam", "canvas", HAARCASCADE_URI, 30, 6, 250);
var ready = loadOpenCv(OPENCV_URI);
ready.then(function() {
  demo.init();
});
