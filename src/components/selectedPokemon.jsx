import React from 'react';
import { useSelector } from 'react-redux';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  // CardActions,
  // Button,
} from '@material-ui/core';
import styles from './styles/selectedPokemon';

function Pokemon() {
  const selectedPokemon = useSelector((state) => state.selectedPokemon);
  const { image, name } = selectedPokemon.data;
  return (
    selectedPokemon.name !== '' && (
      <Grid container justify="center" style={styles.container}>
        <Grid item xs={8} md={2}>
          <Card variant="outlined">
            <CardActionArea>
              <CardMedia image={image} title={name} style={styles.media} />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  align="center"
                >
                  {name[0].toUpperCase() + name.substr(1)}
                </Typography>
              </CardContent>
            </CardActionArea>
            {/* <CardActions>
              <Button size="small" color="primary">
                Under construction
              </Button>
            </CardActions> */}
          </Card>
        </Grid>
      </Grid>
    )
  );
}

export default Pokemon;
