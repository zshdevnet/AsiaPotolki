import {
  Container,
  Heading,
  Stack,
  Text,
  Button,
  HStack,
  SimpleGrid,
  Box,
  Image,
} from "@chakra-ui/react";
import { Calculator, ExternalLink } from "lucide-react";
import BreadcrumbNav from "../components/BreadcrumbNav";

type ProjectsPageProps = {
  onBackToHome?: () => void;
};

const projects = [
  {
    id: 1,
    title: "Modern Living Room Ceiling",
    location: "Downtown Apartment",
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&auto=format&fit=crop",
    description:
      "Premium white stretch ceiling with integrated LED cove lighting",
  },
  {
    id: 2,
    title: "Luxury Bathroom Design",
    location: "Private Villa",
    src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&auto=format&fit=crop",
    description:
      "Glossy stretch ceiling with moisture-resistant finish and spot lights",
  },
  {
    id: 3,
    title: "Contemporary Kitchen",
    location: "Family Home",
    src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200&auto=format&fit=crop",
    description: "Multi-level ceiling design with track lighting system",
  },
  {
    id: 4,
    title: "Office Reception Area",
    location: "Business Center",
    src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&auto=format&fit=crop",
    description: "Clean minimalist ceiling with recessed lighting grid",
  },
  {
    id: 5,
    title: "Restaurant Interior",
    location: "City Restaurant",
    src: "https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=1200&auto=format&fit=crop",
    description: "Curved stretch ceiling design with ambient lighting zones",
  },
  {
    id: 6,
    title: "Bedroom Ceiling Design",
    location: "Master Bedroom",
    src: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&auto=format&fit=crop",
    description: "Elegant fabric stretch ceiling with dimmable LED integration",
  },
  {
    id: 7,
    title: "Conference Room",
    location: "Corporate Office",
    src: "https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?w=1200&auto=format&fit=crop",
    description: "Professional ceiling with integrated AV and lighting system",
  },
  {
    id: 8,
    title: "Hotel Lobby",
    location: "Luxury Hotel",
    src: "https://images.unsplash.com/photo-1505015920881-0f222374cbf9?w=1200&auto=format&fit=crop",
    description: "Grand curved ceiling with custom lighting design",
  },
  {
    id: 9,
    title: "Retail Store",
    location: "Shopping Mall",
    src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&auto=format&fit=crop",
    description:
      "Commercial stretch ceiling with track lighting for product display",
  },
];

export default function ProjectsPage({ onBackToHome }: ProjectsPageProps) {
  return (
    <main role="main" aria-label="Projects portfolio page">
      {/* Header Section */}
      <Container
        as={Stack}
        spacing={{ base: 6, md: 10 }}
        py={{ base: 6, md: 12 }}
      >
        <header>
          <Stack spacing={3} textAlign="center">
            <BreadcrumbNav
              items={[
                { label: "Home", href: "/", onClick: onBackToHome },
                { label: "Projects", href: "/projects" },
              ]}
            />
            <Heading as="h1" size={{ base: "xl", md: "2xl" }}>
              Our Projects
            </Heading>
            <Text
              as="p"
              color="slate.500"
              fontSize={{ base: "md", md: "lg" }}
              maxW="2xl"
              mx="auto"
            >
              Explore our portfolio of premium stretch ceiling installations.
              From residential to commercial projects, see the quality and
              craftsmanship we deliver.
            </Text>
          </Stack>
        </header>
      </Container>

      {/* Projects Grid */}
      <Container py={{ base: 10, md: 16 }}>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          gap={6}
          role="list"
          aria-label="Completed ceiling projects"
        >
          {projects.map((project) => (
            <Box
              key={project.id}
              rounded="2xl"
              overflow="hidden"
              shadow="lg"
              _hover={{ transform: "translateY(-2px)", shadow: "xl" }}
              transition="all 0.2s"
              role="listitem"
              as="article"
            >
              <Image
                src={project.src}
                alt={`${project.title} - ${project.description}`}
                objectFit="cover"
                aspectRatio={4 / 3}
                w="full"
                loading="lazy"
                decoding="async"
              />
              <Stack p={5} spacing={3}>
                <Heading as="h3" size="md">
                  {project.title}
                </Heading>
                <Text as="p" fontSize="sm" color="brand.500" fontWeight="600">
                  {project.location}
                </Text>
                <Text color="slate.500" fontSize="sm">
                  {project.description}
                </Text>
              </Stack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>

      {/* Call to Action */}
      <Container py={{ base: 10, md: 16 }}>
        <Stack
          spacing={4}
          textAlign="center"
          bg="gray.50"
          _dark={{ bg: "gray.800" }}
          p={{ base: 6, md: 10 }}
          rounded="2xl"
        >
          <Heading size={{ base: "lg", md: "xl" }}>
            Ready to Start Your Project?
          </Heading>
          <Text color="slate.500" fontSize={{ base: "md", md: "lg" }}>
            Let us transform your space with premium stretch ceilings. Get a
            free consultation today.
          </Text>
          <HStack justify="center" spacing={4} pt={2}>
            <Button size="lg" leftIcon={<Calculator />}>
              Get Free Estimate
            </Button>
            <Button size="lg" variant="outline" leftIcon={<ExternalLink />}>
              View Gallery
            </Button>
          </HStack>
        </Stack>
      </Container>
    </main>
  );
}
