import { Container, Divider, HStack, IconButton, Text } from "@chakra-ui/react";
import { Facebook, Instagram, Phone } from "lucide-react";


export default function Footer() {
    return (
        <Container py={10}>
            <Divider mb={6} />
            <HStack justify="space-between">
                <Text fontSize="sm">© {new Date().getFullYear()} Asia Potolki • asiapotolki.com</Text>
                <HStack>
                    <IconButton aria-label="Call" icon={<Phone />} variant="ghost" />
                    <IconButton aria-label="Instagram" icon={<Instagram />} variant="ghost" />
                    <IconButton aria-label="Facebook" icon={<Facebook />} variant="ghost" />
                </HStack>
            </HStack>
        </Container>
    );
}