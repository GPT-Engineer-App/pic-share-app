import React, { useState } from "react";
import { Box, Heading, Image, Button, Grid, Text, Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { FaUser, FaEdit } from "react-icons/fa";

import { useLocation } from "react-router-dom";

const Profile = ({ photos = [] }) => {
  const location = useLocation();
  const { user } = location.state;

  const [followers, setFollowers] = useState(0);
  const [userData, setUserData] = useState(user);

  const handleFollow = () => {
    setFollowers((current) => current + 1);
  };

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(userData);
  };

  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <Box maxWidth="800px" margin="auto" padding={4}>
      <Flex justify="space-between" align="center" mb={8}>
        <Heading as="h1" size="xl">
          User Profile
        </Heading>
        <Button leftIcon={<FaEdit />} colorScheme="blue" onClick={toggleEdit}>
          {isEditing ? "Cancel" : "Edit"}
        </Button>
      </Flex>
      {isEditing ? (
        <Box mb={8} backgroundColor="gray.100" p={4} borderRadius="md">
          <form onSubmit={handleSubmit}>
            <FormControl id="name" mb={4}>
              <FormLabel>Name</FormLabel>
              <Input type="text" name="name" value={userData.name} onChange={handleChange} placeholder="Enter your name" />
            </FormControl>
            <FormControl id="bio" mb={4}>
              <FormLabel>Bio</FormLabel>
              <Input type="text" name="bio" value={userData.bio} onChange={handleChange} placeholder="Write a short bio" />
            </FormControl>
            <FormControl id="profilePicture" mb={4}>
              <FormLabel>Profile Picture URL</FormLabel>
              <Input type="text" name="profilePicture" value={userData.profilePicture} onChange={handleChange} placeholder="Enter URL for profile picture" />
            </FormControl>
            <Button type="submit" colorScheme="blue">
              Save
            </Button>
          </form>
        </Box>
      ) : (
        <>
          <Box mb={8}>
            <Text fontSize="xl" fontWeight="bold" mb={2}>
              {userData.name}
            </Text>
            <Text mb={4}>{userData.bio}</Text>
            {userData.profilePicture && <Image src={userData.profilePicture} alt="Profile" maxWidth="200px" borderRadius="full" />}
          </Box>
        </>
      )}
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
