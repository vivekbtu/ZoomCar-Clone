
import './App.css';
// import { ChakraProvider } from '@chakra-ui/react';
// import ZmsPage from './Components/ZmsPage';
import AllRoutes from './Routes/AllRoutes';
import { BrowserRouter } from 'react-router-dom';
import LocatinPage from './Pages/LocationPage';
function App() {
  return (
    <div className="App">
     {/* <ChakraProvider> */}
     <BrowserRouter>
      <AllRoutes />
      {/* <LocatinPage /> */}
      </BrowserRouter>
     {/* </ChakraProvider> */}
    </div>
  );
}

export default App;
