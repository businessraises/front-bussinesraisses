import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  Grid,
  Paper,
  Box,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Container,
  Card,
  CardContent,
  Button,
  CardActions,
} from "@mui/material";
import Navbar from "../navbar";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import PersonIcon from '@mui/icons-material/Person';
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Bussines Raisses
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

const styleCustomeSingUpCard = {
  backgroundColor: "#f9f9f9",
  marginTop: "20px",
  paddingTop: "20px",
};

const styleCustomeForm = {};

const Signup = ( props ) => {

  const { user, setUser, registrar } = useContext(UserContext);

  const onChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    setUser({
      ...user,
      [key]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(user)
    const sesion = await registrar( user, setUser );

      if( sesion.state ) {
          /* Redirect  */
          props.history.push('/home')
      }
      else {
          // messageError(sesion.data.message.split(': ')[1])
          console.log('Ha ocurrido un error, vuelva a intentar.')
      } 
  };

  return (
    <Box sx={{ height: "100%", display: "block" }}>
      <Grid container>
        <Grid item xs={12}>
          <Navbar from="signup" />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            backgroundColor: "#1d2d44",
            minHeight: "230px",
            textAlign: "center",
            height: "100vh",
          }}
        >
          <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs"
            sx={{ backgroundColor: "#f9f9f9", borderRadius:'10px',
            boxShadow: '6px 6px 9px 3px rgb(0 0 0 / 49%)'}}
            >
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 8,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar sx={{ m: 2, bgcolor: "success.main"}}>
                  <PersonIcon fontSize="large"/>
                </Avatar>
                <Typography component="h1" variant="h5">
                  Registro
                </Typography>
                <Box
                  component="form"
                  noValidate
                  onSubmit={handleSubmit}
                  sx={{ mt: 3 }}
                >
                  <Grid container spacing={2}>
                    
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        color="success"
                        name="email"
                        autoComplete="email"
                        onChange = { onChange }
                      />
                    </Grid>
                    <Grid item xs={12} mb={3}>
                      <TextField
                        required
                        fullWidth
                        color="success"
                        name="password"
                        label="Contraseña"
                        type="password"
                        id="password"
                        onChange = { onChange }
                        autoComplete="new-password"
                      />
                    </Grid>
                  </Grid>

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 , backgroundColor: '#17c3b2', '&:hover' : {
                      backgroundColor: '#21b5a4',
                  }}}
                  >
                    Registrarme
                  </Button>
                </Box>
              </Box>
              <Copyright sx={{ mt: 5 }} />
            </Container>
          </ThemeProvider>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Signup;
