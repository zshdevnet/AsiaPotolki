import { Container, SimpleGrid, Card, CardHeader, CardBody, Heading, Text, Icon } from "@chakra-ui/react";
import { Wrench, Layers, Lightbulb } from "lucide-react";


const items = [
    { title: "Stretch Ceilings", desc: "Seamless finish, quick install.", icon: Layers },
    { title: "Lighting Integration", desc: "Spots, LED cove, tracks.", icon: Lightbulb },
    { title: "Repair & Replace", desc: "Leaks, tears, re‑leveling.", icon: Wrench },
];


export default function Services() {
    return (
        <Container py={{ base: 10, md: 16 }}>
            <Heading size="xl" mb={6}>Services</Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
                {items.map((it) => (
                    <Card key={it.title} rounded="2xl" shadow="lg" _hover={{ transform: "translateY(-2px)", shadow: "xl" }} transition="all 0.2s">
                        <CardHeader>
                            <Icon as={it.icon} boxSize={8} color="brand.500" />
                            <Heading size="md" mt={3}>{it.title}</Heading>
                        </CardHeader>
                        <CardBody>
                            <Text color="slate.500">{it.desc}</Text>
                        </CardBody>
                    </Card>
                ))}
            </SimpleGrid>
        </Container>
    );
}