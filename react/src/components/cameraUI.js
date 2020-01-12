import React from 'react';

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
      <div>video</div>
    )
  }
}