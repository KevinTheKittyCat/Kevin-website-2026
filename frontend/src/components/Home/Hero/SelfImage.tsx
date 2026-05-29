import { ImgObj } from "@/components/Common/LoadImageObj";

import { Flex } from "@chakra-ui/react";

const selfImageObj = {
    "url": "https://firebasestorage.googleapis.com/v0/b/kevin-433d0.appspot.com/o/DSC01343-darker-smaller.png?alt=media&token=a2bd74bf-16a7-4306-9417-2159d98dc29f",
    //"smallImage": "https://firebasestorage.googleapis.com/v0/b/frontivia-nettside.appspot.com/o/companies%2Fd8578e0c-8a9a-422d-ba83-ee46e390e715%2Fimages%2F%20small7d111be2-18ea-4e38-85e4-15875e22727bDSC01343-darker-smaller-rm-bg-2-smaller2%400.25x.png?alt=media&token=ce95a607-60e1-4bf4-b5fb-039156325d89",
    //"mediumImage": "https://firebasestorage.googleapis.com/v0/b/frontivia-nettside.appspot.com/o/companies%2Fd8578e0c-8a9a-422d-ba83-ee46e390e715%2Fimages%2F%20medium7d111be2-18ea-4e38-85e4-15875e22727bDSC01343-darker-smaller-rm-bg-2-smaller2%400.25x.png?alt=media&token=acf396bf-4e5a-40b4-b0d7-b16f6bdee552"
}




interface SelfImageProps {
    line?: boolean,
}

export function SelfImage({ line=true, className, ...props }: SelfImageProps & React.HTMLAttributes<HTMLDivElement>) {

    return (
        <Flex direction="column" {...props} className={"about-me-image-wrapper" + className}>
            {/*<ParticleComponent />*/}
            {/*
            <img src="https://firebasestorage.googleapis.com/v0/b/kevin-433d0.appspot.com/o/DSC01343-darker-smaller.png?alt=media&token=a2bd74bf-16a7-4306-9417-2159d98dc29f" alt="Kevin" className="about-me-image" />
            */}
            {/*<img src={LightKevin} className="about-me-image light-mode-only"/>*/}
            {<ImgObj imageObj={selfImageObj} className="about-me-image dark-mode-only" />}
            {line && <hr className="about-me-image-line" />}
        </Flex>
    )
}