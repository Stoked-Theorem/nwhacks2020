import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Menu, CameraUI} from './components';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a> */}
//         <StartCamButton/>
//       </header>
//     </div>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      badCodeFlag: true
    };
  }

  handleClick() {
    let flag = !this.state.badCodeFlag;
    this.setState({badCodeFlag: flag});
  }

  render() {
    return(
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
          {/* <Menu/> */}
          {/* <CameraUI/> */}
          {this.state.badCodeFlag ? <Menu onClick={() => this.handleClick()}/> : <CameraUI/>}
        </header>
      </div>
    );
  }
}

export default App;
