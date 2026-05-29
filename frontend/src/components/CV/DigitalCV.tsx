import { Flex } from "@chakra-ui/react"
import InfoBar from "./InfoBar"
import { Work } from "./Work"





export function DigitalCV() {
    return (
        <Flex className="cv" direction="column" >
            <h1>Digital CV</h1>
            <Flex direction="row"  className="cv-content">
                <InfoBar />
                <Work />
            </Flex>
        </Flex>
    )
}