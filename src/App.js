import logo from './logo.svg'
import './App.css'
import { Box, Image, Text } from '@chakra-ui/react'

function App() {
  return (
    <>
      <Box textAlign={'center'} mr="auto" ml="auto">
        <Text fontSize="2xl">NMU HOME</Text>
        <Image
          mt="-5"
          src={logo}
          className="App-logo"
          alt="logo"
          mr="auto"
          ml="auto"
        />
      </Box>
    </>
  )
}

export default App
