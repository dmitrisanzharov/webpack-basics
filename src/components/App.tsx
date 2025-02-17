
import React from 'react';
import { Box } from '@mui/material';
// @ts-ignore


type Props = any;

// SX
const containerSx: any = {
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'right',
    border: '10px solid black',
    height: '90vh',
    // margin: '10px',
    gap: '15px',
    flexWrap: 'wrap',
}


const boxSx: any = {
    width: '150px',
    height: '150px',
    fontSize: '8rem',
    borderRadius: '15px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}


const App: React.FC<any> = (props: Props) => {

    return <Box sx={containerSx}>
        <Box sx={{...boxSx, backgroundColor: 'red'}}>1</Box>
        <Box sx={{...boxSx, backgroundColor: 'yellow'}}>2</Box>
        <Box sx={{...boxSx, backgroundColor: 'green'}}>3</Box>
        <Box sx={{...boxSx, backgroundColor: 'blue'}}>4</Box>
    </Box>;
};


export default App;