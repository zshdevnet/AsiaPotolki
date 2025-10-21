import {
  Container,
  Heading,
  Stack,
  Text,
  Button,
  HStack,
  SimpleGrid,
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  Card,
  CardBody,
  Icon,
  VStack,
} from "@chakra-ui/react";
import { Phone, Mail, MapPin, Clock, Calculator, Send } from "lucide-react";
import BreadcrumbNav from "../components/BreadcrumbNav";
import { useState } from "react";

type GetQuotePageProps = {
  onBackToHome?: () => void;
};

const contactInfo = [
  {
    title: "Phone",
    value: "+1 (555) 123-4567",
    description: "Call us for immediate assistance",
    icon: Phone,
  },
  {
    title: "Email",
    value: "info@asiapotolki.com",
    description: "Send us your project details",
    icon: Mail,
  },
  {
    title: "Address",
    value: "123 Business Street, City",
    description: "Visit our showroom",
    icon: MapPin,
  },
  {
    title: "Working Hours",
    value: "Mon-Fri: 8AM-6PM",
    description: "Saturday: 9AM-4PM",
    icon: Clock,
  },
];

export default function GetQuotePage({ onBackToHome }: GetQuotePageProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    roomSize: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you! We'll contact you within 24 hours with your free quote.");
  };

  return (
    <main role="main" aria-label="Get quote and contact page">
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
                { label: "Get Quote", href: "/quote" },
              ]}
            />
            <Heading as="h1" size={{ base: "xl", md: "2xl" }}>
              Get a Free Quote
            </Heading>
            <Text
              as="p"
              color="slate.500"
              fontSize={{ base: "md", md: "lg" }}
              maxW="2xl"
              mx="auto"
            >
              Ready to transform your space? Get a personalized quote for your
              stretch ceiling project. Free consultation • No obligation •
              Expert advice guaranteed.
            </Text>
          </Stack>
        </header>
      </Container>

      {/* Contact Info Cards */}
      <Container py={{ base: 6, md: 10 }}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={6} mb={10}>
          {contactInfo.map((info) => (
            <Card
              key={info.title}
              rounded="2xl"
              shadow="lg"
              _hover={{ transform: "translateY(-2px)", shadow: "xl" }}
              transition="all 0.2s"
            >
              <CardBody textAlign="center">
                <Icon as={info.icon} boxSize={8} color="brand.500" mb={3} />
                <Heading size="sm" mb={2}>
                  {info.title}
                </Heading>
                <Text fontWeight="600" mb={1}>
                  {info.value}
                </Text>
                <Text fontSize="sm" color="slate.500">
                  {info.description}
                </Text>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      </Container>

      {/* Quote Form */}
      <Container py={{ base: 10, md: 16 }}>
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={10} alignItems="start">
          {/* Form */}
          <Box>
            <Stack spacing={6}>
              <Stack spacing={3}>
                <Heading size="lg">Request Your Free Quote</Heading>
                <Text color="slate.500">
                  Fill out the form below and we'll provide you with a detailed
                  quote within 24 hours.
                </Text>
              </Stack>

              <Box
                as="form"
                onSubmit={handleSubmit}
                p={{ base: 6, md: 8 }}
                bg="gray.50"
                _dark={{ bg: "gray.800" }}
                rounded="2xl"
              >
                <VStack spacing={5}>
                  <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} w="full">
                    <FormControl isRequired>
                      <FormLabel>Full Name</FormLabel>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        bg="white"
                        _dark={{ bg: "gray.700" }}
                      />
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Email Address</FormLabel>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        bg="white"
                        _dark={{ bg: "gray.700" }}
                      />
                    </FormControl>
                  </SimpleGrid>

                  <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} w="full">
                    <FormControl isRequired>
                      <FormLabel>Phone Number</FormLabel>
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                        bg="white"
                        _dark={{ bg: "gray.700" }}
                      />
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Project Type</FormLabel>
                      <Select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        placeholder="Select project type"
                        bg="white"
                        _dark={{ bg: "gray.700" }}
                      >
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                        <option value="repair">Repair Service</option>
                        <option value="consultation">Consultation Only</option>
                      </Select>
                    </FormControl>
                  </SimpleGrid>

                  <FormControl>
                    <FormLabel>Room Size (Optional)</FormLabel>
                    <Input
                      name="roomSize"
                      value={formData.roomSize}
                      onChange={handleInputChange}
                      placeholder="e.g. 12x15 feet or 20 sqm"
                      bg="white"
                      _dark={{ bg: "gray.700" }}
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel>Project Details</FormLabel>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Describe your project, preferred timeline, and any specific requirements..."
                      rows={4}
                      bg="white"
                      _dark={{ bg: "gray.700" }}
                    />
                  </FormControl>

                  <Button type="submit" size="lg" leftIcon={<Send />} w="full">
                    Send Quote Request
                  </Button>
                </VStack>
              </Box>
            </Stack>
          </Box>

          {/* Benefits */}
          <Box>
            <Stack spacing={6}>
              <Stack spacing={3}>
                <Heading size="lg">Why Choose Asia Potolki?</Heading>
                <Text color="slate.500">
                  Get premium stretch ceilings with professional service and
                  guaranteed quality.
                </Text>
              </Stack>

              <Stack spacing={4}>
                <Box p={5} bg="gray.50" _dark={{ bg: "gray.800" }} rounded="xl">
                  <Heading size="sm" mb={2} color="brand.500">
                    ✓ Free Consultation
                  </Heading>
                  <Text fontSize="sm" color="slate.500">
                    On-site visit with 3D visualization and material samples
                  </Text>
                </Box>

                <Box p={5} bg="gray.50" _dark={{ bg: "gray.800" }} rounded="xl">
                  <Heading size="sm" mb={2} color="brand.500">
                    ✓ Fast Installation
                  </Heading>
                  <Text fontSize="sm" color="slate.500">
                    Most projects completed in 2-4 hours with minimal mess
                  </Text>
                </Box>

                <Box p={5} bg="gray.50" _dark={{ bg: "gray.800" }} rounded="xl">
                  <Heading size="sm" mb={2} color="brand.500">
                    ✓ 15-Year Warranty
                  </Heading>
                  <Text fontSize="sm" color="slate.500">
                    Comprehensive warranty on materials and installation
                  </Text>
                </Box>

                <Box p={5} bg="gray.50" _dark={{ bg: "gray.800" }} rounded="xl">
                  <Heading size="sm" mb={2} color="brand.500">
                    ✓ Expert Team
                  </Heading>
                  <Text fontSize="sm" color="slate.500">
                    Certified installers with 15+ years of experience
                  </Text>
                </Box>
              </Stack>
            </Stack>
          </Box>
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
            Need Immediate Assistance?
          </Heading>
          <Text color="slate.500" fontSize={{ base: "md", md: "lg" }}>
            Call us directly for urgent projects or same-day consultations.
          </Text>
          <HStack justify="center" spacing={4} pt={2}>
            <Button size="lg" leftIcon={<Phone />}>
              Call Now: +1 (555) 123-4567
            </Button>
            <Button size="lg" variant="outline" leftIcon={<Calculator />}>
              Price Calculator
            </Button>
          </HStack>
        </Stack>
      </Container>
    </main>
  );
}
