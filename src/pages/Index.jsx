import React, { useState } from "react";
import { Box, Heading, Image, Input, Button, Grid, Text, Flex, useToast } from "@chakra-ui/react";
import { FaUpload, FaHeart } from "react-icons/fa";

const Index = () => {
  const [photos, setPhotos] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const toast = useToast();

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const newPhoto = {
        id: Date.now(),
        src: URL.createObjectURL(selectedFile),
        likes: 0,
      };
      setPhotos([...photos, newPhoto]);
      setSelectedFile(null);
      toast({
        title: "Photo uploaded.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleLike = (photoId) => {
    setPhotos(photos.map((photo) => (photo.id === photoId ? { ...photo, likes: photo.likes + 1 } : photo)));
  };

  return (
    <Box maxWidth="800px" margin="auto" padding={4}>
      <Heading as="h1" size="xl" textAlign="center" marginBottom={8}>
        Photo Sharing App
      </Heading>
      <Flex marginBottom={8}>
        <Input type="file" onChange={handleFileChange} />
        <Button leftIcon={<FaUpload />} colorScheme="blue" onClick={handleUpload} ml={4}>
          Upload
        </Button>
      </Flex>
      <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={4}>
        {photos.map((photo) => (
          <Box key={photo.id} borderWidth={1} borderRadius="md" padding={4}>
            <Image src={photo.src} alt="Uploaded photo" />
            <Flex align="center" mt={2}>
              <Button leftIcon={<FaHeart />} variant="ghost" size="sm" onClick={() => handleLike(photo.id)}>
                Like
              </Button>
              <Text ml={2}>{photo.likes} likes</Text>
            </Flex>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Index;
