import React from 'react'
import Navbar from '../components/navbar'
import {Grid, Button, Card, CardActions } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import SendIcon from '@mui/icons-material/Send';
import {makeStyles} from '@mui/styles'
import RegistroForm from '../components/forms/registro'
import Login from '../components/forms/login'

const useStyle = makeStyles({
    root:{
        flexGrow: 1
    }
})


const Welcome =  () =>  {
    
    const clasess = useStyle()
    return (
       <div className={clasess.root}>
           <Grid container>
               <Grid item xs={12}>
                <Navbar />
               </Grid>
               <Grid item
                xm={12}
                sm={6}
                md={6}
                lg={6}
                xl={6}
               >
                    {/* Form Registro */}
                <RegistroForm />

               </Grid>
               <Grid item
                xm={12}
                sm={6}
                md={6}
                lg={6}
                xl={6}
               >
                   {/* Presentacion */}
                    
               </Grid>
           </Grid>
       </div>
    )

}

export default Welcome