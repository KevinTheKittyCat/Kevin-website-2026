import { useRef, useCallback } from "react";
import { Button } from "@chakra-ui/react";
import { useHeader } from "./useHeader";
import { useNavigate } from "@tanstack/react-router";



interface HeaderButtonProps {
    navLink?: string;
    content?: React.ReactNode;
    children: React.ReactNode;
}


export function HeaderButton({
    navLink,
    content,
    children,
    ...props }: HeaderButtonProps & React.ComponentProps<typeof Button>
) {
    const navigate = useNavigate();
    const { hoverStyle, setHoverStyle, setContent } = useHeader();
    const ref = useRef<HTMLButtonElement>(null)

    const onHover = useCallback(() => {
        // Doesn't update content if content changes.
        setContent(content || null);


        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return
        setHoverStyle({
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height,
        });
    }, [setHoverStyle, content]);

    const onClick = useCallback(() => {
        if (!navLink) return
        navigate({ to: navLink });
    }, [navigate, navLink]);

    const onInteractLeave = useCallback(() => {
        return
        //setHoverStyle({});
    }, [setHoverStyle]);

    return <Button
        ref={ref}
        onMouseEnter={onHover}
        onFocus={onHover}
        onMouseLeave={onInteractLeave}
        onBlur={onInteractLeave}
        onClick={onClick}
        variant="ghost"
        className={`header-button`}
        {...props}
    >
        {/*button.icon} {button.text}*/}
        {children}
    </Button >;
}