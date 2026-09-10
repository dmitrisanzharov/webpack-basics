import React from 'react';
import ReactDOM from 'react-dom/client';
import { Box } from '@mui/material';

const root = document.getElementById('root');

if (!root) {
   throw new Error("Root element not found");
}

ReactDOM.createRoot(root).render(<Box sx={{color: 'red'}}>Hello {process.env.MY_ENV_VAR_ONE}</Box>);