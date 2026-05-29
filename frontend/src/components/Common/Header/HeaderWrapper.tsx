import { Button, Flex } from "@chakra-ui/react";
import { useHeader } from "./useHeader";


export function HeaderWrapper({ children }: { children: React.ReactNode }) {
    const { hoveringHeader, setHoveringHeader } = useHeader();
    return (
        <header style={{ position: "relative", zIndex: 1000 }}>
            <Flex direction="column" zIndex={999} 
                onMouseEnter={() => setHoveringHeader(true)}
                onMouseLeave={() => setHoveringHeader(false)}
                onFocus={() => setHoveringHeader(true)}
                onBlur={() => setHoveringHeader(false)}
            >
                {children}
            </Flex>
        </header>
    )
}