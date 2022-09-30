
import './App.css';
// import { ChakraProvider } from '@chakra-ui/react';
// import ZmsPage from './Components/ZmsPage';
import AllRoutes from './Routes/AllRoutes';
import { BrowserRouter } from 'react-router-dom';
import SelectCountry from './Pages/SelectCountry';
import Fly from './Pages/LocationFinder.jsx/Fly';
function App() {
  return (
    <div className="App">
     {/* <ChakraProvider> */}
     <BrowserRouter>
      <AllRoutes />
      {/* <SelectCountry /> */}
      {/* <Fly/> */}
      </BrowserRouter>
     {/* </ChakraProvider> */}
    </div>
  );
}

export default App;
