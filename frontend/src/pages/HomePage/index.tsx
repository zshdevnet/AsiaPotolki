import { Box } from "@chakra-ui/react";
import Hero from "../../sections/Hero";
import Services from "../../sections/Services";
import Projects from "../../sections/Projects";

type Props = {
  onGetQuote: () => void;
  onViewProjects: () => void;
  onViewServices: () => void;
};

export default function HomePage({
  onGetQuote,
  onViewProjects,
  onViewServices,
}: Props) {
  return (
    <main>
      <Hero onGetQuote={onGetQuote} onViewProjects={onViewProjects} />
      <Box id="services">
        <Services onViewAll={onViewServices} />
      </Box>
      <Box id="projects">
        <Projects onViewAll={onViewProjects} />
      </Box>
      {/* Add other home-only sections here (Calculator, FAQ, Contact) */}
    </main>
  );
}
