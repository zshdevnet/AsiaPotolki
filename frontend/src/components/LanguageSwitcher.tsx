import { useEffect, useState } from "react";
import {
  Button,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

type Lang = "RU" | "EN" | "TJ";

// Public icons live in /public/icons
const ICON: Record<Lang, string> = {
  RU: "/icons/ru.svg",
  EN: "/icons/us.svg",
  TJ: "/icons/tj.svg",
};

const LABEL: Record<Lang, string> = {
  RU: "Russian",
  EN: "English",
  TJ: "Tajik",
};

export default function LanguageSwitcher() {
  const [lang, setLang] = useState<Lang>("RU");
  const btnHover = useColorModeValue("gray.100", "gray.700");

  // Optional: remember last selected language
  useEffect(() => {
    const stored = window.localStorage.getItem("lang");
    if (stored === "RU" || stored === "EN" || stored === "TJ") setLang(stored);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("lang", lang);
  }, [lang]);

  const renderItem = (code: Lang) => (
    <MenuItem key={code} onClick={() => setLang(code)}>
      <HStack spacing={3}>
        <Image src={ICON[code]} alt={`${LABEL[code]} flag`} boxSize="18px" />
        <Text>{LABEL[code]}</Text>
      </HStack>
    </MenuItem>
  );

  return (
    <Menu placement="bottom-end" autoSelect={false}>
      <MenuButton
        as={Button}
        size="sm"
        variant="ghost"
        _hover={{ bg: btnHover }}
        aria-label="Language selector"
      >
        <HStack spacing={2}>
          <Image src={ICON[lang]} alt={`${LABEL[lang]} flag`} boxSize="16px" />
          <Text>{lang}</Text>
        </HStack>
      </MenuButton>
      <MenuList minW="44">
        {renderItem("RU")}
        {renderItem("EN")}
        {renderItem("TJ")}
      </MenuList>
    </Menu>
  );
}
