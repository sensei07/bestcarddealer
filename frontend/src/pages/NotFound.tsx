import { Box, Typography } from '@mui/material';
import { purple } from '@mui/material/colors';
import React, { FC } from 'react';

const primary = purple[500]; // #f44336

export const NotFound: FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 'calc(100vh - 64px)',
        backgroundColor: primary,
      }}
    >
      <Typography variant='h1' style={{ color: 'white' }}>
        404
      </Typography>
    </Box>
  );
};
