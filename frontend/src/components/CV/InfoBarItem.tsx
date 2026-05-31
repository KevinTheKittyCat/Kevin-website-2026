import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { InfoBarItemData } from "./interface";
import { FiArrowDown } from "react-icons/fi";
import { Flex, Text } from "@chakra-ui/react"


export function InfoBarItem({ data }: { data: InfoBarItemData }) {

    return (
        <Flex direction="column" gap={2} className=" column big-gap small-gap">
            {data.title && <Text textStyle="2xl">{data.title}</Text>}

            {data.points?.map((point, i) => {
                return (<Point point={point} key={i} />)
            })
            }
        </Flex>
    )
}

// Add dropdown to "minimized" version
const Point = ({ point, subpoint = false }: { point: any, subpoint?: boolean }) => {
    const [open, setOpen] = useState((!subpoint && point.dropdown));
    const titleRef = useRef(null);

    return (
        <Flex direction="column" gap={0} ml={2} className={"language column no-gap stretch-width" + (subpoint ? " cv-sub-point" : "")}>
            <button
                onClick={() => point.dropdown && setOpen(!open)} ref={titleRef}>
                <Flex gap={2} alignItems="center">
                    {point.title}
                    {point.dropdown && <FiArrowDown style={{
                        transform: open ? "rotate(0deg)" : "rotate(-90deg)",
                        transition: "transform 0.3s"
                    }} />}
                </Flex>
            </button>
            <motion.div
                className={"sub-point-container " + ((point.dropdown && !open) ? " closed " : "")}
                initial={{ height: "auto" }}
                animate={{ height: (point.dropdown && !open) ? 0 : "auto" }}
                transition={{ duration: 0.3 }}
                style={{ overflow: "hidden", marginLeft: 10 }}
            >
                {point?.sub?.map((sub: InfoBarItemData["sub"], i: number) => {
                    return (
                        <Subpoint subpoint={sub} key={i} />
                    )
                })}
            </motion.div>
        </Flex>
    )
}



const Subpoint = ({ subpoint }: { subpoint: any }) => {
    if (subpoint.dropdown) return <Point point={subpoint} subpoint />;

    const filter = subpoint.split('(')[0].trim();
    const queryString = new URLSearchParams({ filter: JSON.stringify({ tags: [filter] }) });

    return (
        <Link to={`/prosjekter?${queryString}`}>
            <p>{subpoint}</p>
        </Link>
    )
}

