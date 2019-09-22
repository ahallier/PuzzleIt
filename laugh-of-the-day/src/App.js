import React from 'react';
import logo from './logo.svg';
import './App.css';

function Img(props) {
  return (
    <div  style={{display: 'inline-block'}}>
      <img onClick={() => props.handleClick()} style={{ height: '200px', width: '200px' }} src={props.imgPath}/>
    </div>
  );
}

function Row(props) {
  return (
    <div class="row" style={{height: '200px'}}>
      <Img handleClick={() => props.handleClick(props.configRow[0].value)} imgPath={props.configRow[0].path}/>
      <Img handleClick={() => props.handleClick(props.configRow[1].value)} imgPath={props.configRow[1].path}/>
      <Img handleClick={() => props.handleClick(props.configRow[2].value)} imgPath={props.configRow[2].path}/>
    </div>
  );
}

class App extends React.Component {

  constructor(props) {
    super(props);

    const configuration = [];

    for (let j = 1; j <= 9; j++) {
      configuration.push({value: j, path: 'img/'+j+'.png'});
    }

    this.state = {
      active: null,
      configuration: configuration,
    };

  }

  swapActiveImageWithSelectedImage(imgVal) {
    if (this.state.active === null) {
      const config = this.state.configuration.slice();
      this.setState({
        configuration: config,
        active: imgVal,
      });
    } else {
      const config = this.state.configuration.slice();

      const indexOfSelectedImg = this.getConfigLocal(imgVal);
      const indexOfActiveImg = this.getConfigLocal(this.state.active);

      const pathOfSelectedImg = config[indexOfSelectedImg].path;
      const pathOfActiveImg = config[indexOfActiveImg].path;
      
      config[indexOfSelectedImg].path = pathOfActiveImg;
      config[indexOfActiveImg].path = pathOfSelectedImg;

      this.setState({
        configuration: config,
        active: null,
      });
    }
  }

  getConfigLocal(imgVal){
    return this.state.configuration.findIndex((x) => x.value === imgVal);
  }

  render() {
    return (
      <html>
        <header class="App-header">
          <h1>Puzzle It</h1>
        </header>
        <body>
          <div class="center">
            <div class="container" style={{display: 'inline-block'}}>
              <Row handleClick={(imgVal) => this.swapActiveImageWithSelectedImage(imgVal)} configRow={this.state.configuration.slice(0, 3)}/>
              <Row handleClick={(imgVal) => this.swapActiveImageWithSelectedImage(imgVal)} configRow={this.state.configuration.slice(3, 6)}/>
              <Row handleClick={(imgVal) => this.swapActiveImageWithSelectedImage(imgVal)} configRow={this.state.configuration.slice(6, 9)}/>
            </div>
          </div>
        </body>
      </html>
      
    );
  }
}



export default App;
