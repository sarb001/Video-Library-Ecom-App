import React from 'react';
import MenuRoute from './components/MenuRoute';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <div className="App" style = {{height:'100vh',backgroundColor:'black',color:'white'}}>
        <ChakraProvider >
           <MenuRoute />
        </ChakraProvider>
    </div>
  );
}

export default App;
