import { Box, Container, Flex, HStack, IconButton, Link, Spacer, useColorMode } from "@chakra-ui/react";
import { Moon, Sun } from "lucide-react";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Projects from "./sections/Projects";
import Footer from "./sections/Footer";


export default function App() {
  const { colorMode, toggleColorMode } = useColorMode();


  return (
    <Box>
      {/* Sticky Header */}
      <Box as="header" position="sticky" top={0} zIndex={50} bg="rgba(255,255,255,0.7)" _dark={{ bg: "rgba(17,24,39,0.7)" }} style={{ backdropFilter: "saturate(180%) blur(12px)" }}>
        <Container>
          <Flex h={16} align="center">
            <Link href="#" fontWeight={800}>Asia Potolki</Link>
            <Spacer />
            <HStack spacing={6} display={{ base: "none", md: "flex" }}>
              <Link href="#services">Services</Link>
              <Link href="#projects">Projects</Link>
              <Link href="#contact">Contact</Link>
            </HStack>
            <IconButton ml={2} aria-label="Toggle color mode" icon={colorMode === "light" ? <Moon /> : <Sun />} onClick={toggleColorMode} variant="ghost" />
          </Flex>
        </Container>
      </Box>


      <main>
        <Hero />
        <Box id="services"><Services /></Box>
        <Box id="projects"><Projects /></Box>
        {/* You can add Calculator, FAQ, Contact next */}
      </main>


      <Footer />
    </Box>
  );
}