import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
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
} from "@mui/material";

const styleCustomeSingUpCard = {
  backgroundColor: "#f9f9f9",
  marginTop: '20px',
  paddingTop: '20px',
};

const styleCustomeForm = {

}

const RegistroForm = () => {
  const { user, setUser, registrar } = useContext(UserContext);

  const onChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    setUser({
      ...user,
      [key]: value,
    });
  };

  return (
    <Card
      variant="elevation"
      sx={{ ...styleCustomeSingUpCard }}
      justifyContent="center"
    >
      <Grid container justifyContent="center">
          <Grid item xs={12} >
            <AccountCircleIcon 
                sx={{
                    fontSize: '5.9em',
                    paddingLeft: '40%',
                    paddingBottom: 2

                }}
            />
          </Grid>
        <FormControl>
          <InputLabel htmlFor="my-input">Email address</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">
            We'll never share your email.
          </FormHelperText>
        </FormControl>
      </Grid>
    </Card>
  );
};

export default RegistroForm;
