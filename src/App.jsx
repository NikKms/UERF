import { ChakraProvider, theme } from '@chakra-ui/react'
import { BrowserRouter as Router } from "react-router-dom";
import Layout from './components/Layout';
import Routings from './router/Routings';
import './i18n'


function App() {


  return (
    <ChakraProvider theme={theme} >
      <Router>
        <Layout>
          <Routings />
        </Layout>
      </Router>
    </ChakraProvider>
  )

}

export default App
