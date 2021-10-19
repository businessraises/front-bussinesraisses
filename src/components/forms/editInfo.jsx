import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import {
    Grid,
    Button
  } from "@mui/material";
import Navbar from "../navbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Container, Col, Row } from "react-bootstrap";

import axios from 'axios';

const EditInfo = (props) => {
  
    const { user, setUser, registrar, salir } = useContext(UserContext);

    const [ form, setForm ] = useState({
        id: '',
        name: '',
        surname: '',
        email: '',
        department: '',
        municipality: '',
        occupation: '',
        telephone: '',
        biography: '',
        latitude: null,
        longitude: null,
    })

    useEffect( async () => {
        if( !user.sesion ) return;

        const { uid, accessToken } = user.sesion;



        await axios.get( `/user/uid/${uid}`, { 
            baseURL: 'https://spring-business-raises.herokuapp.com',
            method: 'GET', 
            headers: { 
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json' 
            },
            withCredentials: true
        }).then( async (response) => {
            const { data } = response;

            console.log( data );
            setForm({
                ...form,
                id: data.id ? data.id : '',
                name: data.name ? data.name : '',
                surname: data.surname ? data.surname : '',
                email: data.email ? data.email : '',
                department: data.department ? data.department : '',
                municipality: data.municipality ? data.municipality : '',
                occupation: data.occupation ? data.occupation : '',
                telephone: data.telephone ? data.telephone : '',
                biography: data.biography ? data.biography : '',
            })
        })

    }, [])

    const onChange = ( event ) => {
        const key = event.target.name;
        const value = event.target.value;
        console.log(`OnChange ${key} : ${value}`)
        console.log(form)
        setForm({
            ...form,
            [key]: value,
        });
    }

    const handleUpdate = async () => {
        const { accessToken } = user.sesion;

        console.log("Update")
        console.log(form)
        console.log("fin form")

        await axios.put( '/user', form, { 
            baseURL: 'https://spring-business-raises.herokuapp.com',
            method: 'GET', 
            headers: { 
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json' 
            },
            withCredentials: true
        }).then( (response) => {
            console.log( response )
            console.log('Se han actualizado los datos correctamente.')
            props.history.push('/home')
        }).catch( error => {
            console.log('Error, por favor, intentelo más tarde.')
        })
    }

    const handleLogout = () => {
        salir( setUser );
        props.history.push('/');
    }
  
  return (
    <>
        <Navbar from="profile" />
            <Container className="container" fluid="md"
                style={{
                    backgroundColor: "#1d2d44",
                    height: "90vh",
                    width: "100vw",
                    display: 'flex',
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >

            <Row>
            <Col xs={12} 
            style={{ 
                backgroundColor: "#f9f9f9", 
                borderRadius:'10px',
                height: "80vh",
                width: "85vw",
                margin: "2%",
                marginTop: "5%",
                boxShadow: '6px 6px 9px 3px rgb(0 0 0 / 49%)',
                overflow: "scroll"
            }}
            >
            <Grid container spacing={2} p={2} style={{ height: '100%' }} >
                
                <Grid item xs={12} sx={{ textAlign: 'center'}} >
                    <Typography component="h1" variant="h5">
                        Informacion personal
                    </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                <TextField
                        required
                        fullWidth
                        id="name"
                        label="Primer nombre"
                        color="success"
                        name="name"
                        autoComplete="name"
                        value = { form.name }
                        onChange = { onChange } 
                      />
                </Grid>
                <Grid item xs={12} md={6}>
                <TextField
                        required
                        fullWidth
                        id="surname"
                        label="Primer apellido"
                        color="success"
                        name="surname"
                        autoComplete="surname"
                        value = { form.surname }
                        onChange = { onChange } 
                      />
                </Grid>
                <Grid item xs={12} md={6}>
                <TextField
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        color="success"
                        name="email"
                        autoComplete="email"
                        value = { form.email }
                        onChange = { onChange } 
                      />
                </Grid>
                <Grid item xs={12} md={6}>
                <TextField
                        required
                        fullWidth
                        id="department"
                        label="Departamento"
                        color="success"
                        name="department"
                        autoComplete="department"
                        value = { form.department }
                        onChange = { onChange } 
                      />
                </Grid>
                <Grid item xs={12} md={6}>
                <TextField
                        required
                        fullWidth
                        id="municipality"
                        label="Municipio"
                        color="success"
                        name="municipality"
                        autoComplete="municipality"
                        value = { form.municipality }
                        onChange = { onChange } 
                      />
                </Grid>
                <Grid item xs={12} md={6}>
                <TextField
                        required
                        fullWidth
                        id="occupation"
                        label="Ocupacion. (Empleado, Independiente...)"
                        color="success"
                        name="occupation"
                        autoComplete="occupation"
                        value = { form.occupation }
                        onChange = { onChange } 
                      />
                </Grid>
                <Grid item xs={12} md={6}>
                <TextField
                        required
                        fullWidth
                        type="number"
                        id="telephone"
                        label="Telefono"
                        color="success"
                        name="telephone"
                        autoComplete="telephone"
                        value = { form.telephone }
                        onChange = { onChange } 
                      />
                </Grid>
                <Grid item xs={12} >
                <TextField
                        required
                        fullWidth
                        multiline
                        id="biography"
                        label="Cuentanos un poco sobre ti..."
                        color="success"
                        name="biography"
                        autoComplete="biography"
                        rows={2}
                        variant="outlined"
                        rowsMax={4}
                        value = { form.biography }
                        onChange = { onChange } 
                      />
                </Grid>
                <Grid item xs={12} >
                    <Button 
                        sx={{
                            backgroundColor: '#1d3557',
                            width: '100%',
                            '&:hover' : {
                                backgroundColor: '#457b9d',
                            }
                        }}
                        onClick={ handleUpdate }
                        variant="contained" 
                        edge="end"
                    >
                        ACTUALIZAR
                    </Button>
                </Grid>

            </Grid>
            </Col>
            </Row>
            </Container >   
        </>
  );
};

export default EditInfo;
