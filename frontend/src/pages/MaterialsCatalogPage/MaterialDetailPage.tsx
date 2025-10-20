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
  Badge,
  Card,
  CardBody,
  VStack,
  Icon,
  useColorModeValue,
  Flex,
  Divider,
  List,
  ListItem,
  ListIcon,
  Progress,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import {
  ArrowLeft,
  Check,
  Star,
  Shield,
  Droplets,
  Flame,
  Calendar,
  Ruler,
  Eye,
  Palette,
} from "lucide-react";
import type { MaterialType } from "./index";

type MaterialDetailPageProps = {
  material: MaterialType;
  onBack: () => void;
};

export default function MaterialDetailPage({
  material,
  onBack,
}: MaterialDetailPageProps) {
  const cardBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const sectionBg = useColorModeValue("gray.50", "gray.900");

  return (
    <main role="main" aria-label={`${material.name} material details`}>
      {/* Header Section */}
      <Container py={{ base: 6, md: 12 }}>
        <Stack spacing={6}>
          <Button
            leftIcon={<ArrowLeft />}
            variant="ghost"
            alignSelf="flex-start"
            onClick={onBack}
            aria-label="Back to materials catalog"
          >
            Back to Materials
          </Button>

          {/* Hero Section */}
          <SimpleGrid columns={{ base: 1, lg: 2 }} gap={8} alignItems="center">
            <Box>
              <HStack spacing={3} mb={4}>
                <Icon as={material.icon} boxSize={8} color="brand.500" />
                <Badge
                  colorScheme="brand"
                  fontSize="sm"
                  px={3}
                  py={1}
                  rounded="md"
                >
                  {material.name}
                </Badge>
              </HStack>
              <Heading as="h1" size="2xl" mb={4}>
                {material.name}
              </Heading>
              <Text
                fontSize="xl"
                color="gray.600"
                _dark={{ color: "gray.300" }}
                mb={6}
              >
                {material.description}
              </Text>
              <HStack spacing={6} mb={6}>
                <Box>
                  <Text fontSize="sm" color="gray.500" mb={1}>
                    Price Range
                  </Text>
                  <Text fontSize="2xl" fontWeight="bold" color="brand.500">
                    {material.priceRange}
                  </Text>
                </Box>
                <Divider orientation="vertical" h={12} />
                <Box>
                  <Text fontSize="sm" color="gray.500" mb={1}>
                    Durability
                  </Text>
                  <HStack>
                    <Progress
                      value={material.durability}
                      colorScheme="brand"
                      size="lg"
                      w="100px"
                      rounded="full"
                    />
                    <Text fontWeight="bold">{material.durability}%</Text>
                  </HStack>
                </Box>
              </HStack>
              <HStack spacing={4}>
                <Button size="lg" colorScheme="brand">
                  Get Quote for {material.name}
                </Button>
                <Button size="lg" variant="outline">
                  Download Specs
                </Button>
              </HStack>
            </Box>

            {/* Hero Image */}
            <Box>
              <Image
                src={material.image}
                alt={`${material.name} ceiling installation example`}
                w="full"
                h="400px"
                objectFit="cover"
                rounded="2xl"
                shadow="2xl"
              />
            </Box>
          </SimpleGrid>
        </Stack>
      </Container>

      {/* Content Tabs */}
      <Container py={{ base: 6, md: 12 }}>
        <Tabs variant="enclosed" colorScheme="brand">
          <TabList>
            <Tab>Specifications</Tab>
            <Tab>Advantages</Tab>
            <Tab>Applications</Tab>
            <Tab>Gallery</Tab>
          </TabList>

          <TabPanels>
            {/* Specifications Tab */}
            <TabPanel p={0} pt={8}>
              <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
                {/* Technical Specs */}
                <Card bg={cardBg} border="1px" borderColor={borderColor}>
                  <CardBody p={6}>
                    <Heading size="md" mb={4} color="brand.500">
                      Technical Specifications
                    </Heading>
                    <VStack align="stretch" spacing={4}>
                      <Flex justify="space-between" align="center">
                        <HStack>
                          <Icon as={Ruler} color="gray.400" />
                          <Text>Thickness</Text>
                        </HStack>
                        <Text fontWeight="600">
                          {material.specifications.thickness}
                        </Text>
                      </Flex>
                      <Divider />
                      <Flex justify="space-between" align="center">
                        <HStack>
                          <Icon as={Ruler} color="gray.400" />
                          <Text>Maximum Width</Text>
                        </HStack>
                        <Text fontWeight="600">
                          {material.specifications.width}
                        </Text>
                      </Flex>
                      <Divider />
                      <Flex justify="space-between" align="center">
                        <HStack>
                          <Icon as={Palette} color="gray.400" />
                          <Text>Texture</Text>
                        </HStack>
                        <Text fontWeight="600">
                          {material.specifications.texture}
                        </Text>
                      </Flex>
                      <Divider />
                      <Flex justify="space-between" align="center">
                        <HStack>
                          <Icon as={Eye} color="gray.400" />
                          <Text>Light Reflection</Text>
                        </HStack>
                        <Text fontWeight="600">
                          {material.specifications.lightReflection}
                        </Text>
                      </Flex>
                      <Divider />
                      <Flex justify="space-between" align="center">
                        <HStack>
                          <Icon as={Calendar} color="gray.400" />
                          <Text>Warranty</Text>
                        </HStack>
                        <Text fontWeight="600">
                          {material.specifications.warranty}
                        </Text>
                      </Flex>
                    </VStack>
                  </CardBody>
                </Card>

                {/* Properties */}
                <Card bg={cardBg} border="1px" borderColor={borderColor}>
                  <CardBody p={6}>
                    <Heading size="md" mb={4} color="brand.500">
                      Material Properties
                    </Heading>
                    <VStack align="stretch" spacing={4}>
                      <HStack justify="space-between">
                        <HStack>
                          <Icon
                            as={Droplets}
                            color={
                              material.specifications.waterResistant
                                ? "green.500"
                                : "red.500"
                            }
                          />
                          <Text>Water Resistant</Text>
                        </HStack>
                        <Badge
                          colorScheme={
                            material.specifications.waterResistant
                              ? "green"
                              : "red"
                          }
                        >
                          {material.specifications.waterResistant
                            ? "Yes"
                            : "No"}
                        </Badge>
                      </HStack>
                      <Divider />
                      <HStack justify="space-between">
                        <HStack>
                          <Icon
                            as={Flame}
                            color={
                              material.specifications.fireRetardant
                                ? "green.500"
                                : "red.500"
                            }
                          />
                          <Text>Fire Retardant</Text>
                        </HStack>
                        <Badge
                          colorScheme={
                            material.specifications.fireRetardant
                              ? "green"
                              : "red"
                          }
                        >
                          {material.specifications.fireRetardant ? "Yes" : "No"}
                        </Badge>
                      </HStack>
                      <Divider />
                      <Box>
                        <Text fontSize="sm" color="gray.500" mb={2}>
                          Maintenance Level
                        </Text>
                        <Text fontWeight="600">{material.maintenance}</Text>
                      </Box>
                      <Divider />
                      <Box>
                        <Text fontSize="sm" color="gray.500" mb={2}>
                          Best For
                        </Text>
                        <HStack flexWrap="wrap" spacing={2}>
                          {material.bestFor.map((item, index) => (
                            <Badge
                              key={index}
                              variant="subtle"
                              colorScheme="blue"
                            >
                              {item}
                            </Badge>
                          ))}
                        </HStack>
                      </Box>
                    </VStack>
                  </CardBody>
                </Card>
              </SimpleGrid>
            </TabPanel>

            {/* Advantages Tab */}
            <TabPanel p={0} pt={8}>
              <Card bg={cardBg} border="1px" borderColor={borderColor}>
                <CardBody p={8}>
                  <Heading size="lg" mb={6} textAlign="center">
                    Why Choose {material.name}?
                  </Heading>
                  <List spacing={4}>
                    {material.advantages.map((advantage, index) => (
                      <ListItem key={index}>
                        <ListIcon as={Check} color="green.500" />
                        <Text as="span" fontSize="lg">
                          {advantage}
                        </Text>
                      </ListItem>
                    ))}
                  </List>
                </CardBody>
              </Card>
            </TabPanel>

            {/* Applications Tab */}
            <TabPanel p={0} pt={8}>
              <Box>
                <Heading size="lg" mb={6} textAlign="center">
                  Perfect Applications for {material.name}
                </Heading>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={4}>
                  {material.applications.map((application, index) => (
                    <Card
                      key={index}
                      bg={cardBg}
                      border="1px"
                      borderColor={borderColor}
                      _hover={{ borderColor: "brand.500", shadow: "md" }}
                      transition="all 0.2s"
                    >
                      <CardBody p={4} textAlign="center">
                        <Icon as={Star} color="brand.500" mb={2} />
                        <Text fontWeight="600">{application}</Text>
                      </CardBody>
                    </Card>
                  ))}
                </SimpleGrid>
              </Box>
            </TabPanel>

            {/* Gallery Tab */}
            <TabPanel p={0} pt={8}>
              <Box>
                <Heading size="lg" mb={6} textAlign="center">
                  {material.name} Installation Gallery
                </Heading>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
                  {material.gallery.map((imageUrl, index) => (
                    <Box
                      key={index}
                      rounded="xl"
                      overflow="hidden"
                      shadow="lg"
                      _hover={{ transform: "scale(1.02)", shadow: "xl" }}
                      transition="all 0.3s"
                    >
                      <Image
                        src={imageUrl}
                        alt={`${material.name} installation example ${
                          index + 1
                        }`}
                        w="full"
                        h="250px"
                        objectFit="cover"
                        loading="lazy"
                      />
                    </Box>
                  ))}
                </SimpleGrid>
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>

      {/* Call to Action */}
      <Container py={{ base: 10, md: 16 }}>
        <Box
          bg={sectionBg}
          p={{ base: 8, md: 12 }}
          rounded="2xl"
          textAlign="center"
        >
          <Stack spacing={4} align="center">
            <Icon as={Shield} boxSize={12} color="brand.500" />
            <Heading size="lg">Ready for {material.name}?</Heading>
            <Text maxW="2xl" color="gray.600" _dark={{ color: "gray.300" }}>
              Get a personalized quote for your {material.name} ceiling
              installation. Our experts will help you design the perfect
              solution for your space.
            </Text>
            <HStack spacing={4}>
              <Button size="lg" colorScheme="brand">
                Get Free Quote
              </Button>
              <Button size="lg" variant="outline" colorScheme="brand">
                Schedule Consultation
              </Button>
            </HStack>
          </Stack>
        </Box>
      </Container>
    </main>
  );
}
