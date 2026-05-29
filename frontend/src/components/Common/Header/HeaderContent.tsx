import { Container, Flex } from "@chakra-ui/react";
import { useHeader } from "./useHeader";






export function HeaderContent() {
    const { content, hoveringHeader } = useHeader()

    return (
        <Flex
            maxW="100vw"
            h="calc(60vh)"
            overflowY="auto"
            bg="ui.background"
            w="100vw"
            position="fixed"
            top={"0px"}
            left={"0px"}
            transform={hoveringHeader && content ? "translateY(0)" : "translateY(-100%)"}
            transition="transform 0.3s ease-in-out"
            p={6}
            pt="120px"
            borderBottom="1px solid var(--chakra-colors-ui-text)"
        >
            {content}
        </Flex>
    )
}