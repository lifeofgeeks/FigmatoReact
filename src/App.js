import logo from "./logo.svg";
// import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";
import "./index.css";
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <AppRoutes />
      </Router>
    </ChakraProvider>
  );
}

export default App;
