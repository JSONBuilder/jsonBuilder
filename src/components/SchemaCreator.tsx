import { AddIcon } from "@chakra-ui/icons";
import {
  Button,
  Center,
  FormControl,
  FormLabel,
  Grid,
  Input,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";

const SchemaCreator = () => {
  const [formInputs, setFormInputs] = useState([
    <FormControl isRequired>
      <Input _focus={{ boxShadow: "none" }} id="first-name" placeholder="Key" />
    </FormControl>,
    <FormControl isRequired>
      <Select id="country" placeholder="Select country">
        <option>United Arab Emirates</option>
        <option>Nigeria</option>
      </Select>
    </FormControl>,
    <FormControl isRequired>
      <Input
        _focus={{ boxShadow: "none" }}
        id="first-name"
        placeholder="Value"
      />
    </FormControl>,
  ]);
  return (
    <div>
      <Grid gap={3} templateColumns="repeat(3, 1fr)">
        {formInputs.map((formInput) => formInput)}
      </Grid>
      <Center margin={5}>
        <Button _focus={{ boxShadow: "none" }}>
          <AddIcon />
        </Button>
      </Center>
    </div>
  );
};

export default SchemaCreator;
