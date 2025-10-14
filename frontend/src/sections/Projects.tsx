import { Container, Heading, SimpleGrid, Box, Image } from "@chakra-ui/react";


const pics = [
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&auto=format&fit=crop",
];


export default function Projects() {
    return (
        <Container py={{ base: 10, md: 16 }}>
            <Heading size="xl" mb={6}>Recent Projects</Heading>
            <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap={4}>
                {pics.map((src, i) => (
                    <Box key={i} rounded="xl" overflow="hidden">
                        <Image src={src} alt={`Project ${i + 1}`} objectFit="cover" aspectRatio={4 / 3} _hover={{ transform: "scale(1.02)" }} transition="transform .3s" />
                    </Box>
                ))}
            </SimpleGrid>
        </Container>
    );
}