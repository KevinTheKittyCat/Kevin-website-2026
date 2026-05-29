import { WorkMarquee } from "./Hero/WorkMarquee";
import { Button, Flex, Span } from "@chakra-ui/react"
import { WhereToFindMe } from "./Hero/WhereToFindMe";
import { Text } from "@chakra-ui/react";
import { Link } from "@tanstack/react-router";
import { buildInfo } from "@/client/buildInfo";
import { SelfImage } from "./Hero/SelfImage";




export function HeroSection() {
    return (
        <section style={{
            height: "100vh", width: "100%", maxHeight: "100vh",
            boxSizing: "border-box", display: "flex", flexDirection: "column",
            paddingTop: "60px",
        }}>
            <Flex direction="row" position="relative"
                h="100%" maxW="breakpoint-xl"
                p={8} m={"0 auto"} gap={8}
                alignItems="center" justifyContent="space-between">
                <Flex direction="column" className='hero-text'>
                    <Flex direction="column" align="flex-end">
                        <Flex display={{ md: "none" }} className='on-phone-only front-image'>
                            <SelfImage />
                        </Flex>
                        <Text textStyle="2xl" className='hero-title'>UX Designer & Full-Stack Developer</Text>
                        <Text textStyle="4xl" className='hero-title'><Span className='highlight' color="ui.main" >
                            Kevin H. Jensen
                            {/*<LetterByLetterVariation4>Kevin H. Jensen</LetterByLetterVariation4>*/}
                        </Span>'s Portfolio!</Text>

                        <Text textStyle="xl" className='hero-title'>Here you can find information about me and my projects.</Text>
                        <Flex marginBlock={6} gap={4} direction={{ base: "column", md: "row" }} alignItems={{ base: "stretch", md: "center" }}>
                            <Link to="/cv">
                                <Button variant="outline">View CV</Button>
                            </Link>
                            <Link to="/contact">
                                <Button className='new-primary-button'>
                                    <div className='invert-button' />
                                    Contact Me
                                </Button>
                            </Link>
                        </Flex>
                    </Flex>
                    <Flex direction="column" align="flex-end">
                        <p className='small-text description'>Last updated: {buildInfo.buildDate.toLocaleDateString()}</p>
                    </Flex>
                </Flex>
                <Flex display={{ md: "flex", base: "none", }}>
                    <SelfImage style={{opacity:0}}/>
                    <Flex position="absolute" bottom={0}>
                        <SelfImage line={false} />
                    </Flex>
                </Flex>
            </Flex>

            <WhereToFindMe />

            <Flex h="6rem">
                <WorkMarquee />
            </Flex>
        </section>
    )
}