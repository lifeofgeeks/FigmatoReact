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
  useBreakpointValue,
  HStack,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import NavLogo from "../assets/Group.png";
import SearchLogo from "../assets/search.png";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const midScreen = useBreakpointValue({ base: true, md: false });
  const smallScreen = useBreakpointValue({ base: true, sm2: false });
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
          <Box
            pr={{ base: 10, sm: 2 }}
            as="img"
            src={NavLogo}
            alt="Logo"
            h="40px"
          />
          <Text
            fontSize="md"
            fontWeight="bold"
            color="primaryColor"
            ml={!midScreen && 10}
          >
            Find Jobs
          </Text>
        </Flex>

        {/* Center Links - Hidden on Small Screens */}
        <Flex
          ml={8}
          fontSize={{ base: "10px", "2xl": "16px", lg: "12px", "1xl": "15px" }}
          color="#737A91"
          gap={6}
          fontWeight="medium"
          display={{ base: "none", "2lg": "flex" }}
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
        <Flex gap="15px" align="center">
          {/* Search Bar */}
          <InputGroup
            w={{ base: "100px", "2xl": "261px", lg: "130px" }}
            mr={4}
            display={{ base: "none", md: "flex" }}
            height="39px"
          >
            <InputLeftElement pointerEvents="none">
              <img
                src={SearchLogo}
                style={{ paddingBottom: "2px" }}
                width="18"
                height="18"
              />
            </InputLeftElement>
            <Input
              type="text"
              placeholder="Search"
              bg="#F6F9FF"
              //   borderRadius="full"
              // h="42px"
            />
          </InputGroup>

          {/* Resume Builder Button */}
          <Button
            display={{ base: "none", sm2: "flex" }}
            bg="primaryColor"
            color="white"
            borderRadius="8px"
            py="10px"
            px="20px"
            fontSize="16px"
            fontWeight="medium"
            _hover={{ bg: "blue.800" }}
          >
            Resume Builder
          </Button>
        </Flex>
        <Avatar
          src="https://s3-alpha-sig.figma.com/img/62d2/428b/cb73207b8b2bb07f3ab9c3d4131e734f?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hFmxAz62hGNmB8Mt0LzbZ4LB7KCzapbR3V0zQ5eHYOd0LknO2j5tq2jZrd2y2g8rDYnqfuWQaWyTY8gKGU7bx8TlgNB1oKRs8fM7QWcpePdGyvbp~MbVnKk~4iqWQRDpipJeJcR3IEvliyeBWz2trutfJR~JEdv6Cx290qVorOYvgstZZIgkXHZAsU8T~OFnLTQ4Kuf~NCX0y00g-0hUUJ4dVzU5KdYVdguihjTIvisS9clu7jjWFt~byjq92eLyFJqTOuWPRtTL2fiasz4~C4kElU5SuBc7~YHgkXCj88YTiywRgQJvGtxmX-M-naWIddNyvaEHxisB14ROH9HZIA__"
          ml={4}
          boxSize={"10"}
        />

        {/* Mobile Drawer Menu */}
        <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody display="flex" flexDirection="column" height="100%">
              {/* Drawer Menu Items */}

              <VStack align="start" spacing={4} flexGrow={1}>
                <HStack spacing={3} width="100%">
                  {midScreen && <Input placeholder="Search..." flex={1} />}
                  {smallScreen && (
                    <Button
                      bg="primaryColor"
                      color="white"
                      borderRadius="8px"
                      py="10px"
                      px="20px"
                      fontSize="16px"
                      fontWeight="medium"
                      _hover={{ bg: "blue.800" }}
                    >
                      Resume Builder
                    </Button>
                  )}
                </HStack>
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
