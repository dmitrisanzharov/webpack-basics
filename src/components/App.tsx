import React from 'react'
import { Button } from '@mui/material';

type Props = {}

const App = (props: Props) => {
  return (
    <Button>{process.env.SECRET_KEY}</Button>
  )
}

export default App