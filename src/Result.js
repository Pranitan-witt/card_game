import './App.css';
import Card from './Card';
import background from "./img/card_background.jpg";
import Button from '@material-ui/core/Button';
import {Link } from "react-router-dom";
import React, { Component, useState  } from 'react';
import { Col, Row, Container } from "react-bootstrap";
import {main_colors, main_colors_code} from './index.js';
import {View, PropTypes} from 'react-view';

function checkWinner(state, computerCard){
    let result = "Draw";
    switch(state.color){
        case "Red":
            if(computerCard == "Green"){
                result = "Win";
            }else if(computerCard == "Blue"){
                result = "Lose";
            }
            break;
        case "Green":
            if(computerCard == "Brown"){
                result = "Win";
            }else if(computerCard == "Red"){
                result = "Lose";
            }
            break;
        case "Brown":
            if(computerCard == "Blue"){
                result = "Win";
            }else if(computerCard == "Green"){
                result = "Lose";
            }
            break;
        case "Blue":
            if(computerCard == "Red"){
                result = "Win";
            }else if(computerCard == "Brown"){
                result = "Lose";
            }
            break;
    }

    return result;
}

class Result extends React.Component{
    
 render() {
    const { state } = this.props.location;
    const colors = main_colors;
    const colors_code = main_colors_code;
    let color_index = Math.floor(Math.random() * colors.length);
    let computerCard = colors[color_index];
    let computerCard_code = colors_code[color_index];
    var isWinner = checkWinner(state, computerCard);
    
    return (
        <body style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center' , width: '100vw',
        height: '100vh'  }}>
            
            <div style={{ fontFamily: 'Tahoma', fontSize: '72px', paddingTop: '5vh', color: 'black', paddingLeft: '5vh'}}>
             <b>Result </b>
            </div>

            <div style={{ paddingLeft: '30vw'}}>
                <Container style={{ paddingTop: '5vh'}} >
                <Row className="justify-content-md-center" style={{ alignItems: 'center' }}>
                    
                    <Col>
                        <Card colorText={state.color} color_code={state.color_code} cardSelect={null} />
                    </Col>
                    <Col md="auto"><h1 >VS</h1></Col>
                    <Col  style={{ paddingRight: '30.5vw'}}>
                        <Card colorText={computerCard} color_code={computerCard_code} cardSelect={null} />
                    </Col>
                    
                </Row>

            </Container>
            </div>
       
            <div style={{ paddingTop: '3vw'}}><h1 style={{ textAlign: 'center'}}>You {isWinner} !!</h1></div>
            <div style={{ paddingLeft: '36vw'}}>
            <Link to="/mainpage" style={{ textDecoration: 'none' }}><Button variant="outlined" color="primary"  style={{ width: "400px",
                height: "60px",
                minWidth: "200px",
                display: "block" }}  >
                  Play again
      </Button> </Link>
      </div>
        </body>
        

    );
}
}

export default Result;