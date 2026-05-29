import { useHeader } from "./useHeader";







export function HoverHighlighter() {
    const { hoverStyle } = useHeader();
    return (
        <div className={"big-header-focuspoint"}
          style={{ 
            position: "absolute",
            pointerEvents: "none",
            width: 30,
            height: 5,
            //backgroundColor: "blue",
            transition: "all 0.2s ease",
            borderRadius: 2,
            border: "1px solid var(--chakra-colors-ui-main)",
            ...hoverStyle 
        }}
        />
    )
}