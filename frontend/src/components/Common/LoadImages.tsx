import { forwardRef, useEffect, useState, useCallback } from "react";


interface LoadImageObjProps {
    src: string[] | string;
    className?: string;
    onLoaded?: (src: string, index: number, isLast: boolean) => void;
}

export const Img = forwardRef(({ src, onLoaded, className, ...props }:
    LoadImageObjProps & React.ImgHTMLAttributes<HTMLImageElement>,
    ref: React.Ref<HTMLImageElement>
) => {

    //const [index, setIndex] = useState(0);
    const [source, setSource] = useState(isArray(src) ? src[0] : src);
    const [blur, setBlur] = useState(false);

    const loadImage = useCallback((src: string): Promise<string> => {
        return new Promise((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
                resolve(src);
            };
        });
    }, []);

    const loadImages = useCallback(async (images: Array<string>): Promise<void> => {
        for (let i = 0; i < images.length; i++) {
            const imgSrc = await loadImage(images[i]);
            setSource(() => imgSrc);
            if (onLoaded) onLoaded(imgSrc, i, i === images.length - 1);
        }
    }, [loadImage, onLoaded]);

    useEffect(() => {
        if (isArray(src)) {
            loadImages(src);
        } else {
            loadImage(src).then((imgSrc) => setSource(() => imgSrc));
        }
    }, [src]);

    useEffect(() => {
        setBlur(true)
        const setBackBlur = setTimeout(() => setBlur(false), 400);
        return () => clearTimeout(setBackBlur);
    }, [source]);

    return (
        <img ref={ref} src={source} className={(blur ? "animate-blur-in " : "") + className} loading="lazy" {...props} />
    );
});


function isArray(variable: string[] | string): variable is string[] {
    return Array.isArray(variable);
}
