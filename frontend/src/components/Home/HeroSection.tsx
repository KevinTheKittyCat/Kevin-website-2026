import { WorkMarquee } from "./WorkMarquee";
import { Flex } from "@chakra-ui/react"
import { WhereToFindMe } from "./WhereToFindMe";






export function HeroSection() {
    return (
        <section style={{ 
            height: "100vh", width: "100%", maxHeight: "100vh", 
            boxSizing: "border-box",  display: "flex", flexDirection: "column",
            paddingTop: "60px"
            }}>
            <Flex direction="column" h="100%" p={8} m={"0 auto"} maxW="breakpoint-xl">
                <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>Welcome to My Portfolio</h1>
                <p style={{ fontSize: "1.25rem", color: "#666" }}>
                    I'm Kevin, a passionate software developer specializing in web development and UI/UX design. Explore my projects and experience my work!
                </p>
            </Flex>

            <WhereToFindMe />

            <Flex h="6rem">
                <WorkMarquee />
            </Flex>
        </section>
    )
}