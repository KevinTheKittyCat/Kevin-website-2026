import { useEffect, useRef, useState, useCallback } from "react";
import { Img } from "./LoadImages";


/* EXAMPLE USAGE
const imageObj = {
    "url": "https://firebasestorage.googleapis.com/v0/b/frontivia-nettside.appspot.com/o/companies%2Fd8578e0c-8a9a-422d-ba83-ee46e390e715%2Fimages%2F%207b6d26ea-d181-4e34-b9c2-dd362e4f23acfemale-power-brunette-young-woman-with-short-hair-2023-11-27-05-14-35-utc.jpg?alt=media&token=ea0fe81b-53b6-455a-88a3-ce0a51b2c61c",
    "smallImage": "https://firebasestorage.googleapis.com/v0/b/frontivia-nettside.appspot.com/o/companies%2Fd8578e0c-8a9a-422d-ba83-ee46e390e715%2Fimages%2F%20small7b6d26ea-d181-4e34-b9c2-dd362e4f23acfemale-power-brunette-young-woman-with-short-hair-2023-11-27-05-14-35-utc.jpg?alt=media&token=0b090054-c557-4a5e-817b-4c5de6d79d80",
    "mediumImage": "https://firebasestorage.googleapis.com/v0/b/frontivia-nettside.appspot.com/o/companies%2Fd8578e0c-8a9a-422d-ba83-ee46e390e715%2Fimages%2F%20medium7b6d26ea-d181-4e34-b9c2-dd362e4f23acfemale-power-brunette-young-woman-with-short-hair-2023-11-27-05-14-35-utc.jpg?alt=media&token=92fd41bd-1ff1-44f5-b8be-c9ea9b4cfde2"
}
*/

interface imageObj {
    url: string;
    smallImage?: string;
    mediumImage?: string;
}

export function ImgObj({ imageObj, ...props }: { imageObj: imageObj } & React.HTMLAttributes<HTMLDivElement>) {
    const [src, setSrc] = useState([imageObj.smallImage ?? imageObj.mediumImage ?? imageObj.url]);
    const imgRef = useRef<HTMLDivElement>(null);



    const calculateParentSize = useCallback(() => {
        if (!imgRef.current) return { width: 0, height: 0 };
        const parent = imgRef.current.parentElement;
        if (!parent) return { width: 0, height: 0 };
        const parentWidth = parent.clientWidth;
        const parentHeight = parent.clientHeight;
        return { width: parentWidth, height: parentHeight };
    }, [imgRef]);

    useEffect(() => {
        const url = imageObj.url;
        const mediumImage = imageObj.mediumImage ?? url;
        const smallImage = imageObj.smallImage ?? mediumImage ?? url;
        // See if area is big enough for the next image.
        if (!imgRef.current) return;
        if (smallImage === url && mediumImage === url) return
        const parentSize = calculateParentSize();
        let imageArray = [smallImage]
        if (parentSize.width > 32 || parentSize.height > 32) imageArray.push(mediumImage);
        if (parentSize.width > 164 || parentSize.height > 164) imageArray.push(url);
        setSrc(imageArray);
    }, [imageObj]);

    return (
        <Img ref={imgRef} src={src} {...props} />
    )
}