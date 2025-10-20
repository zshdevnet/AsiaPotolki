import { useEffect, useRef, useState } from "react";
import {
  Box,
  IconButton,
  Image,
  HStack,
  VisuallyHidden,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Slide } from "../data/slides";

type Props = {
  items: Slide[];
  intervalMs?: number;
};

export default function ImageSlider({ items, intervalMs = 5000 }: Props) {
  const [index, setIndex] = useState(0);
  const len = items.length;
  const timeout = useRef<number | null>(null);
  const isSmall = useBreakpointValue({ base: true, md: false });

  useEffect(() => {
    if (len <= 1) return;
    timeout.current = window.setTimeout(
      () => setIndex((i) => (i + 1) % len),
      intervalMs
    );
    return () => {
      if (timeout.current) window.clearTimeout(timeout.current);
    };
  }, [index, len, intervalMs]);

  const go = (dir: number) => {
    setIndex((i) => (i + dir + len) % len);
  };

  if (!items || items.length === 0) return null;

  return (
    <Box position="relative" w="full" overflow="hidden" rounded="xl">
      {/* Slides */}
      {items.map((s, i) => (
        <Box
          key={i}
          position={i === index ? "relative" : "absolute"}
          inset={0}
          transition="opacity 400ms ease"
          opacity={i === index ? 1 : 0}
        >
          <Image
            src={s.src}
            alt={s.alt}
            w="full"
            h={{ base: "220px", md: "480px" }}
            objectFit="cover"
            loading={i === 0 ? "eager" : "lazy"}
            decoding="async"
          />

          {/* Dark overlay for better text readability */}
          <Box
            position="absolute"
            inset={0}
            pointerEvents="none"
            bgGradient={{
              base: "linear(to-b, blackAlpha.200, blackAlpha.600)",
              md: "linear(to-b, blackAlpha.100, blackAlpha.700)",
            }}
          />

          {/* Caption */}
          {s.caption && (
            <Box
              position="absolute"
              zIndex={1}
              bottom={{ base: 6, md: 10 }}
              left={{ base: 4, md: 8 }}
              right={{ base: 4, md: 8 }}
            >
              <Text
                as="h2"
                fontSize={{ base: "2xl", md: "4xl" }}
                fontWeight="800"
                color="white"
                lineHeight="1.2"
                textShadow="0 6px 24px rgba(0,0,0,0.6)"
              >
                {s.caption}
              </Text>
            </Box>
          )}
        </Box>
      ))}

      {/* Controls */}
      {!isSmall && (
        <HStack
          justify="space-between"
          position="absolute"
          inset={0}
          px={{ base: 1, md: 2 }}
        >
          <IconButton
            aria-label="Previous slide"
            icon={<ChevronLeft />}
            onClick={() => go(-1)}
            variant="ghost"
            size="lg"
            color="white"
            _hover={{ bg: "blackAlpha.400" }}
          />
          <IconButton
            aria-label="Next slide"
            icon={<ChevronRight />}
            onClick={() => go(1)}
            variant="ghost"
            size="lg"
            color="white"
            _hover={{ bg: "blackAlpha.400" }}
          />
        </HStack>
      )}

      {/* Dots */}
      <HStack
        position="absolute"
        bottom={{ base: 3, md: 5 }}
        left="50%"
        transform="translateX(-50%)"
        spacing={2}
      >
        {items.map((_, i) => (
          <Box
            as="button"
            key={i}
            w={i === index ? 8 : 5}
            h={2}
            rounded="full"
            bg={i === index ? "brand.500" : "whiteAlpha.700"}
            aria-current={i === index}
            onClick={() => setIndex(i)}
          >
            {i === index && <VisuallyHidden>Current slide</VisuallyHidden>}
          </Box>
        ))}
      </HStack>
    </Box>
  );
}
