import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
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

const styuleCustomeSingUpCard = {
  marginTop: "10%",
  paddingTop: "10%",
  paddingBottom: "20px"
};

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
    <Card variant="elevation" sx={{ ...styuleCustomeSingUpCard }}>
        
      
    </Card>
  );
};

export default RegistroForm;
