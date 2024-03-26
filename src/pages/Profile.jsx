import React, { useState } from "react";
import { Box, Heading, Image, Button, Grid, Text, Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";

const Profile = ({ photos }) => {
  const [followers, setFollowers] = useState(0);
  const [user, setUser] = useState({
    name: "",
    bio: "",
    profilePicture: "",
  });
  const [showForm, setShowForm] = useState(false);

  const handleFollow = () => {
    setFollowers((current) => current + 1);
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(user);
  };

  return (
    <Box maxWidth="800px" margin="auto" padding={4}>
      <Heading as="h1" size="xl" textAlign="center" marginBottom={8}>
        User Profile
      </Heading>
      <Box mb={8}>
        <form onSubmit={handleSubmit}>
          <FormControl id="name" mb={4}>
            <FormLabel>Name</FormLabel>
            <Input type="text" name="name" value={user.name} onChange={handleChange} />
          </FormControl>
          <FormControl id="bio" mb={4}>
            <FormLabel>Bio</FormLabel>
            <Input type="text" name="bio" value={user.bio} onChange={handleChange} />
          </FormControl>
          <FormControl id="profilePicture" mb={4}>
            <FormLabel>Profile Picture URL</FormLabel>
            <Input type="text" name="profilePicture" value={user.profilePicture} onChange={handleChange} />
          </FormControl>
          <Button type="submit" colorScheme="blue">
            Save
          </Button>
        </form>
      </Box>
      <Flex direction="column" align="center" justify="center" mb={8}>
        <Text fontSize="2xl" mb={2}>
          {followers} Followers
        </Text>
        <Button leftIcon={<FaUser />} colorScheme="blue" onClick={handleFollow}>
          Follow
        </Button>
        <Button colorScheme="blue" onClick={() => setShowForm(!showForm)} mt={4}>
          Edit Profile
        </Button>
      </Flex>
      {showForm && (
        <Box mb={8}>
          <form onSubmit={handleSubmit}>
            <FormControl id="name" mb={4}>
              <FormLabel>Name</FormLabel>
              <Input type="text" name="name" value={user.name} onChange={handleChange} />
            </FormControl>
            <FormControl id="bio" mb={4}>
              <FormLabel>Bio</FormLabel>
              <Input type="text" name="bio" value={user.bio} onChange={handleChange} />
            </FormControl>
            <FormControl id="profilePicture" mb={4}>
              <FormLabel>Profile Picture URL</FormLabel>
              <Input type="text" name="profilePicture" value={user.profilePicture} onChange={handleChange} />
            </FormControl>
            <Button type="submit" colorScheme="blue">
              Save
            </Button>
          </form>
        </Box>
      )}
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
