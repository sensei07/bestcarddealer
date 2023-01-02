import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { FC } from 'react';

import { CARDS } from '../mock/cards';

export const Cards: FC = () => {
  return (
    <Container maxWidth="xl">
      <Grid
        container
        component="main"
        sx={{ marginTop: 2, justifyContent: 'space-between' }}
      >
        {CARDS.map((card) => (
          <Card sx={{ maxWidth: 345, marginBottom: 2 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="340"
                image="https://thumb.tildacdn.com/tild6466-3563-4339-b633-663136356134/-/format/webp/5.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {card.name}
                </Typography>
                <Typography gutterBottom variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
                <Typography variant="h5" component="div">
                  {card.price}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};
