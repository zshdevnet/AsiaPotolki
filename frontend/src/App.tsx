import { useState, useEffect } from "react";
import { Box, Container, Flex, HStack, IconButton, Link, Spacer, useColorMode } from "@chakra-ui/react";
import { Moon, Sun } from "lucide-react";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Projects from "./sections/Projects";
import Footer from "./sections/Footer";
import ServicesPage from "./pages/ServicesPage";
import ProjectsPage from "./pages/ProjectsPage";
import GetQuotePage from "./pages/GetQuotePage";
import MaterialsCatalogPage from "./pages/MaterialsCatalogPage";
import { useSEO, seoData } from "./hooks/useSEO";

export default function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  
  // Get initial page from URL
  const getPageFromPath = () => {
    const path = window.location.pathname;
    if (path === '/services') return 'services';
    if (path === '/projects') return 'projects';
    if (path === '/materials') return 'materials';
    if (path === '/quote' || path === '/contact') return 'quote';
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<'home' | 'services' | 'projects' | 'materials' | 'quote'>(getPageFromPath());

  // Dynamic SEO based on current page
  useSEO(seoData[currentPage]);

  const navigateToHome = () => {
    setCurrentPage('home');
    window.history.pushState({}, '', '/');
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
  };

  const navigateToServices = () => {
    setCurrentPage('services');
    window.history.pushState({}, '', '/services');
  };

  const navigateToProjects = () => {
    setCurrentPage('projects');
    window.history.pushState({}, '', '/projects');
  };

  const navigateToMaterials = () => {
    setCurrentPage('materials');
    window.history.pushState({}, '', '/materials');
  };

  const navigateToQuote = () => {
    setCurrentPage('quote');
    window.history.pushState({}, '', '/quote');
  };

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getPageFromPath());
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <Box>
      {/* Sticky Header */}
      <Box as="header" position="sticky" top={0} zIndex={50} bg="rgba(255,255,255,0.7)" _dark={{ bg: "rgba(17,24,39,0.7)" }} style={{ backdropFilter: "saturate(180%) blur(12px)" }}>
        <Container>
          <Flex h={16} align="center">
            <Link as="button" fontWeight={800} onClick={navigateToHome} cursor="pointer">
              Asia Potolki
            </Link>
            <Spacer />
            <HStack spacing={6} display={{ base: "none", md: "flex" }}>
              <Link 
                as="button"
                onClick={navigateToServices}
                cursor="pointer"
              >
                Services
              </Link>
              <Link as="button" onClick={navigateToProjects} cursor="pointer">Projects</Link>
              <Link as="button" onClick={navigateToMaterials} cursor="pointer">Materials</Link>
              <Link as="button" onClick={navigateToQuote} cursor="pointer">Get Quote</Link>
            </HStack>
            <IconButton ml={2} aria-label="Toggle color mode" icon={colorMode === "light" ? <Moon /> : <Sun />} onClick={toggleColorMode} variant="ghost" />
          </Flex>
        </Container>
      </Box>

      {/* Page Content */}
      {currentPage === 'home' && (
        <main>
          <Hero onGetQuote={navigateToQuote} onViewProjects={navigateToProjects} />
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

      {currentPage === 'materials' && (
        <main>
          <MaterialsCatalogPage onBackToHome={navigateToHome} />
        </main>
      )}

      {currentPage === 'quote' && (
        <main>
          <GetQuotePage onBackToHome={navigateToHome} />
        </main>
      )}

      <Footer />
    </Box>
  );
}