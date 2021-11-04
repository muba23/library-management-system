import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import book1 from '../../../images/book-1.png'
import book2 from '../../../images/book-2.png'
import book3 from '../../../images/book-3.png'
import Service from '../Service/Service';

const services= [
    {
        name: 'High Quality Books',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, cum? Ratione enim aperiam neque, at nostrum totam unde architecto? Nemo',
        img: book1
    },
    {
        name: 'Free All Books',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, cum? Ratione enim aperiam neque, at nostrum totam unde architecto? Nemo',
        img: book2
    },
    {
        name: 'Up to Date Books',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, cum? Ratione enim aperiam neque, at nostrum totam unde architecto? Nemo',
        img: book3
    }
]
const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
           <Container>
               <Typography sx={{fontWeight: 500, color: '#424242', m:2}} variant="h4" component="div">
                   Our Services
               </Typography>
               <Typography sx={{fontWeight: 600, color: '#616161', m:4}} variant="h5" component="div">
                   Our Exclusive Services
               </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{boxShadow: 2}}>
                {
                    services.map(service=> <Service
                    key={service.name}
                    service ={service}
                    ></Service>)
                }
                </Grid>
           </Container>
      </Box>
    );
};

export default Services;