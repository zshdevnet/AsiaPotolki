import { Container, SimpleGrid, Card, CardHeader, CardBody, Heading, Text, Icon, Button, Stack } from "@chakra-ui/react";
import { Wrench, Layers, Lightbulb, ArrowRight } from "lucide-react";

type ServicesProps = {
    onViewAll?: () => void;
};

const items = [
    { title: "Stretch Ceilings", desc: "Seamless finish, quick install.", icon: Layers },
    { title: "Lighting Integration", desc: "Spots, LED cove, tracks.", icon: Lightbulb },
    { title: "Repair & Replace", desc: "Leaks, tears, re‑leveling.", icon: Wrench },
];

export default function Services({ onViewAll }: ServicesProps) {
    return (
        <section aria-labelledby="services-heading">
            <Container py={{ base: 10, md: 16 }}>
                <Stack spacing={6}>
                    <Heading as="h2" id="services-heading" size="xl">Services</Heading>
                    <SimpleGrid 
                        columns={{ base: 1, md: 3 }} 
                        gap={6}
                        role="list"
                        aria-label="Our ceiling services"
                    >
                        {items.map((it) => (
                            <Card 
                                key={it.title} 
                                rounded="2xl" 
                                shadow="lg" 
                                _hover={{ transform: "translateY(-2px)", shadow: "xl" }} 
                                transition="all 0.2s"
                                role="listitem"
                                tabIndex={0}
                                aria-label={`${it.title} service`}
                            >
                                <CardHeader>
                                    <Icon as={it.icon} boxSize={8} color="brand.500" aria-hidden="true" />
                                    <Heading as="h3" size="md" mt={3}>{it.title}</Heading>
                                </CardHeader>
                                <CardBody>
                                    <Text color="slate.500">{it.desc}</Text>
                                </CardBody>
                            </Card>
                        ))}
                    </SimpleGrid>
                    <Stack align="center" pt={4}>
                        <Button 
                            size="lg" 
                            variant="outline" 
                            rightIcon={<ArrowRight />}
                            onClick={onViewAll}
                            aria-label="View all our services in detail"
                        >
                            View All Services
                        </Button>
                    </Stack>
                </Stack>
            </Container>
        </section>
    );
}