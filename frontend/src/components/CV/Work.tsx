import { WorkItem } from "./WorkItem"
import { effektivjobb, forgevtt, freelance, frontivia, norseeffect, relevantInfo, sideKoder, støttekontakt, swiftner, sgruppen, uxNoroff, videregaende, codeHS } from "./interface"

export function Work() {
    return (
        <div className="right-bar-cv column">
            <div className="row-on-pc center">
                {/*
                    <img className="cv-image" src="https://firebasestorage.googleapis.com/v0/b/personal-website-56d79.appspot.com/o/prosjekter%2FProsjekt%20cards%2FDSC00612%20323233%20no%20bk%20small.png?alt=media&token=1573e172-9e34-4f96-974f-905731fa5e78" alt="image-of-Kevin-h.j" />
                */}
                <div className="column no-gap">
                    <h3 className="no-line-height">Full-stack Utvikler og UX Designer</h3>
                    <div className="row wrap">
                        <h1 className="no-line-height">Kevin</h1>
                        <h1 className="no-line-height">H. Jensen</h1>
                    </div>
                </div>
            </div>
            <div className="column center">
                <h2>Arbeid</h2>
            </div>
            <div className="strech-width column big-gap">
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
            </div>
        </div>
    )
}