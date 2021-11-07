import React from 'react'

import { Container, Col, Row } from "react-bootstrap";
import Navbar from "../components/navbar";


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


const Home =  () =>  {
    

    return (
        <>
            <Container className="container" fluid="md"
                style={{backgroundColor: "#1c2541"}}
            >
                <Navbar />
                <Row>
                    <Col style={{ height: "100vh", display: "flex",justifyContent: "center"  }}>
                    <Card 
                        sx={{ marginTop: "2%", width: "90vw", height: "80vh"}}
                    >
                    <CardActionArea>
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>                
                    </Col>
                </Row>
        </Container>
        </>
    )

}

export default Home