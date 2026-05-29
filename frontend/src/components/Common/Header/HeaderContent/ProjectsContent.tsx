import { Flex, Link, Separator } from "@chakra-ui/react"
import { HeaderCard } from "./HeaderContentCard"

const cards = [
    {
        title: "The Effektivjobb App",
        description: "View our previous projects",
        image: "https://firebasestorage.googleapis.com/v0/b/personal-website-56d79.appspot.com/o/prosjekter%2FProsjekt%20cards%2Fimage_22-removebg-preview%201.png?alt=media&token=e8132295-e5e2-43ac-89e3-b86a89461404",
        links:
            [{
                href: "/prosjekt/effektivjobb",
                text: "View project"
            }, {
                href: "https://effektivjobb.com/",
                text: "Website"
            }],
    },
]

export function ProjectsContent() {

    return (
        <Flex direction="row" className="header-content-section" w="100%" gap={4} m="0 auto" maxW="1400px">
            <Flex className="header-cards-container" w="100%">
                {cards.map((card, i) => {
                    return (
                        <HeaderCard key={i} title={card.title} description={card.description} image={card.image} links={card.links} href={card.href} />
                    )
                })}
            </Flex>

            <Separator orientation="vertical" mx={4} />

            <Flex direction="column" justifyContent="center" gap={4}>
                <Link href="/prosjekter" w="max-content">View all</Link>
            </Flex>
        </Flex>
    )
}