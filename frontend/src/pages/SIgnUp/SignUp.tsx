import { yupResolver } from '@hookform/resolvers/yup';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as yup from 'yup';

import { PATHS } from '../../constants/paths';

import { SignUpInputs } from './SignUpInputs';

interface IFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const schema = yup.object().shape({
  firstName: yup.string().min(2, 'This field is required').required(),
  lastName: yup.string().min(2).required(),
  email: yup.string().email().required(),
  password: yup.string().min(4).max(20).required(),
});

export const SignUp: FC = () => {
  const methods = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const formSubmitHandler: SubmitHandler<IFormInputs> = (data: IFormInputs) => {
    console.log(data);
  };

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component='h1' variant='h5'>
          Sign up
        </Typography>
        <FormProvider {...methods}>
          <SignUpInputs />
          <Box component='form' noValidate onSubmit={methods.handleSubmit(formSubmitHandler)} sx={{ mt: 3 }}>
            <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
              Sign Up
            </Button>
            <Grid container justifyContent='flex-end'>
              <Grid item>
                <Link to={PATHS.SIGN_IN}> Already have an account? Sign in</Link>
              </Grid>
            </Grid>
          </Box>
        </FormProvider>
      </Box>
    </Container>
  );
};
