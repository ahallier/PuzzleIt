import React from 'react';
import logo from './logo.svg';
import {Grid, Col, Row} from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div>
    <div class="container">
      <div class="row">
        <div  style={{display: 'inline-block'}}>
        <img style={{ height: '200px', width: '200px' }} src={require('./img/1.png')}/>
        </div>
        <div style={{display: 'inline-block'}}>
        <img style={{ height: '200px', width: '200px' }} src={require('./img/2.png')}/>
        </div>
        <div  style={{display: 'inline-block'}}>
        <img style={{ height: '200px', width: '200px' }} src={require('./img/3.png')}/>
        </div>
      </div>
      <div class="row">
        <div  style={{display: 'inline-block'}}>
        <img style={{ height: '200px', width: '200px' }} src={require('./img/4.png')}/>
        </div>
        <div style={{display: 'inline-block'}}>
        <img style={{ height: '200px', width: '200px' }} src={require('./img/5.png')}/>
        </div>
        <div  style={{display: 'inline-block'}}>
        <img style={{ height: '200px', width: '200px' }} src={require('./img/6.png')}/>
        </div>
      </div>
      <div class="row">
        <div  style={{display: 'inline-block'}}>
        <img style={{ height: '200px', width: '200px' }} src={require('./img/7.png')}/>
        </div>
        <div style={{display: 'inline-block'}}>
        <img style={{ height: '200px', width: '200px' }} src={require('./img/8.png')}/>
        </div>
        <div  style={{display: 'inline-block'}}>
        <img style={{ height: '200px', width: '200px' }} src={require('./img/9.png')}/>
        </div>
      </div>
    </div>
    </div>
  );
}

let placeholder = "./img/3.png";

const renderImages = [...Array(3)].map((val) => {
  return <Row className="show-grid">
      <br />
      <Col md={3}>
          <img src={placeholder} />

      </Col>
      <Col md={3}>
          <img src={placeholder} />

      </Col>
      <Col md={3}>
          <img src={placeholder} />

      </Col>

  </Row>
})

const gridInstance = (
  <Grid>
      {renderImages}
  </Grid>
);

export default App;
