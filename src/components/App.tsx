import React from 'react';
import { Box, Button } from '@mui/material';

type Props = {}

const App = (props: Props) => {

  console.log('API URL:', process.env.API_URL);

  return (
    <Box>
        <h1>Hello World</h1>
        <Button>this is material button</Button>
    </Box>
  )
}

export default App