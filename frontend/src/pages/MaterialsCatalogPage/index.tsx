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
  Card,
  CardBody,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { Sparkles, Circle, Layers, Shirt } from "lucide-react";
import { useState } from "react";
import MaterialDetailPage from "./MaterialDetailPage";
import BreadcrumbNav from "../../components/BreadcrumbNav";

type MaterialsCatalogPageProps = {
  onBackToHome?: () => void;
};

export type MaterialType = {
  id: string;
  name: string;
  icon: any;
  description: string;
  features: string[];
  priceRange: string;
  durability: number;
  maintenance: string;
  bestFor: string[];
  image: string;
  gallery: string[];
  specifications: {
    thickness: string;
    width: string;
    texture: string;
    lightReflection: string;
    waterResistant: boolean;
    fireRetardant: boolean;
    warranty: string;
  };
  advantages: string[];
  applications: string[];
};

const materials: MaterialType[] = [
  {
    id: "matte",
    name: "Matte Finish",
    icon: Layers,
    description:
      "Classic matte finish that creates a smooth, elegant surface without glare. Perfect for any room where you want sophisticated, understated luxury.",
    features: [
      "No glare or reflections",
      "Hides imperfections well",
      "Classic elegant look",
      "Easy to clean",
    ],
    priceRange: "$8-12 per sq ft",
    durability: 85,
    maintenance: "Easy - regular dusting",
    bestFor: ["Living rooms", "Bedrooms", "Offices"],
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&auto=format&fit=crop",
    ],
    specifications: {
      thickness: "0.15-0.35mm",
      width: "Up to 5.1m seamless",
      texture: "Smooth matte",
      lightReflection: "5-10%",
      waterResistant: true,
      fireRetardant: true,
      warranty: "15 years",
    },
    advantages: [
      "Timeless and elegant appearance",
      "Excellent for hiding ceiling imperfections",
      "No distracting reflections or glare",
      "Perfect for creating cozy atmospheres",
      "Compatible with all lighting types",
    ],
    applications: [
      "Residential living spaces",
      "Corporate offices",
      "Hotels and hospitality",
      "Retail environments",
      "Healthcare facilities",
    ],
  },
  {
    id: "glossy",
    name: "Glossy Finish",
    icon: Circle,
    description:
      "High-gloss mirror-like surface that reflects light beautifully, making spaces appear larger and brighter. Creates stunning visual impact.",
    features: [
      "Mirror-like reflection",
      "Brightens spaces",
      "Modern aesthetic",
      "Easy to wipe clean",
    ],
    priceRange: "$12-18 per sq ft",
    durability: 90,
    maintenance: "Moderate - occasional polishing",
    bestFor: ["Bathrooms", "Kitchens", "Modern spaces"],
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&auto=format&fit=crop",
    ],
    specifications: {
      thickness: "0.15-0.35mm",
      width: "Up to 5.1m seamless",
      texture: "High gloss mirror",
      lightReflection: "85-95%",
      waterResistant: true,
      fireRetardant: true,
      warranty: "15 years",
    },
    advantages: [
      "Dramatically increases perceived room size",
      "Maximizes natural and artificial lighting",
      "Ultra-modern and luxurious appearance",
      "Excellent for contemporary design",
      "Superior moisture resistance",
    ],
    applications: [
      "Luxury bathrooms and spas",
      "Modern kitchens",
      "High-end retail stores",
      "Nightclubs and entertainment venues",
      "Contemporary residential spaces",
    ],
  },
  {
    id: "satin",
    name: "Satin Finish",
    icon: Sparkles,
    description:
      "Perfect balance between matte and glossy - subtle sheen with soft light reflection. Combines elegance with practicality for versatile applications.",
    features: [
      "Subtle pearl-like sheen",
      "Balanced light reflection",
      "Versatile for any decor",
      "Fingerprint resistant",
    ],
    priceRange: "$10-15 per sq ft",
    durability: 88,
    maintenance: "Low - simple cleaning",
    bestFor: ["Dining rooms", "Hallways", "Multi-purpose spaces"],
    image:
      "https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505015920881-0f222374cbf9?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&auto=format&fit=crop",
    ],
    specifications: {
      thickness: "0.15-0.35mm",
      width: "Up to 5.1m seamless",
      texture: "Satin pearl",
      lightReflection: "25-40%",
      waterResistant: true,
      fireRetardant: true,
      warranty: "15 years",
    },
    advantages: [
      "Perfect compromise between matte and gloss",
      "Subtle elegance suitable for any interior",
      "Gentle light diffusion creates warm ambiance",
      "Hides minor imperfections while adding depth",
      "Excellent durability and easy maintenance",
    ],
    applications: [
      "Residential dining areas",
      "Professional offices",
      "Hotel lobbies and corridors",
      "Conference rooms",
      "Upscale residential developments",
    ],
  },
  {
    id: "fabric",
    name: "Fabric Finish",
    icon: Shirt,
    description:
      "Premium textile stretch ceilings offering natural texture and breathability. Eco-friendly option with acoustic properties and unique aesthetic appeal.",
    features: [
      "Natural textile texture",
      "Breathable material",
      "Acoustic properties",
      "Eco-friendly option",
    ],
    priceRange: "$15-25 per sq ft",
    durability: 95,
    maintenance: "Specialized - professional cleaning",
    bestFor: ["Bedrooms", "Studies", "Acoustic spaces"],
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&auto=format&fit=crop",
    ],
    specifications: {
      thickness: "0.25-0.45mm",
      width: "Up to 5.1m seamless",
      texture: "Natural fabric weave",
      lightReflection: "10-20%",
      waterResistant: false,
      fireRetardant: true,
      warranty: "20 years",
    },
    advantages: [
      "Superior acoustic performance reduces noise",
      "Breathable material prevents condensation",
      "Environmentally friendly and recyclable",
      "Unique natural texture creates warmth",
      "Longest warranty and durability",
    ],
    applications: [
      "Home theaters and media rooms",
      "Bedrooms and nurseries",
      "Conference rooms and offices",
      "Libraries and study areas",
      "Restaurants and cafes",
    ],
  },
];

export default function MaterialsCatalogPage({
  onBackToHome,
}: MaterialsCatalogPageProps) {
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialType | null>(
    null
  );
  const cardBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  if (selectedMaterial) {
    return (
      <MaterialDetailPage
        material={selectedMaterial}
        onBack={() => setSelectedMaterial(null)}
        onNavigateHome={onBackToHome}
      />
    );
  }

  return (
    <main role="main" aria-label="Materials catalog page">
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
                { label: "Materials", href: "/materials" },
              ]}
            />
            <Heading as="h1" size={{ base: "xl", md: "2xl" }}>
              Premium Ceiling Materials
            </Heading>
            <Text
              as="p"
              color="slate.500"
              fontSize={{ base: "md", md: "lg" }}
              maxW="3xl"
              mx="auto"
            >
              Discover our collection of premium stretch ceiling materials. Each
              finish offers unique characteristics to perfectly complement your
              interior design vision and functional requirements.
            </Text>
          </Stack>
        </header>
      </Container>

      {/* Materials Grid */}
      <Container py={{ base: 10, md: 16 }}>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 4 }}
          gap={6}
          role="list"
          aria-label="Ceiling material types"
        >
          {materials.map((material) => (
            <Card
              key={material.id}
              bg={cardBg}
              border="1px"
              borderColor={borderColor}
              rounded="2xl"
              overflow="hidden"
              shadow="lg"
              _hover={{
                transform: "translateY(-4px)",
                shadow: "2xl",
                borderColor: "brand.500",
              }}
              transition="all 0.3s ease"
              cursor="pointer"
              onClick={() => setSelectedMaterial(material)}
              role="listitem"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setSelectedMaterial(material);
                }
              }}
            >
              {/* Material Image */}
              <Box position="relative" h="200px">
                <Image
                  src={material.image}
                  alt={`${material.name} ceiling finish example`}
                  w="full"
                  h="full"
                  objectFit="cover"
                  loading="lazy"
                />
              </Box>

              <CardBody p={6}>
                <VStack align="start" spacing={4}>
                  {/* Title and Price */}
                  <Box w="full">
                    <Heading as="h3" size="md" mb={1}>
                      {material.name}
                    </Heading>
                    <Text fontSize="sm" color="brand.500" fontWeight="600">
                      {material.priceRange}
                    </Text>
                  </Box>

                  {/* Description */}
                  <Text
                    fontSize="sm"
                    color="gray.600"
                    _dark={{ color: "gray.300" }}
                    noOfLines={3}
                  >
                    {material.description}
                  </Text>

                  {/* Key Features */}
                  <VStack align="start" spacing={1} w="full">
                    <Text
                      fontSize="xs"
                      fontWeight="600"
                      color="gray.500"
                      textTransform="uppercase"
                    >
                      Key Features
                    </Text>
                    {material.features.slice(0, 2).map((feature, index) => (
                      <HStack key={index} spacing={2}>
                        <Box
                          w={1}
                          h={1}
                          bg="brand.500"
                          rounded="full"
                          flexShrink={0}
                        />
                        <Text
                          fontSize="xs"
                          color="gray.600"
                          _dark={{ color: "gray.400" }}
                        >
                          {feature}
                        </Text>
                      </HStack>
                    ))}
                  </VStack>

                  {/* Durability Bar */}
                  <Box w="full">
                    <HStack justify="space-between" mb={1}>
                      <Text fontSize="xs" color="gray.500">
                        Durability
                      </Text>
                      <Text fontSize="xs" color="gray.500">
                        {material.durability}%
                      </Text>
                    </HStack>
                    <Box
                      h={2}
                      bg="gray.200"
                      _dark={{ bg: "gray.600" }}
                      rounded="full"
                    >
                      <Box
                        h="full"
                        bg="brand.500"
                        rounded="full"
                        w={`${material.durability}%`}
                        transition="width 1s ease"
                      />
                    </Box>
                  </Box>

                  {/* View Details Button */}
                  <Button
                    size="sm"
                    variant="outline"
                    colorScheme="brand"
                    w="full"
                    _hover={{ bg: "brand.50", _dark: { bg: "brand.900" } }}
                  >
                    View Details & Specifications
                  </Button>
                </VStack>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      </Container>

      {/* Call to Action */}
      <Container py={{ base: 10, md: 16 }}>
        <Box
          bg="brand.50"
          _dark={{ bg: "brand.900" }}
          p={{ base: 8, md: 12 }}
          rounded="2xl"
          textAlign="center"
        >
          <Stack spacing={4} align="center">
            <Heading size="lg">Need Help Choosing?</Heading>
            <Text maxW="2xl" color="gray.600" _dark={{ color: "gray.300" }}>
              Our expert team can help you select the perfect material for your
              project. Get a free consultation and personalized recommendations.
            </Text>
            <HStack spacing={4}>
              <Button size="lg" colorScheme="brand">
                Free Consultation
              </Button>
              <Button size="lg" variant="outline" colorScheme="brand">
                Download Catalog
              </Button>
            </HStack>
          </Stack>
        </Box>
      </Container>
    </main>
  );
}
