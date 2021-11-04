import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import bookBg from '../../../images/book-library-with-open-textbook.png'
import librarian from '../../../images/librarian.png'
import { Button, Typography } from '@mui/material';

//setting background 
const bannerBg = {
    background: `url(${bookBg})`,
    backgroundColor: '#424242',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 180,
    marginBottom: 50
}

const LibraryCard = () => {
    return (
        <Box style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                <img style={{marginTop: '-110px', width: 610}} src={librarian} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    textAlign: 'left'
                }}>
                    <Box>
                        <Typography variant="h4" sx={{mb:3}} style={{color: '#e0e0e0'}}>
                            Library Card
                        </Typography>
                        <Typography variant="h5" sx={{my:3}} style={{color: '#fdd835'}}>
                            Get your Library Card Today
                        </Typography>
                        <Typography variant="p" sx={{my:3}} style={{color: '#bdbdbd'}}>
                            Go grab your library card today and get ready to explore the world of knowledge. To know more, click the button here.
                        </Typography>
                        
                        <Button sx={{m:2}} style={{backgroundColor: '#eeeeee', color:"black"}}variant="contained">Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default LibraryCard;