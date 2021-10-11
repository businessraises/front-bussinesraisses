import React from 'react'
import Navbar from '../components/navbar'
import {Grid, Button, Card, CardActions } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import SendIcon from '@mui/icons-material/Send';
import {makeStyles} from '@mui/styles'
import RegistroForm from '../components/forms/registro'
import Login from '../components/forms/login'



const Welcome =  () =>  {
    
    return (
       <div sx={{ flexGrow: 1 }}>
           <Grid container >
               <Grid item xs={12}>
                <Navbar />
               </Grid>
               <Grid container spacing={3}>
                    <Grid item
                        xs={12}
                        sm={12}
                        md={6}
                        lg={6}
                        xl={6}
                        
                    >
                            {/* Form Registro */}

                    </Grid>
                    <Grid item
                        xs={12}
                        sm={12}
                        md={6}
                        lg={6}
                        xl={6}
                    >
                        {/* Presentacion */}
                        <RegistroForm /> 
                    </Grid>

               </Grid>
           </Grid>
       </div>
    )

}

export default Welcome