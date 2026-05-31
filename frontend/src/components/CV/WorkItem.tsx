import { useMemo, useState } from "react"
import { Text, Flex } from "@chakra-ui/react"
//import OnHoverItem from "./onHoverItem"

export interface WorkItem {
    title: string;
    boldTitle?: boolean;
    year: { from?: string, to?: string };
    role: string;
    description: string[];
    image?: string;
    video?: string;
}

export function WorkItem({ data }: { data: WorkItem }) {
    const [hover, setHover] = useState(false)

    const handleHover = () => {
        setHover(true)
    }

    const handleLeave = () => {
        setHover(false)
    }

    return (
        <Flex className="right-bar-item row" onMouseEnter={handleHover} onMouseLeave={handleLeave}>
            <WorkItemPc data={data} />
            {/*<WorkItemPhone data={data} />*/}
            {/* <OnHoverItem image={data?.image} hovering={hover} video={data?.video} /> */}
        </Flex>
    )
}

const WorkItemPc = ({ data }: { data: WorkItem }) => {
    const year = useMemo(() => {
        if (!data?.year?.from && !data?.year?.to) return "";
        if (data?.year?.from && !data?.year?.to) return data.year.from;
        if (!data?.year?.from && data?.year?.to) return data.year.to;
        if (data.year.from === data.year.to) return data.year.from;
        return `${data.year.from} - ${data.year.to}`;
    }, [data?.year])


    return (
        <Flex direction="column">
            <Flex direction="column" className="column stretch-width flex-end">

                {data?.boldTitle ?
                    <Text textStyle="md" className="active">{data?.title}</Text> :
                    <Text textStyle="md">{data?.title}</Text>
                }
                <Flex gap={4} alignItems="end">
                    <Text textStyle="2xl">{data?.role}</Text>
                    <Text textStyle="md" fontWeight="light" fontStyle="italic">{year}</Text>
                </Flex>
            </Flex>
            <Flex direction="column" className="column stretch-width">
                {data?.description.map((text, i) => {
                    return (
                        <p key={i}>{text}</p>
                    )
                })}
            </Flex>
        </Flex>
    )
}

const WorkItemPhone = ({ data }: { data: WorkItem }) => {

    return (
        <div className="on-phone-only row stretch-width center">

            <div className="column stretch-width">
                {data?.boldTitle ? <h2 className="active">{data?.title}</h2> : <h3>{data?.title}</h3>}
                <div className="row wrap flex-end">
                    <p>{data?.year?.from ?? data?.year?.to} {data?.year?.from && data?.year?.to ? `- ${data?.year?.to}` : ''}</p>
                    <p>{data?.role}</p>
                </div>
                {data?.description.map((text, i) => {
                    return (
                        <p key={i}>{text}</p>
                    )
                })}
            </div>
        </div>
    )
}