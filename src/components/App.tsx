
import React from 'react';
import { Box } from '@mui/material';
import Foo from './Foo'
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
}


const boxSx: any = {
    // width: '150px',
    // height: '150px',
    fontSize: '8rem',
    borderRadius: '15px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}


const App: React.FC<any> = (props: Props) => {

    return <Foo />;
};


export default App;