import React from "react";

import {Button, Box, IconButton, Grid, AppBar, Toolbar, Typography} from "@mui/material"
import {makeStyles} from '@mui/styles'
import LogoutIcon from '@mui/icons-material/Logout';
const useStyle = makeStyles({
    root:{
        flexGrow: 1
    },
    buttonTest: {
        width: '100%',
        backgroundColor: '#e9c46a',
        marginBottom : "15px",
        marginTop: "15px"
    },
    nav : {
        backgroundColor: '#457b9d',
        width: '100%',
    },
    butt: {
        color: 'white',
        fontSize: '12.9em',
        backgroundColor: '#e9c46a',
        '&:hover' : {
        backgroundColor: 'inherit',
        }
    }
})


const styleCustomeNav = {
    position: 'static',
    height: '20%',
    backgroundColor: '#17c3b2'
}


const styleCustomeButton = {
    color: '#fef9ef',
    fontSize: '0.9em',
    backgroundColor: 'transparent',
    borderRadius: '15px',
    '&:hover' : {
        backgroundColor: '#21b5a4',
    }
}

const Navbar = (props) => {


    const clasess = useStyle()

    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar  sx={{ ...styleCustomeNav }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontSize: '0.9em' }}>
                <Button 
                    variant="contained" 
                    sx={{
                        ...styleCustomeButton,
                        '&:hover' : {
                            backgroundColor: 'inherit',
                        }
                    }}
                    href="/" 
                    edge="start"
                    disableElevation
                    disableFocusRipple={true}
                    disableRipple
                    disable
                >
                        Bussines Raisses
                </Button>
                {/* <Button 
                    sx={{
                        ...styleCustomeButton,
                    }}
                    variant="contained" 
                    href="#contained-buttons" 
                    edge="start"
                    disableElevation
                    >?? Quienes somos ?
                </Button> */}
                </Typography>
                { (props.from == 'signup' || props.from == 'welcome') &&
                <Button 
                    sx={{
                        ...styleCustomeButton,
                    }}
                    variant="contained" 
                    href="/login" 
                    edge="end"
                    disableElevation
                >
                    Iniciar sesion
                </Button>
                }
                { (props.from == 'login' || props.from == 'welcome') &&
                <Button 
                    sx={{
                        ...styleCustomeButton,
                    }}
                    variant="contained" 
                    href="/signup" 
                    edge="end"
                    disableElevation
                >
                    Registrarse
                </Button>
                }
                { props.from == 'home' &&
                    <Button 
                        sx={{
                            ...styleCustomeButton,
                            '&:hover' : { 
                                backgroundColor: "#c9184a"
                            }
                        }}
                        variant="contained" 
                        href="/" 
                        edge="end"
                        endIcon={<LogoutIcon />}
                        disableElevation
                        >
                            Salir
                        </Button>
                }
        

            </Toolbar>
        </AppBar>

        </Box>
    )
}

export default Navbar