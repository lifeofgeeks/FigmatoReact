import {
  Avatar,
  Badge,
  Box,
  Button,
  Collapse,
  Divider,
  HStack,
  IconButton,
  Image,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Cover from "../assets/Cover.png";
import Profile from "../assets/Oval.png";
const ProfileCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useBreakpointValue({ base: true, "2lg": false });
  return (
    <VStack pt={5} spacing={4} w="100%" maxW="370px" mx={isMobile && "auto"}>
      {/* TOP SECTION - Background Image + Profile Info */}
      <Box
        w="full"
        bg="white"
        rounded="lg"
        boxShadow="md"
        overflow="hidden"
        pb={6}
      >
        {/* Cover Image */}
        <Box
          position="relative"
          w="full"
          h="120px"
          bgImage={Cover}
          bgSize="cover"
          bgPosition="center"
        >
          {/* Profile Picture */}
          <Avatar
            size="xl"
            src={Profile}
            position="absolute"
            bottom="-40px"
            left="50%"
            transform="translateX(-50%)"
            border="4px solid white"
            boxShadow="lg"
          />
        </Box>

        {/* Profile Info */}
        <VStack pt={10} pb={2} spacing={1} textAlign="center">
          <Text fontSize="lg" fontWeight="bold">
            Albert Flores
          </Text>
          <Text
            maxW="240px"
            fontWeight="medium"
            fontSize="14px"
            color="#333333"
            px={4}
          >
            Senior Product Designer | UI/UX Designer | Graphic Designer | Web...
          </Text>
          <Text fontWeight="medium" fontSize="12px" color="#585D6E">
            Clinton, Maryland
          </Text>
        </VStack>
      </Box>

      {/* STATS SECTION - Separate Box */}
      <Box w="full" bg="white" rounded="lg" boxShadow="md" p={4}>
        <VStack spacing={3} w="full">
          <HStack justify="space-between" w="full">
            <Text fontWeight="medium" fontSize="14px" color="#333333">
              Profile Visitors
            </Text>
            <Text fontSize="16px" fontWeight="medium" color="#0154AA">
              140
            </Text>
          </HStack>
          <Divider />
          <HStack justify="space-between" w="full">
            <Text fontWeight="medium" fontSize="14px" color="#333333">
              Resume Viewers
            </Text>
            <Text fontSize="16px" fontWeight="medium" color="#0154AA">
              20
            </Text>
          </HStack>
          <Divider />
          <HStack justify="space-between" w="full">
            <Text fontWeight="medium" fontSize="14px" color="#333333">
              My Jobs
            </Text>
            <Text fontSize="16px" fontWeight="medium" color="#0154AA">
              88
            </Text>
          </HStack>
        </VStack>
      </Box>

      {/* CALENDAR SECTION - Separate Box */}
      <Box w="full" bg="white" rounded="10px" p={2}>
        <HStack
          justify="space-between"
          cursor="pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <VStack pl={1} align="start" spacing={0}>
            <Text color="#333333" fontSize="16px" fontWeight="semibold">
              My calendar
            </Text>
            <Text color="#737A91" fontSize="14px" fontWeight="medium">
              Upcoming Interviews
            </Text>
          </VStack>
          <IconButton
            as={isOpen ? FiChevronUp : FiChevronDown}
            size="xs"
            mr="1"
            fontWeight="light"
            color="#333333"
            variant="ghost"
            aria-label="Expand Calendar"
          />
        </HStack>
        <Collapse in={isOpen} animateOpacity>
          <VStack spacing={0}>
            {[1, 2, 3].map((item) => (
              <Box
                key={item}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                bg="white"
                p={3}
                borderRadius="md"
                boxShadow="sm"
                w={isMobile ? "310px" : "350px"}
              >
                {/* Left Section */}
                <HStack spacing={2}>
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
                    alt="Figma Logo"
                    bg="#f7faff"
                    boxSize="27px"
                  />
                  <VStack align="start" spacing={0} lineHeight="short">
                    <Text color="#333333" fontWeight="semibold" fontSize="sm">
                      UI UX Designer
                    </Text>
                    <Text fontSize="12px" color="#737A91">
                      Figma
                    </Text>
                    <Text fontSize="12px" color="#737A91">
                      16th Feb | 13:45 | Remote
                    </Text>
                  </VStack>
                </HStack>

                {/* Right Section */}
                <HStack spacing={2}>
                  <Badge
                    bg="#95ffd6"
                    px={2}
                    color="#21a370"
                    py={0.5}
                    borderRadius="md"
                    fontWeight="medium"
                    fontSize="13px"
                    textTransform="none"
                  >
                    Accepted
                  </Badge>
                  <Button
                    fontWeight="medium"
                    variant="ghost"
                    size="xs"
                    color="#767d92"
                    bg="#f7faff"
                    p={0}
                  >
                    Deny
                  </Button>
                </HStack>
              </Box>
            ))}
          </VStack>
        </Collapse>
      </Box>
    </VStack>
  );
};

export default ProfileCard;
