import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

export const AddCard = () => {
  return (
    <Container maxWidth='xl'>
      <Grid container component='main' sx={{ marginTop: 2, justifyContent: 'space-between' }}>
        Add card
      </Grid>
    </Container>
  );
};
