import './App.css';
import Card from './Card';
import background from "./img/card_background.jpg";
import Button from '@material-ui/core/Button';
import {Link } from "react-router-dom";
import React, { Component, useState  } from 'react';
import { Col, Row, Container } from "react-bootstrap";
import {main_colors, main_colors_code} from './index.js';

function checkNull(event, select){
    if(select != null){
        return true;
    }else{
        alert("Please select your card");
        event.preventDefault();
    }
}

function Main() {
    const colors = main_colors;
    const colors_code = main_colors_code;
    const [select, setSelect] = useState(null);
    const cardList = [];
    for (let index = 0; index < colors.length; index++) {
        let card_num = index + 1;
        if (card_num == select){
            cardList.push(<Col onClick={() => setSelect(card_num)}><Card colorText={colors[index]} color_code={colors_code[index]} cardSelect={select} /></Col>);
        }else{
            cardList.push(<Col onClick={() => setSelect(card_num)}><Card colorText={colors[index]} color_code={colors_code[index]} cardSelect={null} /></Col>);
        }
            
    }
    
    
    return (
        <body style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center' , width: '100vw',
        height: '100vh'  }}>
            
            <div style={{ fontFamily: 'Tahoma', fontSize: '72px', paddingTop: '5vh', color: 'black', paddingLeft: '5vh'}}>
             <b>Choose your card</b>
            </div>
            
            <Container  style={{ paddingTop: '10vh' }}>
                <Row></Row>
                <Row>
                    {cardList}
                </Row>
                
                <Row style={{ paddingTop: '3vw'}}>
                    <Col></Col>
                    <Col>
                    <Link style={{ textDecoration: 'none' }} to={{
                        pathname: "/result",
                        state: {"color":colors[select-1], "color_code":colors_code[select-1]}
                    }}
                    >
                       
                    <Button variant="contained" color="primary" onClick={ e => checkNull(e, select)} style={{ width: "400px",
                        height: "60px", minWidth: "200px", display: "block" }}  >
                            Duel !! </Button>
                    </Link>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </body>
        

    );
}

export default Main;