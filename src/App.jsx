import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router } from "react-router-dom";
import Layout from './components/Layout';
import Routings from './router/Routings';


function App() {

  console.log("HELLO")

  return (
    <ChakraProvider >
      <Router>
        <Layout>
          <Routings />
        </Layout>
      </Router>
    </ChakraProvider>
  )

}

export default App
