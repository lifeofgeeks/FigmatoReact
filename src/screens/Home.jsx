import { Box, Flex } from "@chakra-ui/react";

import Navbar from "../components/Nav";
import JobPanel from "../components/rightSideJobPanel";
import ProfileCard from "../components/ProfileCard";

const Home = () => {
  return (
    <Box overflow="hidden">
      {/* Navbar */}
      <Navbar />

      <Flex
        px={5}
        mt={5}
        direction={{ base: "column", "2lg": "row" }}
        justify="center"
        align="flex-start"
      >
        {/* ProfileCard */}
        <ProfileCard />

        {/* JobPanel */}
        <Box maxW={"1300px"}>
          <JobPanel />
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;
