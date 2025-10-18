import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Box } from "@chakra-ui/react";
import { ChevronRight } from "lucide-react";
import { useEffect } from "react";

type BreadcrumbItem = {
  name: string;
  href?: string;
};

export const SEOBreadcrumbs = ({ items }: { items: BreadcrumbItem[] }) => {
  // Add structured data for breadcrumbs
  useEffect(() => {
    const breadcrumbStructuredData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": item.href ? `https://asiapotolki.com${item.href}` : undefined
      }))
    };

    // Remove existing breadcrumb structured data
    const existing = document.querySelector('script[data-breadcrumb]');
    if (existing) {
      existing.remove();
    }

    // Add new breadcrumb structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-breadcrumb', 'true');
    script.textContent = JSON.stringify(breadcrumbStructuredData);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.querySelector('script[data-breadcrumb]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [items]);

  return (
    <Box py={2} fontSize="sm">
      <Breadcrumb spacing={2} separator={<ChevronRight size={12} />}>
        {items.map((item, index) => (
          <BreadcrumbItem key={index} isCurrentPage={index === items.length - 1}>
            {item.href ? (
              <BreadcrumbLink href={item.href} color="gray.600">
                {item.name}
              </BreadcrumbLink>
            ) : (
              <span>{item.name}</span>
            )}
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
    </Box>
  );
};

// Add FAQ structured data for common questions
export const addFAQStructuredData = () => {
  useEffect(() => {
    const faqData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How long does stretch ceiling installation take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most stretch ceiling installations are completed within 2-4 hours, depending on the room size and complexity. Our professional installation process is fast, clean, and minimally disruptive."
          }
        },
        {
          "@type": "Question", 
          "name": "What is the warranty on stretch ceilings?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We provide a comprehensive 15-year warranty on all stretch ceiling installations, covering both materials and workmanship. This includes protection against sagging, discoloration, and manufacturing defects."
          }
        },
        {
          "@type": "Question",
          "name": "Can stretch ceilings be installed in bathrooms?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, stretch ceilings are perfect for bathrooms and kitchens. They are 100% waterproof, mold-resistant, and easy to clean. We use moisture-resistant materials specifically designed for high-humidity environments."
          }
        },
        {
          "@type": "Question",
          "name": "How much do stretch ceilings cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Stretch ceiling costs vary based on room size, design complexity, and finish type. Contact us for a free quote - we provide detailed estimates within 24 hours and offer competitive pricing across all our services."
          }
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-faq', 'true');
    script.textContent = JSON.stringify(faqData);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.querySelector('script[data-faq]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);
};