import React from "react";
import Navbar from "../components/navbar";
import { Container, Col, Row } from "react-bootstrap";

import { Grid, Button, Card, CardActions } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SendIcon from "@mui/icons-material/Send";
import { makeStyles } from "@mui/styles";
import RegistroForm from "../components/forms/registro";
import Login from "../components/forms/login";

const Welcome = () => {
  return (
    <>
      <Navbar />
      <Container className="container" fluid="md">
        <Row>
          <Col style={{ height: "90vh" }}>
            <img
              className="fondo"
              src="https://www.utel.edu.mx/blog/wp-content/uploads/2013/10/shutterstock_144792676.jpg"
              style={{ width: "100vw", objectFit: "cover"}}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
  // return (
  //    <div sx={{ flexGrow: 1 }}>
  //        <Grid container sx={{ height: '100vh' }} >
  //            <Grid item xs={12}>
  //             <Navbar />
  //            </Grid>
  //                 <Grid item
  //                     xs={12}
  //                     sx={{backgroundImage: 'url(https://www.utel.edu.mx/blog/wp-content/uploads/2013/10/shutterstock_144792676.jpg) cover'}}
  //                 >

  //                  </Grid>
  //        </Grid>
  //    </div>
  // )
};

export default Welcome;
