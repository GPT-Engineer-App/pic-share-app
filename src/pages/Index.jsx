import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Heading } from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";

function Index() {
  const [user, setUser] = useState({
    name: "",
    bio: "",
    profilePicture: "",
  });

  return (
    <Container centerContent>
      <Heading>Welcome to the site!</Heading>
      <Link to="/profile" state={{ user }}>
        <Button leftIcon={<FaUser />} colorScheme="blue" mt="4">
          Profile
        </Button>
      </Link>
    </Container>
  );
}

export default Index;
