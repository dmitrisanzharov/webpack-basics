import React from 'react'
import Box from '@mui/material/Box';

type Props = {}

const Foo = () => {
  return (
    <Box sx={{backgroundColor: 'red'}}>{process.env.MY_ENV_VAR1}</Box>
  )
}

export default Foo;