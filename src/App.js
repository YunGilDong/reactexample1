import React, {Component, Fragment} from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

    <Fragment>
    <div className="App-header">
      {/* button group */}
    </div>

    <div className="App-container">      
      {/* <Col className="App-left-item" sm={{ size: 'auto'}} > 1 </Col>
      <Col className="App-center-item" sm={{ size: 'auto'}}> 2 </Col>       */}
      <Col xs="1" > 1 </Col>
      <Col xs="auto"> 2 </Col>      
    </div>

    {/* left panel */}
    </Fragment>
    
  );
}

export default App;
