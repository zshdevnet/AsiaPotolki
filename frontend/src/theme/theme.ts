import { extendTheme } from "@chakra-ui/react";
import type { ThemeConfig } from "@chakra-ui/react";

// Minimal color tokens used across the app. Kept small to avoid style changes.
const colors = {
    ink: {
        900: "#0F172A", // Base text on light
        800: "#111827", // Alt
    },
    paper: {
        50: "#F8FAFC", // surfaces
    },
    slate: {
        500: "#64748B", // muted
    },
    // Primary brand (small neutral teal — you can swap later if desired)
    brand: {
        500: "#0ea5a4",
        600: "#0b8f88",
    },
    // Secondary / custom tokens
    altBrand: {
        500: "#F16319",
        700: "#C44F14",
    },
    deep: {
        700: "#024768",
    },
    danger: {
        600: "#99302A",
    },
    neutral: {
        500: "#858585",
    },
};

const config: ThemeConfig = {
    initialColorMode: "light",
    useSystemColorMode: false,
};

const theme = extendTheme({
    config,
    fonts: {
        heading:
            "Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
        body: "Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
    },
    colors,
    styles: {
        global: (props: any) => ({
            body: {
                bg: props.colorMode === "light" ? "paper.50" : "ink.900",
                color: props.colorMode === "light" ? "ink.900" : "paper.50",
            },
        }),
    },
    components: {
        Button: {
            defaultProps: { colorScheme: "brand" },
            variants: {
                solid: {
                    rounded: "xl",
                    fontWeight: 600,
                },
            },
        },
        Container: {
            baseStyle: {
                maxW: "6xl",
                px: { base: 4, md: 6 },
            },
        },
    },
});

export default theme;