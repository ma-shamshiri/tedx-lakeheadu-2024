import { Button, Link } from "@chakra-ui/react"; // Import Chakra UI components

const Buttons = () => {
  return (
    <div>
      {/* ************* btn btn--primary ************* */}

      <Button
        className="btn btn--primary"
        border="0"
        borderRadius="40px"
        cursor="pointer"
        fontSize={{ base: "1.8rem", md: "1.5rem" }}
        fontWeight="600"
        margin="1rem 0"
        outline="0"
        padding="2rem 4vw"
        textAlign="center"
        textTransform="uppercase"
        whiteSpace="nowrap"
        bg="var(--color-primary)"
        color="#fff"
        _hover={{ bg: "#3a8ffd" }}
      >
        Buy Now
      </Button>

      {/* ************* btn btn--secondary btn--block ************* */}

      <Link
        className="btn btn--secondary btn--block"
        href="#"
        borderRadius="40px"
        cursor="pointer"
        fontSize={{ base: "1.8rem", lg: "1.5rem" }}
        fontWeight="600"
        margin="1rem 0"
        outline="0"
        padding="2rem 4vw"
        textAlign="center"
        textTransform="uppercase"
        whiteSpace="nowrap"
        bg="var(--color-secondary)"
        color="#fff"
        display="inline-block"
        width="100%"
        _hover={{ bg: "#05cdf0" }}
      >
        Buy Now
      </Link>
    </div>
  );
};

export default Buttons;
