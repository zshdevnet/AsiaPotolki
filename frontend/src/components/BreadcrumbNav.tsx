import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

export type Crumb = {
  label: string;
  onClick?: () => void;
};

type Props = {
  items: Crumb[];
};

export default function BreadcrumbNav({ items }: Props) {
  return (
    <Breadcrumb fontWeight={600} fontSize={{ base: "sm", md: "md" }}>
      {items.map((c, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <BreadcrumbItem key={idx} isCurrentPage={isLast}>
            {c.onClick && !isLast ? (
              <BreadcrumbLink
                onClick={c.onClick}
                color="brand.600"
                _dark={{ color: "brand.500" }}
              >
                {c.label}
              </BreadcrumbLink>
            ) : (
              <BreadcrumbLink
                _hover={{ textDecoration: "none" }}
                cursor={isLast ? "default" : "pointer"}
              >
                {c.label}
              </BreadcrumbLink>
            )}
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  );
}
