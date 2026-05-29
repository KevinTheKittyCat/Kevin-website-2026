import { defineRecipe } from "@chakra-ui/react"


export const linkRecipe = defineRecipe({
    base: {
        color: "ui.main",
        fontWeight: "bold",
        textDecoration: "none",
        _hover: {
            textDecoration: "underline",
        },
    },
    variants: {
        variant: {
            default: {},
            subtle: {
                color: "ui.text",
                _hover: {
                    color: "ui.main",
                },
            },
        },
    },
    defaultVariants: {
        variant: "default",
    },
})