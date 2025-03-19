import {
  Box,
  Flex,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  Avatar,
  Spacer,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  useDisclosure,
  Icon,
} from "@chakra-ui/react";
import { FiSearch, FiMenu, FiUser } from "react-icons/fi";
import NavLogo from "../assets/Group.png";
import SearchLogo from "../assets/search.png";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="white" px={{ base: 4, md: 10 }} py={3}>
      <Flex align="center" justify="space-between" h="60px">
        {/* Left Section - Logo & Menu Icon */}
        <Flex align="center">
          <IconButton
            display={{ base: "block", "2lg": "none" }}
            icon={<FiMenu size={20} />}
            aria-label="Open Menu"
            onClick={onOpen}
            variant="ghost"
            mr={2}
          />
          <Box as="img" src={NavLogo} alt="Logo" h="40px" />
          <Text
            // display={{ base: "none", lg: "block" }}
            fontSize="md"
            fontWeight="bold"
            color="primaryColor"
            ml={{ base: 10, sm: 2 }}
          >
            Find Jobs
          </Text>
        </Flex>

        {/* Center Links - Hidden on Small Screens */}
        <Flex
          ml={8}
          fontSize={{ base: "10px", "2xl": "16px", lg: "12px", "1xl": "15px" }}
          color="gray.600"
          gap={6}
          fontWeight="medium"
          display={{ base: "none", "2lg": "flex" }} // Hidden below lg screens
        >
          {[
            "Top Companies",
            "Job Tracker",
            "My Calendar",
            "Documents",
            "Messages",
            "Notifications",
          ].map((item) => (
            <Text key={item} cursor="pointer" _hover={{ color: "gray.800" }}>
              {item}
            </Text>
          ))}
        </Flex>

        <Spacer />

        {/* Right Section - Search & Buttons */}
        <Flex align="center">
          {/* Search Bar */}
          <InputGroup
            w={{ base: "100px", "2xl": "230px", lg: "130px" }} // Smaller on small screens
            mr={4}
            display={{ base: "none", md: "flex" }} // Hide on very small screens
          >
            <InputLeftElement pointerEvents="none">
              <img
                src={SearchLogo}
                style={{ paddingTop: "1px" }}
                width="17"
                height="17"
              />
            </InputLeftElement>
            <Input
              type="text"
              placeholder="Search"
              bg="#F6F9FF"
              //   borderRadius="full"
              h="42px"
            />
          </InputGroup>

          {/* Resume Builder Button */}
          <Button
            bg="primaryColor"
            color="white"
            borderRadius="8px"
            // px={5}
            // h="36px"
            py="10px"
            px="20px"
            fontSize="16px"
            fontWeight="medium"
            _hover={{ bg: "blue.800" }}
            // display={{ base: "none", md: "block" }}
          >
            Resume Builder
          </Button>

          {/* Profile Icon (Shows instead of Avatar on Small Screens) */}
          <Avatar
            src="/profile.jpg"
            size="sm"
            ml={4}
            // display={{ base: "none", md: "block" }}
          />
          {/* <IconButton
            icon={<FiUser size={20} />}
            aria-label="Profile"
            variant="ghost"
            display={{ base: "block", md: "none" }}
          /> */}
        </Flex>

        {/* Mobile Drawer Menu */}
        <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <VStack align="start" spacing={4}>
                {[
                  "Find Jobs",
                  "Top Companies",
                  "Job Tracker",
                  "My Calendar",
                  "Documents",
                  "Messages",
                  "Notifications",
                ].map((item) => (
                  <Text key={item} fontSize="lg" onClick={onClose}>
                    {item}
                  </Text>
                ))}
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  );
};

export default Navbar;
