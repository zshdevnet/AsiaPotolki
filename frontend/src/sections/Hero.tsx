import { Container, Heading, Stack, Text, Button, HStack } from "@chakra-ui/react";
import ImageSlider from "../components/ImageSlider";
import { slides } from "../data/slides";

type HeroProps = {
    onGetQuote?: () => void;
    onViewProjects?: () => void;
};

export default function Hero({ onGetQuote, onViewProjects }: HeroProps) {
    return (
        <section role="banner" aria-label="Hero section">
            <Container as={Stack} spacing={{ base: 6, md: 10 }} py={{ base: 6, md: 12 }}>
                <ImageSlider items={slides} />
                <header>
                    <Stack spacing={3} textAlign="center" pt={{ base: 2, md: 4 }}>
                        <Heading as="h1" size={{ base: "lg", md: "2xl" }}>
                            Asia Potolki — Premium Ceilings
                        </Heading>
                        <Text as="p" color="slate.500" fontSize={{ base: "md", md: "lg" }}>
                            Stretch ceilings, 3D designs, and integrated lighting. Fast, clean, guaranteed.
                        </Text>
                        <HStack justify="center" spacing={4} pt={2} role="group" aria-label="Call to action buttons">
                            <Button 
                                size="lg" 
                                onClick={onGetQuote}
                                aria-label="Get a free estimate for your ceiling project"
                            >
                                Get Free Estimate
                            </Button>
                            <Button 
                                size="lg" 
                                variant="outline" 
                                onClick={onViewProjects}
                                aria-label="View our completed ceiling projects"
                            >
                                View Projects
                            </Button>
                        </HStack>
                    </Stack>
                </header>
            </Container>
        </section>
    );
}