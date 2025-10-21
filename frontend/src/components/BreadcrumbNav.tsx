import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

export type Crumb = {
  label: string;
  href?: string;
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
            {!isLast ? (
              <BreadcrumbLink
                href={c.href || "#"}
                onClick={(e) => {
                  if (c.onClick) {
                    e.preventDefault();
                    c.onClick();
                  }
                }}
                color="brand.600"
                _dark={{ color: "brand.500" }}
              >
                {c.label}
              </BreadcrumbLink>
            ) : (
              <BreadcrumbLink
                _hover={{ textDecoration: "none" }}
                cursor="default"
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
