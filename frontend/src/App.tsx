import { useState, useEffect } from "react";
import {
  Box,
  Container,
  Flex,
  HStack,
  IconButton,
  Link,
  Spacer,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { Moon, Sun } from "lucide-react";
import HomePage from "./pages/HomePage";
import Footer from "./sections/Footer";
import ServicesPage from "./pages/ServicesPage";
import ProjectsPage from "./pages/ProjectsPage";
import GetQuotePage from "./pages/GetQuotePage";
import MaterialsCatalogPage from "./pages/MaterialsCatalogPage";
import { useSEO, seoData } from "./hooks/useSEO";
import LanguageSwitcher from "./components/LanguageSwitcher";
import { useLanguage } from "./context/LanguageContext";
import { navbarTexts } from "./i18n/navbar";
import { LayoutGroup, motion } from "framer-motion";

export default function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { lang } = useLanguage();
  const activeColor = useColorModeValue("brand.600", "brand.500");

  // Get initial page from URL
  const getPageFromPath = () => {
    const path = window.location.pathname;
    if (path === "/services") return "services";
    if (path === "/projects") return "projects";
    if (path === "/materials") return "materials";
    if (path === "/quote" || path === "/contact") return "quote";
    return "home";
  };

  const [currentPage, setCurrentPage] = useState<
    "home" | "services" | "projects" | "materials" | "quote"
  >(getPageFromPath());

  // Dynamic SEO based on current page
  useSEO(seoData[currentPage]);

  const navigateToHome = () => {
    setCurrentPage("home");
    window.history.pushState({}, "", "/");
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
  };

  const navigateToServices = () => {
    setCurrentPage("services");
    window.history.pushState({}, "", "/services");
  };

  const navigateToProjects = () => {
    setCurrentPage("projects");
    window.history.pushState({}, "", "/projects");
  };

  const navigateToMaterials = () => {
    setCurrentPage("materials");
    window.history.pushState({}, "", "/materials");
  };

  const navigateToQuote = () => {
    setCurrentPage("quote");
    window.history.pushState({}, "", "/quote");
  };

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getPageFromPath());
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return (
    <Box>
      {/* Sticky Header */}
      <Box
        as="header"
        position="sticky"
        top={0}
        zIndex={50}
        bg="rgba(255,255,255,0.7)"
        _dark={{ bg: "rgba(17,24,39,0.7)" }}
        style={{ backdropFilter: "saturate(180%) blur(12px)" }}
      >
        <Container>
          <Flex h={16} align="center">
            <Link
              as="button"
              fontWeight={800}
              onClick={navigateToHome}
              cursor="pointer"
              textDecoration="none"
              _hover={{ textDecoration: "none" }}
            >
              Asia Potolki
            </Link>
            <Spacer />
            <LayoutGroup>
              <HStack spacing={6} display={{ base: "none", md: "flex" }}>
                {/* Services */}
                <Link
                  as="button"
                  onClick={navigateToServices}
                  cursor="pointer"
                  position="relative"
                  textDecoration="none"
                  _hover={{ color: activeColor, textDecoration: "none" }}
                  color={"services" === currentPage ? activeColor : undefined}
                  transition="color 0.2s ease"
                  pb={1}
                >
                  {navbarTexts[lang].services}
                  {"services" === currentPage && (
                    <Box
                      as={motion.div}
                      layoutId="nav-underline"
                      position="absolute"
                      left={0}
                      right={0}
                      bottom={-1}
                      height="2px"
                      bg={activeColor}
                      borderRadius="1px"
                    />
                  )}
                </Link>

                {/* Projects */}
                <Link
                  as="button"
                  onClick={navigateToProjects}
                  cursor="pointer"
                  position="relative"
                  textDecoration="none"
                  _hover={{ color: activeColor, textDecoration: "none" }}
                  color={"projects" === currentPage ? activeColor : undefined}
                  transition="color 0.2s ease"
                  pb={1}
                >
                  {navbarTexts[lang].projects}
                  {"projects" === currentPage && (
                    <Box
                      as={motion.div}
                      layoutId="nav-underline"
                      position="absolute"
                      left={0}
                      right={0}
                      bottom={-1}
                      height="2px"
                      bg={activeColor}
                      borderRadius="1px"
                    />
                  )}
                </Link>

                {/* Materials */}
                <Link
                  as="button"
                  onClick={navigateToMaterials}
                  cursor="pointer"
                  position="relative"
                  textDecoration="none"
                  _hover={{ color: activeColor, textDecoration: "none" }}
                  color={"materials" === currentPage ? activeColor : undefined}
                  transition="color 0.2s ease"
                  pb={1}
                >
                  {navbarTexts[lang].materials}
                  {"materials" === currentPage && (
                    <Box
                      as={motion.div}
                      layoutId="nav-underline"
                      position="absolute"
                      left={0}
                      right={0}
                      bottom={-1}
                      height="2px"
                      bg={activeColor}
                      borderRadius="1px"
                    />
                  )}
                </Link>

                {/* Get Quote */}
                <Link
                  as="button"
                  onClick={navigateToQuote}
                  cursor="pointer"
                  position="relative"
                  textDecoration="none"
                  _hover={{ color: activeColor, textDecoration: "none" }}
                  color={"quote" === currentPage ? activeColor : undefined}
                  transition="color 0.2s ease"
                  pb={1}
                >
                  {navbarTexts[lang].quote}
                  {"quote" === currentPage && (
                    <Box
                      as={motion.div}
                      layoutId="nav-underline"
                      position="absolute"
                      left={0}
                      right={0}
                      bottom={-1}
                      height="2px"
                      bg={activeColor}
                      borderRadius="1px"
                    />
                  )}
                </Link>
              </HStack>
            </LayoutGroup>
            <HStack spacing={1} ml={2}>
              <LanguageSwitcher />
              <IconButton
                aria-label="Toggle color mode"
                icon={colorMode === "light" ? <Moon /> : <Sun />}
                onClick={toggleColorMode}
                variant="ghost"
              />
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Page Content */}
      {currentPage === "home" && (
        <HomePage
          onGetQuote={navigateToQuote}
          onViewProjects={navigateToProjects}
          onViewServices={navigateToServices}
        />
      )}

      {currentPage === "services" && (
        <main>
          <ServicesPage onBackToHome={navigateToHome} />
        </main>
      )}

      {currentPage === "projects" && (
        <main>
          <ProjectsPage onBackToHome={navigateToHome} />
        </main>
      )}

      {currentPage === "materials" && (
        <main>
          <MaterialsCatalogPage onBackToHome={navigateToHome} />
        </main>
      )}

      {currentPage === "quote" && (
        <main>
          <GetQuotePage onBackToHome={navigateToHome} />
        </main>
      )}

      <Footer />
    </Box>
  );
}
