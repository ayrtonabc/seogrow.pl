import { Box, Container, Text, Image } from "@chakra-ui/react"

export const TrustLogosSection = () => {
  const clients = [
    { name: "Anko.eu", logo: "/clientes/anko.eu.webp", logoSmall: "/clientes/anko.eu-90.webp", smallWidth: 90, width: 180, height: 84, sizes: "86px", maxW: "86px", maxH: "40px" },
    { name: "Asmed", logo: "/clientes/asmed.webp", logoSmall: "/clientes/asmed-110.webp", smallWidth: 110, width: 220, height: 81, sizes: "109px", maxW: "109px", maxH: "40px" },
    { name: "Fotoefekt.pl", logo: "/clientes/fotoefektpl.webp", logoSmall: "/clientes/fotoefektpl-64.webp", smallWidth: 64, width: 128, height: 80, sizes: "64px", maxW: "64px", maxH: "40px" },
    { name: "Inteligentne Folie", logo: "/clientes/inteligentnefolie-small.webp", logoSmall: "/clientes/inteligentnefolie-110.webp", smallWidth: 110, width: 224, height: 71, sizes: "110px", maxW: "112px", maxH: "35px" },
    { name: "Med-Vitox", logo: "/clientes/med-vitox.webp", logoSmall: "/clientes/med-vitox-82.webp", smallWidth: 82, width: 200, height: 99, sizes: "81px", maxW: "81px", maxH: "40px" },
    { name: "Opieka", logo: "/clientes/opieka-small.webp", logoSmall: "/clientes/opieka-112.webp", smallWidth: 112, width: 224, height: 60, sizes: "112px", maxW: "112px", maxH: "30px" },
    { name: "Tio Bigotes", logo: "/clientes/tiobigotes.webp", logoSmall: "/clientes/tiobigotes-112.webp", smallWidth: 112, width: 224, height: 33, sizes: "112px", maxW: "112px", maxH: "17px" },
  ]

  // Duplicar logos para animación infinita sin cortes
  const allClients = [...clients, ...clients]

  return (
    <Box as="section" bg="white" py="12" borderBottom="1px solid" borderColor="#E2E8F0" overflow="hidden" aria-label="Wybrane projekty i marki">
      <Container maxW="6xl">
        <Text
          textAlign="center"
          fontSize="12px"
          color="#94A3B8"
          mb="6"
          textTransform="uppercase"
          letterSpacing="0.12em"
          fontWeight="700"
        >
          Nasi klienci
        </Text>
      </Container>
      
      {/* Carrusel infinito */}
      <Box 
        className="logo-carousel"
        display="flex"
        alignItems="center"
        gap={{ base: "8", md: "16" }}
        px="8"
        minH="48px"
      >
        {allClients.map((client, i) => (
          <Box
            key={i}
            h="12"
            minW="32"
            display="flex"
            alignItems="center"
            justifyContent="center"
            filter="grayscale(100%)"
            opacity="0.6"
            _hover={{ filter: "grayscale(0%)", opacity: "1" }}
            transition="all 0.3s"
            flexShrink={0}
          >
            <Image
              src={client.logo}
              srcSet={`${client.logoSmall} ${client.smallWidth}w, ${client.logo} ${client.width}w`}
              sizes={client.sizes}
              alt={i < clients.length ? `Logo klienta ${client.name}` : ""}
              aria-hidden={i >= clients.length ? true : undefined}
              loading={i < 2 ? "eager" : "lazy"}
              htmlWidth={client.width}
              htmlHeight={client.height}
              maxH={client.maxH}
              maxW={client.maxW}
              w="auto"
              h="auto"
              objectFit="contain"
              loading="lazy"
              decoding="async"
            />
          </Box>
        ))}
      </Box>
    </Box>
  )
}
