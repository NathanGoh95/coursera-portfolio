import { Heading, HStack, Image, Text, VStack } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack
      color="black"
      backgroundColor="white"
      borderRadius="lg"
      cursor="pointer"
    >
      <Image src={imageSrc} borderRadius="lg" />
      <VStack spacing={4} p={4} alignItems="flex-start">
        <HStack>
          <Heading as="h1" size="md">
            {title}
          </Heading>
        </HStack>
        <HStack>
          <Text fontSize="sm" color="grey">
            {description}
          </Text>
        </HStack>
        <HStack>
          <p>See more</p>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
