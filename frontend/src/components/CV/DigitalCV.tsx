import { Flex, Text } from "@chakra-ui/react"
import InfoBar from "./InfoBar"
import { Work } from "./Work"





export function DigitalCV() {
    return (
        <Flex className="cv" direction="column" >
            <Text textStyle="4xl" m="0 auto">Digital CV</Text>
            <Flex direction="row" className="cv-content" gap={8} padding={4}>
                <InfoBar />
                <Work />
            </Flex>
        </Flex>
    )
}