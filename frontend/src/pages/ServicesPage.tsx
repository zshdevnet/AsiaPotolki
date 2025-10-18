import { Container, Heading, Stack, Text, Button, HStack, SimpleGrid, Card, CardHeader, CardBody, Icon, Box } from "@chakra-ui/react";
import { Wrench, Layers, Lightbulb, ArrowLeft, Calculator, Users, Clock, Shield } from "lucide-react";

type ServicesPageProps = {
    onBackToHome?: () => void;
};

const services = [
    {
        title: "Stretch Ceilings",
        desc: "Premium PVC and fabric stretch ceilings with seamless finish. Quick installation with minimal disruption to your space.",
        icon: Layers,
        features: ["Seamless finish", "Quick install (2-4 hours)", "Waterproof options", "15+ year warranty"]
    },
    {
        title: "Lighting Integration",
        desc: "Professional lighting solutions integrated into your ceiling design. LED spots, cove lighting, and track systems.",
        icon: Lightbulb,
        features: ["LED spot lights", "Cove lighting", "Track systems", "Smart controls"]
    },
    {
        title: "Repair & Replace",
        desc: "Expert repair services for existing stretch ceilings. From small tears to complete replacements.",
        icon: Wrench,
        features: ["Leak repairs", "Tear fixing", "Re-leveling", "Color matching"]
    },
    {
        title: "Design Consultation",
        desc: "Free on-site consultation and 3D design visualization. We help you choose the perfect ceiling solution.",
        icon: Users,
        features: ["Free consultation", "3D visualization", "Material samples", "Expert advice"]
    },
    {
        title: "Emergency Service",
        desc: "24/7 emergency repairs for water damage, leaks, and urgent ceiling issues. Fast response guaranteed.",
        icon: Clock,
        features: ["24/7 availability", "Emergency repairs", "Water damage", "Fast response"]
    },
    {
        title: "Warranty & Support",
        desc: "Comprehensive warranty coverage and ongoing support. We stand behind our work with full guarantees.",
        icon: Shield,
        features: ["15-year warranty", "Material guarantee", "Installation support", "Maintenance tips"]
    }
];

export default function ServicesPage({ onBackToHome }: ServicesPageProps) {
    return (
        <Box>
            {/* Header Section */}
            <Container as={Stack} spacing={{ base: 6, md: 10 }} py={{ base: 6, md: 12 }}>
                <Stack spacing={3} textAlign="center">
                    <Button 
                        leftIcon={<ArrowLeft />} 
                        variant="ghost" 
                        alignSelf="flex-start" 
                        onClick={onBackToHome}
                    >
                        Back to Home
                    </Button>
                    <Heading size={{ base: "xl", md: "2xl" }}>Our Services</Heading>
                    <Text color="slate.500" fontSize={{ base: "md", md: "lg" }} maxW="2xl" mx="auto">
                        Professional stretch ceiling installation, lighting integration, and repair services. 
                        Fast, clean, guaranteed work with 15+ years of experience.
                    </Text>
                </Stack>
            </Container>

            {/* Services Grid */}
            <Container py={{ base: 10, md: 16 }}>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
                    {services.map((service) => (
                        <Card 
                            key={service.title} 
                            rounded="2xl" 
                            shadow="lg" 
                            _hover={{ transform: "translateY(-2px)", shadow: "xl" }} 
                            transition="all 0.2s"
                        >
                            <CardHeader>
                                <Icon as={service.icon} boxSize={8} color="brand.500" />
                                <Heading size="md" mt={3}>{service.title}</Heading>
                            </CardHeader>
                            <CardBody>
                                <Text color="slate.500" mb={4}>{service.desc}</Text>
                                <Stack spacing={2}>
                                    {service.features.map((feature, idx) => (
                                        <Text key={idx} fontSize="sm" color="slate.600">
                                            • {feature}
                                        </Text>
                                    ))}
                                </Stack>
                            </CardBody>
                        </Card>
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
                    <Heading size={{ base: "lg", md: "xl" }}>Ready to Transform Your Ceiling?</Heading>
                    <Text color="slate.500" fontSize={{ base: "md", md: "lg" }}>
                        Get a free consultation and estimate for your project. No obligation, just expert advice.
                    </Text>
                    <HStack justify="center" spacing={4} pt={2}>
                        <Button size="lg" leftIcon={<Calculator />}>Get Free Estimate</Button>
                        <Button size="lg" variant="outline">View Portfolio</Button>
                    </HStack>
                </Stack>
            </Container>
        </Box>
    );
}