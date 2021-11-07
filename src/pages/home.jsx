import React, { useContext, useState, useEffect } from 'react'

import { Container, Col, Row } from "react-bootstrap";
import Navbar from "../components/navbar";
import { UserContext } from '../context/UserContext'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Button, Grid, Box } from '@mui/material';
import TextField from "@mui/material/TextField";
import PersonIcon from '@mui/icons-material/Person';
import CardActions from '@mui/material/CardActions';
import ArrowForwardSharpIcon from '@mui/icons-material/ArrowForwardSharp';


import axios from 'axios';
import { Redirect } from 'react-router';


const styleCustomeButton = {
    color: '#fef9ef',
    fontSize: '0.9em',
    backgroundColor: '#21b5a4',
    borderRadius: '15px',
    '&:hover' : {
        backgroundColor: '#1a7d72',
    }
}



const Home =  (props) =>  {
    const { user, setUser, salir, messageError } = useContext(UserContext)
    const [ inputDisabled, setInputDisabled ]= useState(true)
    const [ newPostDisabled, setnewPostDisabled ]= useState(false)

    const handleInputDisabled = () => {
        setInputDisabled(!inputDisabled)
    }

    const handleNewPostDisabled = () => {
        setnewPostDisabled(!newPostDisabled)
    }

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

        setForm({
            ...form,
            [key]: value
        })
    }

    const handleUpdate = async () => {
        const { accessToken } = user.sesion;

        await axios.put( '/user', form, { 
            baseURL: 'https://spring-business-raises.herokuapp.com',
            method: 'GET', 
            headers: { 
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json' 
            },
            withCredentials: true
        }).then( (response) => {
            setInputDisabled(!inputDisabled);
        }).catch( error => {
            console.log('Error, por favor, intentelo más tarde.')
        })

    }

    const handleLogout = () => {
        salir( setUser );
        props.history.push('/');
    }

    if( !user.sesion ) return <Redirect to='/' />



    return (
        <>
            <Container className="container" fluid="md"
                style={{backgroundColor: "#1c2541"}}
            >
                <Navbar from="home" />
                <Row>
                    <Col style={{display: "flex",justifyContent: "center" , marginBottom:'1%' }}>
                        <Card 
                            
                            sx={{ marginTop: "2%", width: "90vw", height: "100%"}}
                            >
                                <CardContent
                                    sx={{ textAlign: "center" }}
                                    >
                                <PersonIcon sx={{ fontSize: "11em", border: "1px solid #1c2541", borderRadius: "30%"}} />
                                <Typography gutterBottom variant="h5" component="div">
                                    { form.name }
                                </Typography>
                                <Row>
                                    <Col xs={12} style={{ display: "flex", justifyContent: "center" }}>
                                <Typography variant="body2" color="text.secondary" sx={{ margin: "4px" }}>
                                <Button 
                                    sx={{
                                        ...styleCustomeButton,
                                    }}
                                    variant="contained" 
                                    onClick={handleNewPostDisabled}
                                    edge="end"
                                    disableElevation
                                    >
                                    Nuevo Post
                                </Button>
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ margin: "4px" }}>
                                    <Button 
                                        sx={{
                                            ...styleCustomeButton,
                                        }}
                                    
                                        variant="contained" 
                                        edge="end"
                                        onClick={handleInputDisabled}
                                        disableElevation
                                        >
                                        Editar informacion
                                    </Button>
                                    </Typography>
                                    </Col>
                                </Row>
                                <Row style={{ marginTop: "4%", width: "100%",display: "flex" , justifyContent: "initial" }}>
                                {
                                    !newPostDisabled ?
                                    <Box
                                        component="form"
                                        noValidate
                                        // onSubmit={handleSubmit}
                                        sx={{ mt: 3 }}
                                        >
                                        <Grid container spacing={2}>
                                            
                                            <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                fullWidth
                                                id="email"
                                                label="Email"
                                                color="success"
                                                name="email"
                                                onChange={onChange}
                                                autoComplete="email"
                                                value={form.email}
                                                disabled={inputDisabled}
                                            />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                fullWidth
                                                color="success"
                                                name="name"
                                                label="Nombre"
                                                type="text"
                                                id="name"
                                                value={form.name}
                                                onChange={onChange}
                                                disabled={inputDisabled}
                                            />
                                            </Grid>
                                            {/* <Grid item xs={12} sm={6} mb={1}>
                                            <TextField
                                                required
                                                fullWidth
                                                color="success"
                                                name="password"
                                                label="Contraseña"
                                                type="password"
                                                id="password"
                                                value={form.password}
                                                onChange={onChange}
                                                autoComplete="new-password"
                                                disabled={inputDisabled}
                                            />
                                            </Grid> */}
                                            <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                fullWidth
                                                color="success"
                                                name="surname"
                                                label="Primer Apellido"
                                                type="text"
                                                id="surname"
                                                value={form.surname}
                                                onChange={onChange}
                                                disabled={inputDisabled}
                                            />
                                            </Grid>
                                            <Grid item xs={6} >
                                            <TextField
                                                required
                                                fullWidth
                                                color="success"
                                                name="department"
                                                label="Departamento"
                                                type="text"
                                                id="department"
                                                onChange={onChange}
                                                value={form.department}
                                                disabled={inputDisabled}
                                            />
                                            </Grid>
                                            <Grid item xs={6} >
                                            <TextField
                                                required
                                                fullWidth
                                                color="success"
                                                name="municipality"
                                                label="Municipio"
                                                type="text"
                                                id="municipality"
                                                onChange={onChange}
                                                value={form.municipality}
                                                disabled={inputDisabled}
                                            />
                                            </Grid>
                                            <Grid item xs={6} >
                                            <TextField
                                                required
                                                fullWidth
                                                color="success"
                                                name="occupation"
                                                label="Ocupacion"
                                                type="text"
                                                id="occupation"
                                                onChange={onChange}
                                                value={form.occupation}
                                                disabled={inputDisabled}
                                            />
                                            </Grid>
                                            <Grid item xs={6} >
                                            <TextField
                                                required
                                                fullWidth
                                                color="success"
                                                name="telephone"
                                                label="Telefono"
                                                type="number"
                                                id="telephone"
                                                onChange={onChange}
                                                value={form.telephone}
                                                className="inputFieldAble"
                                                disabled={inputDisabled}
                                            />
                                            </Grid>
                                            <Grid item xs={12} >
                                            <TextField
                                                required
                                                fullWidth
                                                multiline
                                                rows={3}
                                                rowsMax={120}
                                                color="success"
                                                name="biography"
                                                label="Cuentanos sobre ti..."
                                                type="text"
                                                id="biography"
                                                onChange={onChange}
                                                value={form.biography}
                                                className="inputFieldAble"
                                                disabled={inputDisabled}
                                            />
                                            </Grid>
                                        </Grid>
                                        { !inputDisabled && 
                                        <Button
                                            onClick={handleUpdate}
                                            fullWidth
                                            variant="contained"
                                            sx={{ mt: 3, mb: 1 , backgroundColor: '#17c3b2', '&:hover' : {
                                            backgroundColor: '#21b5a4',
                                        }}}
                                        >
                                            Actualizar
                                        </Button>
                                        }
                                    </Box>
                                    :
                                    <Box
                                        component="form"
                                        noValidate
                                        // onSubmit={handleSubmit}
                                        sx={{ mt: 3 }}
                                    >
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} minWidth={'400px'}>
                                                <TextField
                                                    required
                                                    fullWidth
                                                    id="title"
                                                    label="Titulo de la publicacion"
                                                    color="success"
                                                    name="title"
                                                    onChange={onChange}
                                                    type="text"
                                                />
                                            </Grid>
                                            <Grid item xs={12} minWidth={'400px'}>
                                                <TextField
                                                    required
                                                    fullWidth
                                                    id="direction"
                                                    label="Direccion"
                                                    color="success"
                                                    name="directionl"
                                                    onChange={onChange}
                                                    type="text"
                                                    // value={form.direction}
                                                    // disabled={inputDisabled}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    required
                                                    fullWidth
                                                    id="telephonePrimary"
                                                    label="Telefono principal"
                                                    color="success"
                                                    name="telephonePrimary"
                                                    type="number"
                                                    onChange={onChange}
                                                    // value={form.direction}
                                                    // disabled={inputDisabled}
                                                />
                                            </Grid>
                                            <Grid item xs={12}  sm={6}>
                                                <TextField
                                                    fullWidth
                                                    id="telephoneSecondary"
                                                    label="Telefono Segundario"
                                                    color="success"
                                                    name="telephoneSecondary"
                                                    type="number"
                                                    onChange={onChange}
                                                    // value={form.direction}
                                                    // disabled={inputDisabled}
                                                />
                                            </Grid>
                                            <Grid item xs={12}  sm={6}>
                                                <TextField
                                                    required
                                                    fullWidth
                                                    id="emailPrimary"
                                                    label="Email principal"
                                                    color="success"
                                                    name="emailPrimary"
                                                    type="email"
                                                    onChange={onChange}
                                                    // value={form.direction}
                                                    // disabled={inputDisabled}
                                                />
                                            </Grid>
                                            <Grid item xs={12}  sm={6}>
                                                <TextField
                                                    fullWidth
                                                    id="emailSecondary"
                                                    label="Email Segundario"
                                                    color="success"
                                                    name="emailSecondary"
                                                    type="email"
                                                    onChange={onChange}
                                                    // value={form.direction}
                                                    // disabled={inputDisabled}
                                                />
                                            </Grid>
                                            <Grid item xs={12} >
                                                <TextField
                                                    fullWidth
                                                    id="image"
                                                    color="success"
                                                    name="image"
                                                    type="file"
                                                    onChange={onChange}
                                                    // value={form.direction}
                                                    // disabled={inputDisabled}
                                                />
                                            </Grid>
                                        </Grid>
                                        <Button
                                            onClick={handleUpdate}
                                            fullWidth
                                            variant="contained"
                                            sx={{ mt: 3, mb: 1 , backgroundColor: '#17c3b2', '&:hover' : {
                                            backgroundColor: '#21b5a4',
                                        }}}
                                        >
                                            PUBLICAR 
                                        </Button>
                                        
                                    </Box>
                                }
                                </Row>
                                </CardContent>
                            
                        </Card> 
                               
                    </Col>

                    <Col style={{marginTop: "1%", display: "flex",justifyContent: "center"}}>
                        <Card 
                        sx={{ 
                            width:'90vw',                           
                            }}
                        >
                            {/* <CardMedia
                                component="img"
                                height="140"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                alt="green iguana"
                                /> */}
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" >
                                Post 1
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Palabras que llevaria el contenido del post si esto estuviera bien hecho :)
                                </Typography>
                            </CardContent>
                            <CardActions>
                                {/* <Button size="small">Share</Button> */}
                                
                                <Button 
                                    endIcon={<ArrowForwardSharpIcon />} 
                                    size="large"
                                    sx={{ color: "#21b5a4"}}

                                >Quiero saber mas</Button>
                            </CardActions>
                        </Card>
                    </Col>
                    <Col style={{ marginBottom: "10%", marginTop: "1%", display: "flex",justifyContent: "center"}}>
                        <Card 
                        sx={{ 
                            width:'90vw',                           
                            }}
                        >
                            {/* <CardMedia
                                component="img"
                                height="140"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                alt="green iguana"
                                /> */}
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" >
                                Post 2
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Palabras que llevaria el contenido del post si esto estuviera bien hecho :)
                                </Typography>
                            </CardContent>
                            <CardActions>
                                {/* <Button size="small">Share</Button> */}
                                
                                <Button 
                                    endIcon={<ArrowForwardSharpIcon />} 
                                    size="large"
                                    sx={{ color: "#21b5a4"}}

                                >Quiero saber mas</Button>
                            </CardActions>
                        </Card>
                    </Col>
                </Row>
        </Container>
        </>
    )

}

export default Home