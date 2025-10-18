import { useState } from "react";
import { Box, Container, Flex, HStack, IconButton, Link, Spacer, useColorMode } from "@chakra-ui/react";
import { Moon, Sun } from "lucide-react";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Projects from "./sections/Projects";
import Footer from "./sections/Footer";
import ServicesPage from "./pages/ServicesPage";
import ProjectsPage from "./pages/ProjectsPage";

export default function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [currentPage, setCurrentPage] = useState<'home' | 'services' | 'projects'>('home');

  const navigateToHome = () => {
    setCurrentPage('home');
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
  };

  const navigateToServices = () => setCurrentPage('services');
  const navigateToProjects = () => setCurrentPage('projects');

  return (
    <Box>
      {/* Sticky Header */}
      <Box as="header" position="sticky" top={0} zIndex={50} bg="rgba(255,255,255,0.7)" _dark={{ bg: "rgba(17,24,39,0.7)" }} style={{ backdropFilter: "saturate(180%) blur(12px)" }}>
        <Container>
          <Flex h={16} align="center">
            <Link href="#" fontWeight={800} onClick={navigateToHome} cursor="pointer">
              Asia Potolki
            </Link>
            <Spacer />
            <HStack spacing={6} display={{ base: "none", md: "flex" }}>
              <Link 
                href="#" 
                onClick={navigateToServices}
                cursor="pointer"
              >
                Services
              </Link>
              <Link href="#" onClick={navigateToProjects} cursor="pointer">Projects</Link>
              <Link href="#" onClick={navigateToHome} cursor="pointer">Contact</Link>
            </HStack>
            <IconButton ml={2} aria-label="Toggle color mode" icon={colorMode === "light" ? <Moon /> : <Sun />} onClick={toggleColorMode} variant="ghost" />
          </Flex>
        </Container>
      </Box>

      {/* Page Content */}
      {currentPage === 'home' && (
        <main>
          <Hero />
          <Box id="services"><Services onViewAll={navigateToServices} /></Box>
          <Box id="projects"><Projects onViewAll={navigateToProjects} /></Box>
          {/* You can add Calculator, FAQ, Contact next */}
        </main>
      )}

      {currentPage === 'services' && (
        <main>
          <ServicesPage onBackToHome={navigateToHome} />
        </main>
      )}

      {currentPage === 'projects' && (
        <main>
          <ProjectsPage onBackToHome={navigateToHome} />
        </main>
      )}

      <Footer />
    </Box>
  );
}