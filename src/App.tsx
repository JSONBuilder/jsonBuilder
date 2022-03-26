import {
  Grid,
  GridItem,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import Form from './components/Form'
import Nav from './components/Nav'
import SchemaCreator from './components/SchemaCreator'

const App = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const containerBg = useColorModeValue('white', 'gray.700')

  return (
    <div>
      <Nav />
      <Grid
        h={'100%'}
        paddingLeft={10}
        paddingRight={10}
        paddingTop={10}
        paddingBottom={10}
        templateColumns="repeat(2, 1fr)"
        gap={6}
      >
        <GridItem padding={10} w="100%" h="auto" bg={containerBg}>
          <SchemaCreator />
        </GridItem>
        <GridItem padding={10} w="100%" h="auto" bg={containerBg}>
          <Form />
        </GridItem>
      </Grid>
    </div>
  )
}

export default App
