import React from "react";
import {
  Box,
  Image,
  Text,
  UnorderedList,
  ListItem,
  Button,
} from "@chakra-ui/react";

export const Card = ({ children }) => {
  return (
    <Box
      className="card"
      bg="white"
      borderRadius="md"
      boxShadow="md"
      p="4"
      maxW="500px"
      mx="auto"
      display="flex"
      alignContent="center"
      justifyContent="space-around"
    >
      {children}
    </Box>
  );
};

export const Avatar = ({ img }) => {
  return (
    <Image
      className="avatar"
      src={img}
      alt="Avatar"
      borderRadius="full"
      boxSize="100px"
      padding="10px"
    />
  );
};

export const PersonalInfo = ({ name, role, location, registerDate }) => {
  return (
    <div className="personal-info">
      <Text as="h2" fontSize="xl" fontWeight="bold" mb="2">
        {name}
      </Text>
      <Text>{role}</Text>
      <Text>Location: {location}</Text>
      <Text>Date: {registerDate}</Text>
    </div>
  );
};

export const Interests = ({ entries }) => {
  return (
    <UnorderedList className="interests" ml="0" mt="5px">
      <Text as="h2" fontSize="xl" fontWeight="bold">
        Interests
      </Text>
      <Box display="flex">
        {entries.map((interest, index) => (
          <ListItem
            margin="2px"
            backgroundColor="lightgray"
            padding="5px"
            borderRadius="3px"
            listStyleType="none"
            key={index}
          >
            {interest}
          </ListItem>
        ))}
      </Box>
    </UnorderedList>
  );
};

export const Buttons = ({ active }) => {
  return (
    <div className="buttons">
      {active.map((button, index) => (
        <Button key={index} border="1px gray solid" mt="4">
          {button}
        </Button>
      ))}
    </div>
  );
};
