import React from 'react';

export class Menu extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <>
        <div>PulseAlert</div>
        {/* <CamStart onClick={this.state.onClick}/> */}
        <CamStart onClick={this.props.onClick}/>
      </>
    );
  }
}

function CamStart(props) {
  return (
    // <button onClick={props.onClick}>{"Start Camera"}</button>
    <button onClick={props.onClick}>{"Start Camera"}</button>
    // <video hidden id="webcam" width="640" height="480"></video>
    // <canvas id="canvas" width="640" height="480"></canvas>
  );
}
