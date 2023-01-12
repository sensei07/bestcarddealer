import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { useFormContext, Controller } from 'react-hook-form';

export const SignUpInputs = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Controller
          name='firstName'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              label='First Name'
              autoFocus
              error={!!errors.firstName}
              // helperText={!!errors.firstName?.message ? errors.firstName.message.toString() : ''}
            />
          )}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Controller
          name='lastName'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              label='Last Name'
              error={!!errors.lastName}
              // helperText={errors.lastName?.message ? errors.lastName.message.toString() : ''}
            />
          )}
        />
      </Grid>
      <Grid item xs={12}>
        <Controller
          name='email'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              type='email'
              label='Email Address'
              error={!!errors.email}
              // helperText={errors.email?.message ? errors.email.message.toString() : ''}
            />
          )}
        />
      </Grid>
      <Grid item xs={12}>
        <Controller
          name='password'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              type='password'
              label='Password'
              error={!!errors.password}
              // helperText={errors.password?.message ? errors.password.message.toString() : ''}
            />
          )}
        />
      </Grid>
    </Grid>
  );
};
