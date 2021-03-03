import React from 'react';
import {Typography, CssBaseline, Button, AppBar, Toolbar, Container, Grid, Card, CardMedia, CardContent, CardActions} from '@material-ui/core';
import {PhotoCameraOutlined} from '@material-ui/icons';
import {makeStyles} from '@material-ui/core/styles'
const useStyles = makeStyles(()=>({
   navBar: {
      marginBottom: '45px'
   },
   mb: {
      marginBottom: '30px',
   },
   icon: {
      marginRight: '20px'
   },
   card: {
      height:'100%',
      display:'flex',
      flexDirection: 'column',
   },
   cardMedia: {
      paddingTop: '56.25%'
   }
}));
const cards = [1,2,3,4,5,6,7,8,9];
const App = () => {
  const classes = useStyles();
  return (
    <>
       <CssBaseline/>
       <AppBar className={classes.navBar} position="relative">
          <Toolbar>
            <PhotoCameraOutlined className={classes.icon} />
             <Typography variant="h6" >
                Photo Album
             </Typography>
          </Toolbar>
       </AppBar>
       <main>
          <div >
             <Container className={classes.mb} maxWidth="sm" >
                  <Typography variant="h2" color="textPrimary" align="center" gutterBottom>
                     Photo Album
                  </Typography>
                  <Typography variant="h6" color="textSecondary" align="center"  gutterBottom>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, deserunt itaque vel omnis modi recusandae
                  </Typography>
                  <Grid container spacing={2} justify="center" >
                     <Grid item>
                        <Button variant="contained" color="primary">
                           See Photos
                        </Button>
                     </Grid>
                     <Grid item>
                        <Button variant="outlined" color="primary">
                           See Photos
                        </Button>
                     </Grid>
                  </Grid>
            </Container> 
            <Container maxWidth="md">
               <Grid container spacing={4} justify="center" >
                  {cards.map(card => (
                     <Grid key={card} item sm={6} md={4} xs={12}>
                     <Card className={classes.card}>
                        <CardMedia
                            className={classes.cardMedia}
                            image="https://source.unsplash.com/random"
                            title="card image"
                        />
                        <CardContent>
                           <Typography gutterBottom variant="h5" color="textPrimary">
                                 Lorem ipsum dolor sit
                           </Typography>
                           <Typography>
                              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, similique.
                              Lorem, ipsum dolor.
                           </Typography>
                        </CardContent>
                        <CardActions>
                           <Button variant="contained" color="primary">
                              See more
                           </Button>
                        </CardActions>
                     </Card>
                  </Grid>
                  ))}
               </Grid>
            </Container>
          </div>
       </main>
       
    </>
  );
};

export default App;