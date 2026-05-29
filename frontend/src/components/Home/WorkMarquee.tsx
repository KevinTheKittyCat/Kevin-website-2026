import { Marquee } from "@chakra-ui/react"
import {
    IoLogoFigma,
    IoLogoGitlab,
    IoLogoJavascript,
    IoLogoLinkedin,
    IoLogoTwitter,
    IoLogoVimeo,
} from "react-icons/io5"


export function WorkMarquee({ }) {
    return (
        <Marquee.Root maxW="100vw" overflow="hidden" pauseOnInteraction
            borderBlock={"1px solid var(--chakra-colors-ui-text)"} py={2}
            css={{
                "--marquee-edge-color": "var(--chakra-colors-ui-background)",
                "--marquee-edge-size": "40%",
            }}
        >
            <Marquee.Edge side="start" />
            <Marquee.Viewport>
                <Marquee.Content>
                    {items.map((item, i) => (
                        <Marquee.Item key={i} px="2rem">
                            {item.icon && (
                                <item.icon
                                    size="5rem"
                                    aria-label={item.label}
                                    color={item.color}
                                />
                            )}
                        </Marquee.Item>
                    ))}
                </Marquee.Content>
            </Marquee.Viewport>
            <Marquee.Edge side="end" />
        </Marquee.Root>
    )
}

// EXAMPLES FROM CHAKRA UI DOCS, NOT FINAL, JUST FOR TESTING
const items = [
    { icon: IoLogoFigma, label: "Figma", color: "#F24E1E" },
    { icon: IoLogoTwitter, label: "Twitter", color: "#1da1f2" },
    { icon: IoLogoLinkedin, label: "LinkedIn", color: "#0077b5" },
    { icon: IoLogoGitlab, label: "GitLab", color: "#fc6d26" },
    { icon: IoLogoVimeo, label: "Vimeo", color: "#1ab7ea" },
    { icon: IoLogoJavascript, label: "JavaScript", color: "#f7df1e" },
]
