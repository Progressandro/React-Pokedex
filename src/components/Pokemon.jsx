import React from 'react';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Grid,
} from '@material-ui/core';
import styles from './styles/Pokemon';

function Pokemon() {
  return (
    <Grid container justify="center">
      <Grid item xs={2  }>
        <Card>
          <CardActionArea>
            <CardMedia
              image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
              title="Bulbasaur"
              style={styles.media}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2" align="center">
                Bulbasaur
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Under construction
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Pokemon;
