import { Box, Flex, Text } from "@chakra-ui/react"
import { Link } from "@tanstack/react-router"
import { IoLogoGithub } from "react-icons/io5"







export function WhereToFindMe() {
    return (
        <Box
            position="absolute" left={4} top={"50vh"} transform="translateY(-50%)"
            display={{ base: "none", md: "flex" }} flexDirection="column"
            gap={2} zIndex={1}
            w={200} minH={200}
            layerStyle="glassCard"
        >
            <Text fontWeight="bold">Where to find me</Text>
            <Link to="https://github.com/KevinTheKittyCat" target="_blank">
                <Text color="ui.text">
                    <IoLogoGithub size={24} style={{ display: "inline", marginRight: 8 }} />
                    GitHub
                </Text>
            </Link>
        </Box>
    )
}