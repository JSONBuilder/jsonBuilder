import {
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";

const Form = () => {
  const [formInputs, setFormInputs] = useState([
    <FormControl isRequired>
      <FormLabel htmlFor="first-name">First name</FormLabel>
      <Input
        _focus={{ boxShadow: "none" }}
        id="first-name"
        placeholder="First name"
      />
    </FormControl>,
  ]);
  return (
    <div>
      {formInputs.map((formInput) => formInput)}
      <Center margin={5}>
        <Button _focus={{ boxShadow: "none" }}>Create JSON</Button>
      </Center>
    </div>
  );
};

export default Form;
