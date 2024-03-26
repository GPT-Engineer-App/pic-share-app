import React from "react";
import { Box, Heading, Image, Button, Grid, Text, Flex } from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";

import { useState } from "react";

const Profile = ({ photos }) => {
  const [followers, setFollowers] = useState(0);

  const handleFollow = () => {
    setFollowers((current) => current + 1);
  };
  return (
    <Box maxWidth="800px" margin="auto" padding={4}>
      <Heading as="h1" size="xl" textAlign="center" marginBottom={8}>
        User Profile
      </Heading>
      <Flex direction="column" align="center" justify="center" mb={8}>
        <Text fontSize="2xl" mb={2}>
          {followers} Followers
        </Text>
        <Button leftIcon={<FaUser />} colorScheme="blue" onClick={handleFollow}>
          Follow
        </Button>
      </Flex>
      <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={4}>
        {photos.map((photo) => (
          <Box key={photo.id} borderWidth={1} borderRadius="md" padding={4}>
            <Image src={photo.src} alt="Uploaded photo" />
            <Text mt={2}>{photo.likes} likes</Text>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Profile;
