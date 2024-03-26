import { Link } from "react-router-dom";
import { Button, Container, Heading } from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";

function Index() {
  return (
    <Container centerContent>
      <Heading>Welcome to the site!</Heading>
      <Link to="/profile">
        <Button leftIcon={<FaUser />} colorScheme="blue" mt="4">
          Profile
        </Button>
      </Link>
    </Container>
  );
}

export default Index;
