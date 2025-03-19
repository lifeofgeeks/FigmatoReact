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
import { FiSearch, FiBookmark, FiMapPin, FiClock } from "react-icons/fi";
import { FaUsers } from "react-icons/fa";
import TeamsLogo from "../assets/TeamsLogo.png";
import SearchLogo from "../assets/searchWhite.png";
const JobCard = () => (
  <Box
    borderRadius="10px"
    p={2}
    w="210px"
    bg="white"
    border="1px solid #E2E8F0"
  >
    <Badge fontSize="10px" fontWeight="semibold" bg="#ffffff">
      Promoted
    </Badge>
    <HStack>
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
    <VStack align="start" pl={2} spacing={2}>
      <HStack spacing={1}>
        <Icon as={FiMapPin} color="#585D6E" boxSize={4} />
        <Text fontSize="12px" color="#585D6E">
          Seattle, USA (Remote)
        </Text>
      </HStack>
      <HStack spacing={1}>
        <Icon as={FiClock} color="#585D6E" boxSize={4} />
        <Text fontSize="12px" color="#585D6E">
          1 day ago
        </Text>
        <Divider
          borderColor="gray.500"
          borderWidth="1px"
          h={3}
          orientation="vertical"
        />
        <Text cursor="pointer" fontSize="12px" color="#0154ab">
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
        fontSize="12px"
      >
        Apply Now
      </Button>
      <Spacer />
      <Icon as={FiBookmark} boxSize={6} color="#AAAAAA" cursor="pointer" />
    </Flex>
  </Box>
);
const JobPanel = () => {
  const isMobile = useBreakpointValue({ base: true, "2lg": false });
  return (
    <Box p={8}>
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

      <Flex
        mt={4}
        bg="white"
        p={4}
        gap="10px"
        borderRadius="10px"
        align="center"
        direction={isMobile ? "column" : "row"}
      >
        <Input
          placeholder="Job Title, Company, or Keywords"
          flex={2}
          w={isMobile && "50%"}
          minH={isMobile ? "30px" : "auto"}
          //   h={isMobile ? "150px" : "auto"}
          border="none"
          _focus={{ outline: "none" }}
        />
        <Flex
          gap={isMobile ? "10px" : "28px"}
          // Center in mobile view
        >
          {!isMobile && <Divider orientation="vertical" h="50px" />}
          <Select
            fontSize="14px"
            fontWeight="medium"
            placeholder="Select Location"
            flex={1}
            color="#585D6E"
            border="none"
          />
          {!isMobile && <Divider orientation="vertical" h="50px" />}
          <Select
            fontSize="14px"
            fontWeight="medium"
            placeholder="Job Type"
            color="#585D6E"
            flex={1}
            border="none"
          />
          <Button
            w={isMobile ? "90px" : "140px"}
            bg="primaryColor"
            colorScheme="blue"
            // px={8}
            borderRadius="8px"
          >
            <img src={SearchLogo} color="white" />{" "}
            {!isMobile && (
              <Text fontSize="14px" fontWeight="medium" ml="2">
                Search
              </Text>
            )}
          </Button>
        </Flex>
      </Flex>

      <HStack mt={4} spacing={2}>
        <Text fontWeight="medium" fontSize="14px" color="#737A91">
          Similar:
        </Text>
        <Button
          _hover={{ bg: "none" }}
          border="1px"
          bg="#f4f4f4"
          color={"#737A91"}
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
          color={"#737A91"}
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
          color={"#737A91"}
          fontWeight="medium"
          fontSize="12px"
          size="sm"
        >
          Graphic Designer
        </Button>
      </HStack>

      <Flex mt={6} align="center">
        <Text fontSize="lg" fontWeight="medium">
          Featured Jobs
        </Text>
        <Text
          textDecoration={"underline"}
          ml={4}
          color="blue.500"
          cursor="pointer"
        >
          See Featured Jobs
        </Text>
      </Flex>
      <Divider my={2} />

      <Flex gap={4} wrap="wrap">
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </Flex>

      <Flex mt={6} align="center">
        <Text fontSize="lg" fontWeight="medium">
          Recommended Jobs
        </Text>
        <Text
          ml={4}
          textDecoration={"underline"}
          color="blue.500"
          cursor="pointer"
        >
          See Recommended Jobs
        </Text>
      </Flex>
      <Divider my={2} />

      <Flex gap={4} wrap="wrap">
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </Flex>
    </Box>
  );
};

export default JobPanel;
