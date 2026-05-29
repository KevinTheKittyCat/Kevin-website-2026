import { useState } from "react"
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
        <div className="right-bar-item row" onMouseEnter={handleHover} onMouseLeave={handleLeave}>
            <WorkItemPc data={data} />
            {/*<WorkItemPhone data={data} />*/}
            {/* <OnHoverItem image={data?.image} hovering={hover} video={data?.video} /> */}
        </div>
    )
}

const WorkItemPc = ({ data }: { data: WorkItem }) => {

    return (
        <div className="on-pc-only row stretch-width">
            <div className="column stretch-width flex-end">
                <h3>{data?.role}</h3>
                <p>{data?.year?.from ?? data?.year?.to} {data?.year?.from && data?.year?.to ? `- ${data?.year?.to}` : ''}</p>
            </div>
            <div>
                <div className={data?.boldTitle ? "cv-big-circle" : "cv-circle"} />
            </div>
            <div className="column stretch-width">
                {data?.boldTitle ? <h2 className="active">{data?.title}</h2> : <h3>{data?.title}</h3>}
                {data?.description.map((text, i) => {
                    return (
                        <p key={i}>{text}</p>
                    )
                })}
            </div>
        </div>
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