import {
  Box,
  Button,
  Flex,
  Input,
  Text,
  Avatar,
  Badge,
  Icon,
  Grid,
  GridItem,
  VStack,
  HStack,
  Divider,
  Collapse,
  IconButton,
  Card,
  InputGroup,
  InputLeftElement,
  Spacer,
  useBreakpointValue,
} from "@chakra-ui/react";

import { FiSearch, FiBookmark } from "react-icons/fi";
import { FaUsers } from "react-icons/fa";
import { useState } from "react";

import Navbar from "../components/Nav";
import JobPanel from "../components/rightSideJobPanel";

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
          bgImage="url('https://s3-alpha-sig.figma.com/img/f7b7/cb33/145f7000c3fac5cc4d409f31a3de3686?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=s3W8B9BHQTVyEYO9WsoTZTJksWQNC--VxDbgcbNT0skfUUAyazaOFvhuvyLAXYnQXjBOHuDNwhCpvWy5AbdVn5djjjwLOXfquyfAYhwzksrdCNY4KoYJveSnyF-BscVuI-kugbZMYG4gqU~UF~BmN4~3AWC69B-sbmtTe1GkG57AcJMpg~BWmUUvfsdTl-2hZtBHtcta-YQ6nHRCFSOJAjwHh1k2fyb5s8YJg8D6ilhQfOueFYOern1NzT44VgwliYtnpR7qNRj~DWeVRTGz-jlpTg-rxnQI-s6yxxesxBNgomnMp0IHVFkTVcc66gWYss7Fef781GBmRFhML2OeOA__')"
          bgSize="cover"
          bgPosition="center"
        >
          {/* Profile Picture */}
          <Avatar
            size="xl"
            src="https://s3-alpha-sig.figma.com/img/392f/c8a2/2c6eed8d401c7a77703ee92f86e797b1?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=e~a1gtMWszV4ypMeMXRXdNJzl5UvxzU6zyORG-KOW0Bs0nKGC5TT39Ub7-rDwNJ9gNb9hsUI9FC6khxQU4jP9vzkl1N4kbGDAbIDcCVUUFx8Grsz7njNm-WDor3N7ICoPIb8gZixzQjLmw1yiTuUvWpk2IeP6V15p68w4Io7Ztxv4Fr2AiIBoJLF7Vywqoa99QvgGhqtRnCPsgWx6XbZUJJKEXSpR7-jkLVQ-zOb1bbRQ5J1MbDiGi04g4Yz6VECcgGxdyBgNjAWeIEIKivBbRot56lAvmRe8jJI9zoHhmWGIT56hNVW8dFXKO7c8dHDtEiUSXbZOnBkCk17fIMDNg__"
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
      <Box w="full" bg="white" rounded="lg" boxShadow="md" p={4}>
        <HStack
          w="full"
          justify="space-between"
          cursor="pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Text fontSize="md" fontWeight="bold">
            My calendar
          </Text>
          <IconButton size="sm" variant="ghost" aria-label="Expand Calendar" />
        </HStack>
        <Collapse in={isOpen} animateOpacity>
          <Text fontSize="sm" color="blue.500" pt={2}>
            Upcoming Interviews
          </Text>
        </Collapse>
      </Box>
    </VStack>
  );
};

const Home = () => {
  return (
    <Box>
      {/* Navbar */}
      <Navbar />

      <Flex
        px={5}
        mt={5}
        direction={{ base: "column", "2lg": "row" }}
        // wrap="wrap"
        justify="center"
        align="flex-start"
        // gap={5}
      >
        {/* Sidebar */}
        <ProfileCard />
        {/* Job Panel */}
        <JobPanel />
      </Flex>
    </Box>
  );
};

export default Home;
