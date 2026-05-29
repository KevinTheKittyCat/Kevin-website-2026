import { Flex, Link, Text } from "@chakra-ui/react"
import { useNavigate } from "@tanstack/react-router"
import { Link as TanLink } from "@tanstack/react-router"


export interface HeaderCardProps {
    image: string,
    title?: string,
    description?: string,
    links: { href: string, text: string }[],
    href?: string
}

export function HeaderCard({
    image,
    title,
    description,
    links,
    href
}: HeaderCardProps) {
    const navigate = useNavigate()


    return (
        <Flex className="header-card" direction="column" >
            <TanLink to={href || links[0]?.href} style={{ textDecoration: "none" }}>
                <Flex direction="column"
                    alignItems="center" color="ui.text"
                    className="header-card-image" onClick={() => {
                        navigate({ to: href || links[0]?.href })
                    }
                    }>
                    <img src={image} alt={title} />
                    {title && <Text className="bold">{title}</Text>}
                </Flex>
            </TanLink>
            <Flex direction="column" className="header-card-text center" gap={2} alignItems="center">
                {/*description && <p>{description}</p>*/}
                <Flex className="header-card-links row center" gap={4}>
                    {links.map((link, i) => {
                        return (
                            <TanLink key={i} to={link.href}>
                                {link.text}
                            </TanLink>
                        )
                    })}
                </Flex>
            </Flex>
        </Flex >
    )
}