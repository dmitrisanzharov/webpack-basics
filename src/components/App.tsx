import React from 'react'
import { Box, Button } from '@mui/material';

type Props = {}

const App = (props: Props) => {
  return (
    <Box>
        <Button>omg its a button 2</Button>
        <Button>{process.env.SECRET_KEY}</Button>
    </Box>
  )
}

export default App;