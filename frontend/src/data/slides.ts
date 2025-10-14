export interface Slide {
src: string;
alt: string;
caption?: string;
}


// Replace with your own images later; these are high-quality placeholders
export const slides: Slide[] = [
{
src: "https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?q=80&w=2000&auto=format&fit=crop",
alt: "Modern living room with stretch ceiling and cove lighting",
caption: "Premium Stretch Ceilings — Seamless, elegant, fast install",
},
{
src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2000&auto=format&fit=crop",
alt: "Kitchen ceiling with recessed lights",
caption: "Clean lines & perfect lighting integration",
},
{
src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2000&auto=format&fit=crop",
alt: "Bathroom glossy ceiling with spot lights",
caption: "Moisture‑resistant finishes for kitchens & bathrooms",
},
];