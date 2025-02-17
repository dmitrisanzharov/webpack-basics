
import React from 'react';
import { Box } from '@mui/material';
// @ts-ignore


type Props = any;

// SX
const boxSx: any = {
    border: '1px solid black',
    flex: 1,
}



const Foo: React.FC<any> = (props: Props) => {

    return <Box>
        <Box sx={{display: 'flex', width: '40vw', height: '8vh', gap: '10px', mb: 1}}>
            {[1,2,3].map((item: any) => <Box sx={boxSx}>{item}</Box>)}
        </Box>
        <Box sx={{display: 'flex', width: '90vw', height: '30vh', gap: '10px', mb: 1}}>
            <Box sx={{flex: 1, border: '1px solid red'}}>1</Box>
            <Box sx={{flex: 1, border: '1px solid red'}}>2</Box>
        </Box>
        <Box sx={{display: 'flex', width: '90vw', height: '30vh', gap: '10px', mb:1}}>
            <Box sx={{flex: 1, border: '1px solid red'}}>1</Box>
            <Box sx={{flex: 2, border: '1px solid red'}}>2</Box>
            <Box sx={{flex: 1, border: '1px solid red'}}>3</Box>
        </Box>
        <Box sx={{display: 'flex', width: '90vw', height: '30vh', gap: '10px', mb: 1}}>
            <Box sx={{flex: 1, border: '1px solid red'}}>1</Box>
            <Box sx={{flex: 1, border: '1px solid red'}}>2</Box>
        </Box>
    </Box>;
};


export default Foo;