import {
  Box,
  Button,
  Flex,
  Input,
  Select,
  Text,
  VStack,
  HStack,
  Icon,
  Divider,
  Badge,
  Spacer,
  useBreakpointValue,
} from "@chakra-ui/react";
import {
  FiChevronDown,
  FiChevronUp,
  FiBookmark,
  FiMapPin,
  FiClock,
} from "react-icons/fi";
import { FaUsers } from "react-icons/fa";
import TeamsLogo from "../assets/TeamsLogo.png";
import SearchLogo from "../assets/searchWhite.png";
const JobCard = ({ promoted }) => {
  // comment
  const cardWidth = useBreakpointValue({
    base: "95%",
    sm: "95%",
    sm2: "210px",
    md: "210px",
  });

  return (
    <Box borderRadius="10px" p={2} w={cardWidth} bg="white">
      {promoted && (
        <Badge
          textTransform="none"
          pl={3}
          fontSize="10px"
          fontWeight="semibold"
          bg="#ffffff"
        >
          Promoted
        </Badge>
      )}
      <HStack pt={!promoted && 2}>
        <Box paddingLeft={3} borderRadius="md">
          <img
            src={TeamsLogo}
            style={{ paddingBottom: 13 }}
            width="23px"
            height="23px"
            alt=""
          />
        </Box>
        <VStack pb={3} align="start" pl={3} spacing={0}>
          <Text fontWeight="medium" fontSize="14px">
            UI/UX Designer
          </Text>
          <Text fontSize="12px" fontWeight="medium">
            Teams
          </Text>
        </VStack>
      </HStack>
      <VStack align="start" pl={2} spacing={1}>
        <HStack spacing={1}>
          <Icon as={FiMapPin} color="#585D6E" boxSize={4} />
          <Text pl={1} fontWeight="medium" fontSize="12px" color="#585D6E">
            Seattle, USA (Remote)
          </Text>
        </HStack>
        <HStack spacing={1}>
          <Icon as={FiClock} color="#585D6E" boxSize={4} />
          <Text pl={1} fontWeight="medium" fontSize="12px" color="#585D6E">
            1 day ago
          </Text>
          <Divider
            borderColor="gray.500"
            borderWidth="1px"
            h={3}
            orientation="vertical"
          />
          <Text
            fontWeight="medium"
            cursor="pointer"
            fontSize="12px"
            color="#0154ab"
          >
            22 Applicants
          </Text>
        </HStack>
      </VStack>
      <Flex px={2} justifyContent="space-between" mt={2} align="center">
        <Button
          backgroundColor="primaryColor"
          colorScheme="blue"
          w="115px"
          h="37px"
          borderRadius="6"
          fontWeight="medium"
          fontSize="12px"
        >
          Apply Now
        </Button>
        <Spacer />
        <Icon as={FiBookmark} boxSize={6} color="#AAAAAA" cursor="pointer" />
      </Flex>
    </Box>
  );
};
const JobPanel = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex mx="auto" direction="column">
      <Box p={8} width="100%">
        <Text fontSize="22px" fontWeight="bold" color="#333333">
          Find your Dream Job,{" "}
          <Text fontWeight="bold" fontSize="22px" as="span" color="#0154AA">
            Albert!
          </Text>
        </Text>
        <Text fontWeight="normal" fontSize="14px" color="#585D6E">
          Explore the latest job openings and apply for the best opportunities
          available today!
        </Text>

        {/* Search Section */}
        <Flex
          mt={4}
          bg="white"
          p={4}
          gap="10px"
          borderRadius="10px"
          align="center"
          direction={isMobile ? "column" : "row"}
          w="100%"
        >
          <Input
            placeholder="Job Title, Company, or Keywords"
            flex={2}
            w="100%"
            minH="40px"
            border="none"
            _focus={{ outline: "none" }}
          />
          {!isMobile && <Divider orientation="vertical" h="50px" />}

          <Select
            fontSize="14px"
            fontWeight="medium"
            placeholder="Select Location"
            flex={1}
            border="none"
          />
          {!isMobile && <Divider orientation="vertical" h="50px" />}

          <Select
            fontSize="14px"
            fontWeight="medium"
            placeholder="Job Type"
            flex={1}
            border="none"
          />
          <Button
            w={isMobile ? "100%" : "140px"}
            bg="primaryColor"
            colorScheme="blue"
            borderRadius="8px"
          >
            <img src={SearchLogo} color="white" />
            {!isMobile && (
              <Text fontSize="14px" fontWeight="medium" ml="2">
                Search
              </Text>
            )}
          </Button>
        </Flex>
        {/* Section */}
        <Flex
          mt={4}
          gap={2}
          wrap="wrap"
          align="center"
          direction={{ base: "column", md: "row" }}
        >
          <Text fontWeight="medium" fontSize="14px" color="#737A91">
            Similar:
          </Text>
          <Button
            _hover={{ bg: "none" }}
            border="1px"
            bg="#f4f4f4"
            color="#737A91"
            size="sm"
            fontSize="12px"
            fontWeight="medium"
          >
            Frontend
          </Button>
          <Button
            _hover={{ bg: "none" }}
            border="1px"
            bg="#f4f4f4"
            color="#737A91"
            size="sm"
            fontSize="12px"
            fontWeight="medium"
          >
            Backend
          </Button>
          <Button
            _hover={{ bg: "none" }}
            border="1px"
            bg="#f4f4f4"
            color="#737A91"
            fontWeight="medium"
            fontSize="12px"
            size="sm"
          >
            Graphic Designer
          </Button>
        </Flex>

        <Divider my={2} />
        {/* Job Cards Section */}
        <Flex pb={3} mt={6} align="center">
          <Text fontSize="lg" fontWeight="medium">
            Featured Jobs
          </Text>
          <Text
            fontSize="14px"
            textDecoration="underline"
            fontWeight="medium"
            color="#0154AA"
            cursor="pointer"
            ml={3}
          >
            See Featured Jobs
          </Text>
        </Flex>

        <Flex gap={4} wrap="wrap" justify={isMobile && "center"}>
          {Array.from({ length: 5 }).map((_, index) => (
            <JobCard key={index} promoted={true} />
          ))}
        </Flex>
        <Divider p={2} my={2} />
        <Flex pb={3} mt={6} align="center">
          <Text fontSize="lg" fontWeight="medium">
            Recommended Jobs
          </Text>
          <Text
            fontSize="14px"
            textDecoration="underline"
            fontWeight="medium"
            color="#0154AA"
            cursor="pointer"
            ml={3}
          >
            See Recommended Jobs
          </Text>
        </Flex>

        <Flex wrap={"wrap"} gap={4} justify={isMobile && "center"}>
          {Array.from({ length: 10 }).map((_, index) => (
            <JobCard key={index} />
          ))}
        </Flex>
        <Divider p={3} my={2} />
        <Flex pb={3} mt={6} align="center">
          <Text fontSize="lg" fontWeight="medium">
            Latest Jobs
          </Text>
          <Text
            fontSize="14px"
            textDecoration="underline"
            fontWeight="medium"
            color="#0154AA"
            cursor="pointer"
            ml={3}
          >
            See Latest Jobs
          </Text>
        </Flex>

        <Flex wrap={"wrap"} gap={4} justify={isMobile && "center"}>
          {Array.from({ length: 10 }).map((_, index) => (
            <JobCard key={index} />
          ))}
        </Flex>
      </Box>
    </Flex>
  );
};

export default JobPanel;
