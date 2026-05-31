import { WorkItem } from "./WorkItem"
import { effektivjobb, forgevtt, freelance, frontivia, norseeffect, relevantInfo, sideKoder, støttekontakt, swiftner, sgruppen, uxNoroff, videregaende, codeHS } from "./interface"
import { Text, Flex } from "@chakra-ui/react"

export function Work() {
    return (
        <Flex direction={"column"} gap={4} className="right-bar-cv column">
            <div className="row-on-pc center">
                {/*
                    <img className="cv-image" src="https://firebasestorage.googleapis.com/v0/b/personal-website-56d79.appspot.com/o/prosjekter%2FProsjekt%20cards%2FDSC00612%20323233%20no%20bk%20small.png?alt=media&token=1573e172-9e34-4f96-974f-905731fa5e78" alt="image-of-Kevin-h.j" />
                */}
                <div className="column no-gap">
                    <Text textStyle="2xl">Full-stack Utvikler og UX Designer</Text>
                    <Flex gap={2}>
                        <Text textStyle="4xl" className="no-line-height">Kevin</Text>
                        <Text textStyle="4xl" className="no-line-height">H. Jensen</Text>
                    </Flex>
                </div>
            </div>
            <div className="column center">
                <Text textStyle="3xl">Arbeid</Text>
            </div>
            <Flex direction="column" gap={4} className="strech-width column big-gap">
                <WorkItem data={swiftner} />
                <WorkItem data={norseeffect} />
                <WorkItem data={støttekontakt} />
                <WorkItem data={effektivjobb} />
                <WorkItem data={frontivia} />
                <WorkItem data={freelance} />
                <WorkItem data={sideKoder} />
                <WorkItem data={forgevtt} />
                <WorkItem data={sgruppen} />
                <WorkItem data={relevantInfo} />
                <WorkItem data={uxNoroff} />
                <WorkItem data={codeHS} />
                <WorkItem data={videregaende} />
            </Flex>
        </Flex>
    )
}